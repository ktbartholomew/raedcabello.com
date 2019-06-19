#!/bin/bash

set -ueo pipefail

./node_modules/.bin/webpack
./node_modules/.bin/gulp sass
jekyll build
