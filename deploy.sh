yarn build &&
git checkout gh-paages &&
rm -rf *.html *.js *css *.png *.jpg &&
mv dist/* ./ &&
rm -rf dist;
ga . &&
gc -m 'update' &&
git push &&
git checkout -
