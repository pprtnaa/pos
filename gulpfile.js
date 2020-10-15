var gulp = require('gulp');
var rename = require('gulp-rename');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var path = require('path');

gulp.task('svgstore', function () {
    return gulp
        .src('assets/pprtnaa/img/icon/*.svg')
        .pipe(rename({prefix: 'icon-'}))
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore({ inlineSvg: true }))
        .pipe(gulp.dest('assets/pprtnaa/img/iconmin'));
});

gulp.task('svgmstore', function () {
    return gulp
        .src('assets/pprtnaa/img/icon/membership/*.svg')
        .pipe(rename({prefix: 'icon-'}))
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore({ inlineSvg: true }))
        .pipe(gulp.dest('assets/pprtnaa/img/iconmin/membership'));
});
