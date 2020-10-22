#!/bin/bash

set -ueo pipefail

npm i -g webpack-cli gatsby-cli
npm ci --production
NODE_ENV=production gatsby build
