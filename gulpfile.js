const gulp = require('gulp');
const stylus = require('gulp-stylus');
const pug = require('gulp-pug');
const autoprfixer = require('autoprefixer');
const postcss = require('gulp-postcss');

const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const uglify = require('gulp-uglifyjs');
const cache = require('gulp-cache');
const pngquant = require('imagemin-pngquant');
const imagemin = require('gulp-imagemin');
const livereload = require('gulp-livereload')

let postplugins = [autoprfixer];

/**
 * task for livereload page in browser
 */
gulp.task('livereload', () => {
    browserSync({
        server: {
            baseDir: 'public'
        },
        notify: false
    })
});

/**
 * task for processing .styl files
 */
gulp.task('styles', () => {
    return gulp.src('./source/styles/main.styl')
        .pipe(stylus())
        .pipe(postcss(postplugins))
        .pipe(gulp.dest('./public/css'))
        .pipe(livereload())
});

/**
 * task for processing .pug files
 */
gulp.task('pages', () => {
    return gulp.src('./source/pages/*.pug')
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest('./public'))
        .pipe(livereload())
});

/**
 * task for processing .js files
 */
gulp.task('scripts', () => {
    return gulp.src('./source/blocks/**/*.js')
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public'))
        .pipe(livereload())
});

/**
 * task for images
 */
gulp.task('images', () => {
    return gulp.src('./images/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            une: [pngquant]
        })))
        .pipe(gulp.dest('./public/images'))
        .pipe(livereload())
});

gulp.task('watch', () => {
    var server = livereload();
    gulp.watch(['./source/**/*.styl', './source/styles/*.styl'], ['styles']);
    gulp.watch('./source/blocks/**/*.pug', ['pages']);
    gulp.watch('./source//blocks/**/*.js', ['scripts']);
    gulp.watch('./images/*', ['images']);
});

gulp.task('default', ['pages', 'styles', 'scripts', 'images', 'watch']);