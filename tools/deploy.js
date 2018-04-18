/* eslint-disable strict, max-len, no-console */

'use strict';

const fs = require('fs');
const exec = require('child_process').exec;
const chalk = require('chalk');

const phpunitConfig = './phpunit.xml';

const info = msg => console.log(chalk.cyan(msg));
const done = msg => console.log(chalk.green(msg));
const error = msg => console.log(chalk.red(msg));
const abort = err => {
  console.log(chalk.red(err));
  process.exit(-1);
};

function verifyGitStatus() {
  return new Promise((resolve, reject) => {
    console.log(chalk.yellow('Verifying git status.'));

    exec('git status --porcelain', (err, stdout) => {
      let uncommited = stdout.trim().split(/\r|\n/);
      uncommited = uncommited.filter(line => line.length > 0);

      if (err)
        reject('Could not execute git status, are you sure a git repo exists?');
      if (uncommited.length >= 1)
        reject(
          `You have ${
            uncommited.length
          } uncommited file(s). Please make sure you commit everything or stage changes before deploying.`
        );

      resolve('Git status OK!');
    });
  })
    .then(done)
    .catch(abort);
}

function verifyPhpunitConfig() {
  return new Promise((resolve, reject) => {
    console.log(chalk.yellow('Verifying PHPUnit config.'));

    fs.stat(phpunitConfig, err => {
      if (err)
        reject(
          `Could not find \'${phpunitConfig}\', please make sure it exists before running deploy.`
        );

      resolve('PHPUnit config OK!');
    });
  })
    .then(done)
    .catch(abort);
}

function runPHPUnit() {
  return new Promise((resolve, reject) => {
    console.log(chalk.yellow('Running PHPUnit.'));

    exec(
      'phpunit --verbose --stderr --stop-on-failure',
      (err, stdout, stderr) => {
        if (stderr) {
          info(stderr);
        }

        if (err) {
          error('PHPUnit failed!');
        } else {
          resolve('PHPUnit passed!');
        }
      }
    ).stdout.on('data', data => info(data.toString()));
  })
    .then(done)
    .catch(abort);
}

const sequence = [verifyGitStatus, verifyPhpunitConfig, runPHPUnit];

sequence
  .reduce((cur, next) => cur.then(next), Promise.resolve())
  .then(() => done('Deploy finished!'));
