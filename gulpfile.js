var gulp = require('gulp'),
    clean = require('gulp-clean'),
    connect = require('gulp-connect');

var outputDir = "dist";

gulp.task("clean", function() {
  return gulp.src([outputDir + "/*.html", outputDir + "/*.css"])
    .pipe(clean());
});


gulp.task("reload", function() {
  return connect.reload();
});

gulp.task('connect', function() {
  connect.server({
    root: [__dirname + "/.."],
        port: 3000,
    livereload: true
  });
});

gulp.task("watch", function() {
  gulp.watch("*.html", ["reload"]);
  gulp.watch("*.css", ["reload"]);
});


gulp.task("default", ["watch", "connect"]);
