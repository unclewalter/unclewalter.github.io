var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify');

gulp.task('js-fef', function(){
    return gulp.src([
                    'assets/js/src/*.js'
                    ])
        .pipe(gp_concat('app.js'))
        .pipe(gulp.dest('assets/js'))
        .pipe(gp_rename('app.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('assets/js'));
});

gulp.task('autoprefixer', function () {
    var postcss      = require('gulp-postcss');
    var sourcemaps   = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer');

    return gulp.src('_site/assets/css/src/main.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('_site/assets/css/'));
});

gulp.task('watch', function () {
   gulp.watch(['assets/js/**/*.js', 'gulpfile.js'], ['js-fef']);
   gulp.watch(['_site/assets/css/src/main.css'], ['autoprefixer']);
});

gulp.task('default', ['js-fef', 'autoprefixer'], function(){});
