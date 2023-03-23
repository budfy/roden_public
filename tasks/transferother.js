const {
  src,
  dest
} = require('gulp');
const changed = require('gulp-changed');

module.exports = function transferother() {
  return src('src/**/*.!(html|scss|css|js|json|svg|ico|png|jpg|jpeg|webp|gif|ttf|woff|woff2|ttf2|eot)')
    .pipe(changed('./docs/**/*.!(html|scss|css|js|json|svg|ico|png|jpg|jpeg|webp|gif|ttf|woff|woff2|ttf2|eot)'))
    .pipe(dest('./docs/'))
}