const {
  src,
  dest
} = require('gulp');
const include = require('gulp-file-include');
var removeHtmlComments = require('gulp-remove-html-comments');
const bs = require('browser-sync');

module.exports = function html() {
  return src(['src/**/*.html', '!src/components/**/*.html'])
    .pipe(include())
    .pipe(removeHtmlComments())
    .pipe(dest('./docs/'))
    .pipe(bs.stream())
}