var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp
    .src('./_src/sass/**/*.scss')
    .pipe(
      sass({
        outputStyle: 'expanded',
        includePaths: ['node_modules']
      }).on('error', sass.logError)
    )
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('./_src/sass/**/*.scss', ['sass']);
});
