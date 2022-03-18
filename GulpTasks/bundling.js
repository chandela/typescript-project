var $ = require('gulp-load-plugins')({ lazy: true });
var getFilesList = require('./getFilesList');
var componentsJS = require('./componentsJS');
var config = require('./config');

module.exports = function (gulp) {
    gulp.task('bundling', ['clean-scripts', 'compile-ts'], function () {
        //bundling Questionnaire
        // gulp.src(config.Questionnaire.in)
        // .pipe($.concat(config.Questionnaire.filename))
        // .pipe(gulp.dest(config.Questionnaire.out));

        //bunding Common
        gulp.src(config.Common.in)
        .pipe($.concat(config.Common.filename))
        .pipe(gulp.dest(config.Common.out));

        //bunlding vendor js
        gulp.src(config.VendorBundle.in)
        .pipe($.concat(config.VendorBundle.filename))
        .pipe(gulp.dest(config.VendorBundle.out))
    });
};
