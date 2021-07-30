var gulp = require("gulp"),
  htmlmin = require("gulp-htmlmin"),
  pngquant = require("imagemin-pngquant"),
  mozjpeg = require("imagemin-mozjpeg"),
  imagemin = require("gulp-imagemin"),
  concat = require("gulp-concat"),
  babel = require("gulp-babel"),
  uglify = require("gulp-uglify");

gulp.task("pages", function () {
  return gulp
    .src("src/**/*.{html,php}")
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest("./build/"));
});

gulp.task("images", function () {
  return gulp
    .src("src/assets/**/*.{png,jpg,jpeg}")
    .pipe(
      imagemin([pngquant({ quality: [0.5, 0.5] }), mozjpeg({ quality: 65 })])
    )
    .pipe(gulp.dest("./build/assets"));
});

gulp.task("concatjs", function () {
  return gulp
    .src("src/js/scripts/*.js")
    .pipe(concat("main.js"))
    .pipe(gulp.dest("src/js"));
});

gulp.task("js", function () {
  return gulp
    .src("src/js/main.js")
    .pipe(babel({ presets: ["env"] }))
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
});

gulp.task("copyassets", function () {
  return gulp.src("src/assets/*").pipe(gulp.dest("./build/assets"));
});

gulp.task("copyfonts", function () {
  return gulp.src("src/fonts/*").pipe(gulp.dest("./build/fonts"));
});

gulp.task("copycss", function () {
  return gulp
    .src("src/styles/styles.min.css")
    .pipe(gulp.dest("./build/styles"));
});

gulp.task("watch", function () {
  gulp.watch(
    ["src/js/scripts/*.js", "!src/js/main.js"],
    gulp.parallel(["concatjs"])
  );
});

gulp.task(
  "build",
  gulp.parallel(
    "pages",
    "images",
    "copyassets",
    "copyfonts",
    "copycss",
    "concatjs",
    "js"
  )
);

// yarn add gulp gulp-htmlmin gulp-imagemin imagemin-pngquant imagemin-mozjpeg gulp-concat gulp-babel @babel/core @babel/preset-env gulp-uglify -D

// gulp watch = concat js in dev
// gulp build = build folder to prod