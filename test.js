import mocha from 'mocha';
import path from 'path';
import fs from 'fs';
import fetch from 'node-fetch';
import { assert } from 'chai';

require('dotenv').config();

const { HOST } = process.env;

describe('All Snake Tests', function() {
  fs.readdirSync(path.join(__dirname, 'inputs')).forEach(filename => {
    // Only read JSON files
    if (filename.indexOf('.json') !== -1) {
      it(`should pass ${filename}`, function() {
        // Parse out the tokens which are our valid moves
        const tokens = filename.substring(0, filename.length - 5).split('_');

        return new Promise((resolve, reject) => {
          // Read the json input
          const data = fs.readFileSync(
            path.join(__dirname, 'inputs', filename)
          );

          // Send our request!
          fetch('http://localhost:9000/move', {
            method: 'post',
            body: data,
            headers: { 'Content-Type': 'application/json' }
          })
            .then(res => res.json())
            .then(result => {
              // Make sure we got our response
              if (tokens.indexOf(result.move) === -1) {
                throw new Error(
                  `Expected one of [${tokens.slice(1)}], got ${result.move}`
                );
              }
              resolve();
            })
            .catch(err => {
              reject(err.message);
            });
        });
      });
    }
  });
});
