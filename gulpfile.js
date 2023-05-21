const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require('browser-sync').create();
const cleanCss = require('gulp-clean-css');
const sourceMaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');

const watchedFiles = {
  styles: "styles/**/*.scss",
  scripts: "scripts/**/*.js",
};

gulp.task("styles", function () {
  return gulp
    .src(watchedFiles.styles)
    .pipe(sourceMaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(postcss([
      postcssPresetEnv(),
      cssnano()
    ]))
    .pipe(sourceMaps.write('./'))
    .pipe(gulp.dest("./"))
    .pipe(browserSync.stream());
});

gulp.task("scripts", function () {
  return gulp
    .src(watchedFiles.scripts)
    .pipe(browserSync.stream());
});

gulp.task("watch", function () {
  browserSync.init({
    server: "./"
  });
  gulp.watch(watchedFiles.styles, gulp.series(["styles"]));
  gulp.watch(watchedFiles.scripts, gulp.series(["scripts"]));
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', gulp.series(['styles', 'scripts', 'watch']));