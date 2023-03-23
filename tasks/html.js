const {
  src,
  dest
} = require('gulp');
const include = require('gulp-file-include');
const vn = require('gulp-version-number');
var removeHtmlComments = require('gulp-remove-html-comments');
const bs = require('browser-sync');

module.exports = function html() {
  return src(['src/**/*.html', '!src/components/**/*.html'])
    .pipe(include())
    .pipe(
      vn({
        value: '%DT%',
        append: {
          key: '_v',
          cover: 0,
          to: ['css', 'js']
        },
        output: {
          file: 'docs/version.json'
        }
      })
    )
    .pipe(removeHtmlComments())
    .pipe(dest('./docs/'))
    .pipe(bs.stream())
}