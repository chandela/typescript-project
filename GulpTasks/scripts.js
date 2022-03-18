var $ = require('gulp-load-plugins')({ lazy: true });
var config = require('./config')
var getFilesList = require('./getFilesList');
var del = require('del');
var componentsJS = require('./componentsJS');

module.exports = function (gulp) {

    gulp.task("clean-scripts", function (cb) {
        return del([
            config.destination + '/js/components/homecomponent/dist',
            config.dest + '/vendor/dist'
        ], { force: true }, cb);
    });

    gulp.task("inject", function () {
       return gulp.src(config.inject.in)
       .pipe($.inject(gulp.src(config.inject.injectSrc), { addRootSlash: false, ignorePath: 'dist' }))
       .pipe(gulp.dest(config.inject.out));
    });

    gulp.task('scripts', ['clean-scripts','componentsJS'], function () {
        return gulp.src(config.js.in)
        .pipe($.newer(config.js.out))
        .pipe(gulp.dest(config.js.out));
    });

};
