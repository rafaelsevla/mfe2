const { src, dest, series } = require('gulp');
var concat = require('gulp-concat');


exports.default = function() {
  return src('dist/*.js').pipe(concat('remoteEntry.js')).pipe(dest('../shell/dist/mfe2/'));
}