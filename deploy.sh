#!/usr/bin/env sh

# Abort on errors
set -e

# Build
npm run docs:build

# Navigate into the build output directory
cd docs/.vuepress/dist

# TODO Deploy to custom domain, Check with Laurens to setup url.
# echo 'hackathon.effect.network' > CNAME

git init
git add -A
git commit -m 'deploy'

# Deploying to https://username.github.io/repo
# if you are deploying to https://<USERNAME>.github.io/<REPO> branch-x:branch-y
# TODO check if the addition of branches is needed
git push -f git@github.com:effectai/hackathon-docs.git main:gh-pages

cd -