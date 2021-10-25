#!/usr/bin/env sh

# Abort on errors
set -e

# Build
npm run docs:build

# Navigate into the build output directory
cd docs/.vuepress/dist

# TODO Deploy to custom domain
# echo 'hackathon.effect.network' > CNAME

git init
git add -A
git commit -m 'deploy'

# Deploying to https://username.github.io/repo
git push -f git@github.com:effectai/hackathon-docs

cd -