var gulp, filter, liveReload, sourceMaps, sass, concat, rename;

gulp = require('gulp');
sourceMaps = require("gulp-sourcemaps");
liveReload = require("gulp-livereload");
filter = require("gulp-filter");
sass = require("gulp-sass");
concat = require("gulp-concat");
rename = require("gulp-rename");


gulp.task("js", function() {
  gulp.src("app/assets/javascripts")
    .pipe(sourceMaps.init())
    .pipe(concat("application.js"))
    .pipe(sourceMaps.write("."))
    .pipe(gulp.dest("../public/assets"))
    .pipe(liveReload());
});


gulp.task("sass", function() {
  return gulp.src("sass/dashboard/application.css.scss")
    .pipe(sourceMaps.init())
    .pipe(sass({
      includePaths: "app/assets/stylesheets",
      sourceComments: true,
      errLogToConsole: true
    }))
    .pipe(rename("application.css"))
    .pipe(sourceMaps.write("."))
    .pipe(gulp.dest("../public/assets"))
    .pipe(liveReload()
  );
});

gulp.task("default", ["js", "sass", "images", "fonts"]);  
gulp.task("reload", ["watch", "js", "sass", "images", "fonts"]);

gulp.task("images", function(){
  gulp.src("images/**/*")
    .pipe(gulp.dest("../public/assets/images/"))
    .pipe(liveReload())
  });

gulp.task("fonts", function(){
  gulp.src("fonts/**/*")
    .pipe(gulp.dest("../public/assets/fonts/"))
    .pipe(liveReload())
});

gulp.task("watch", function() {
  liveReload.listen
  gulp.watch("app/assets/stylesheets", { interval: 500 }, ["sass"]);
  gulp.watch("app/assets/javascripts",  { interval: 500 }, ["js"]);
});
  
  

  