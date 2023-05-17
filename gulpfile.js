const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require('browser-sync').create();
const cleanCss = require('gulp-clean-css');
const sourceMaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

const watchedFiles = "styles/**/*.scss";

gulp.task("styles", function () {
  return gulp
    .src(watchedFiles)
    .pipe(sourceMaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCss({ compatibility: "ie8", level: { 1: { specialComments: 0 }, 2: { restructureRules: false } } }))
    .pipe(sourceMaps.write('./'))
    .pipe(gulp.dest("./"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function () {
  browserSync.init({
    server: "./"
  });
  gulp.watch(watchedFiles, gulp.series(["styles"]));
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', gulp.series(['styles', 'watch']));




