#!/bin/bash
cd client
git subtree pull --prefix client/dist origin gh-pages
npm run build
echo "dscmait.xyz" > ./dist/CNAME
git add dist && git commit -m "Initial dist subtree commit"
cd ..
git subtree push --prefix client/dist origin gh-pages