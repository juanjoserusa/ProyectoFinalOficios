#!/usr/bin/env bash
# exit on error
set -o errexit

npm install --force
npm run build

pip install -r requirements.txt

pipenv run upgrade
