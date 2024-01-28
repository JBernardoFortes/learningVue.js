#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'novo deploy'
git push -f git@github.com:focarica/BinaryTree.git master:githubPages

cd -