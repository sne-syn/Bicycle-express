"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();

gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

gulp.task("server", function () {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("start", gulp.series("css", "server"));

// "use strict";

// var gulp = require("gulp");
// var plumber = require("gulp-plumber");
// var sourcemap = require("gulp-sourcemaps");
// var rename = require("gulp-rename");
// var server = require("browser-sync").create();
// var sass = require("gulp-sass");
// var postcss = require("gulp-postcss");
// var autoprefixer = require("autoprefixer");
// var csso = require("gulp-csso");
// var imagemin = require("gulp-imagemin");
// var webp = require("gulp-webp");
// var svgstore = require("gulp-svgstore");
// var posthtml = require("gulp-posthtml");
// var include = require("posthtml-include");
// var del = require("del");
// var minify = require("gulp-minify");
// var htmlmin = require("gulp-htmlmin");

// gulp.task("clean", function () {
//   return del("build");
// });

// gulp.task("copy", function () {
//   return gulp.src([
//       "source/img/**",
//       "source/js/**",
//       "source/*.ico"
//     ], {
//       base: "source"
//     })
//     .pipe(gulp.dest("build"));
// });

// gulp.task("css", function () {
//   return gulp.src("source/sass/style.scss")
//     .pipe(plumber())
//     .pipe(sourcemap.init())
//     .pipe(sass())
//     .pipe(postcss([
//       autoprefixer()
//     ]))
//     .pipe(rename("style.css"))
//     .pipe(gulp.dest("build/css"))
//     .pipe(csso())
//     .pipe(rename({ suffix: '-min' }))
//     .pipe(sourcemap.write("."))
//     .pipe(gulp.dest("build/css"));
// });

// gulp.task("server", function () {
//   server.init({
//     server: "build/"
//   });

//   gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
//   gulp.watch("source/img/sprite-*.svg", gulp.series("sprite", "html", "refresh"));
//   gulp.watch("source/*.html", gulp.series("html", "refresh"));
// });

// gulp.task("refresh", function (done) {
//   server.reload();
//   done();
// });

// gulp.task("images", function () {
//   return gulp.src("source/img/**/*.{png,jpg,svg}")
//     .pipe(imagemin([
//       imagemin.optipng({
//         optimizationLevel: 3
//       }),
//       imagemin.jpegtran({
//         progressive: true
//       }),
//       imagemin.svgo()
// ]))
//     .pipe(gulp.dest("source/img"));
// });


// gulp.task("sprite", function () {
//   return gulp.src("source/img/sprite-*.svg")
//     .pipe(svgstore({
//       inlineSvg: true
//     }))
//     .pipe(rename("sprite.svg"))
//     .pipe(gulp.dest("build/img"));
// });

// gulp.task("html", function () {
//   return gulp.src("source/*.html")
//     .pipe(posthtml([
//       include()
//     ]))
//     .pipe(gulp.dest("build"));
// });


// gulp.task("compress", function (done) {
//   gulp.src("source/js/*.js")
//     .pipe(minify())
//     .pipe(gulp.dest("build/js"))
//   done();
// });

// gulp.task("htmlmin", function () {
//   return gulp.src("build/*.html")
//     .pipe(htmlmin({ collapseWhitespace: true }))
//     .pipe(gulp.dest("build"));
// });

// gulp.task("build", gulp.series(
//   "clean",
//   "copy",
//   "css",
//   "sprite",
//   "html",
//   "compress",
//   "htmlmin"
// ));

// gulp.task("start", gulp.series("build", "server"));

// gulp.task("webp", function () {
//   return gulp.src("source/img/**/*.{png,jpg}")
//     .pipe(webp({
//       quality: 90
//     }))
//     .pipe(gulp.dest("build/img"));
// });
