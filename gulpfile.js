var gulp = require('gulp')
    , gutil = require('gulp-util')
    , sass = require('gulp-sass')
    , watch = require('gulp-watch')
    , concat = require('gulp-concat')
    , notify = require('gulp-notify')
    ;

gulp.task('sass', function () {
    gulp.src('./assets/sass/index.scss')
        .pipe(sass())
        .pipe(gulp.dest('./assets/styles'))
});


gulp.task('watch', function() {
  // watch scss files
  gulp.watch('./assets/sass/**/*.scss', function() {
    gulp.run('sass');
  });

  gulp.watch('./assets/js/**/*.js', function() {
    gulp.run('js');
  });
});

gulp.task('default', ['sass', 'js', 'watch']);
