const plugins = ["node_modules/typed.js/dist/typed.umd.js", "node_modules/axios/dist/axios.js",
  "node_modules/autosize/dist/autosize.js"
];
const {
  src,
  dest
} = require('gulp');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const chalk = require('chalk');

module.exports = function libs_js(done) {
  if (plugins.length > 0)
    return src(plugins)
      .pipe(map.init())
      .pipe(uglify())
      .pipe(concat('libs.min.js'))
      .pipe(map.write('../sourcemaps'))
      .pipe(dest('docs/js/'))
  else {
    return done(console.log(chalk.bgYellow(`${chalk.bold('WARNING!')} You did not add any JavaScript plugins.`)));
  }
}