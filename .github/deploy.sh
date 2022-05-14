#!/bin/bash

# abort on errors
set -e
npm run build
cd dist

# if deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:nmacdon3/Resume.git main:gh-pages

cd -