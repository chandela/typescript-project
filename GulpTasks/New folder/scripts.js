var $ = require('gulp-load-plugins')({ lazy: true });
var config = require('./config')
var getFilesList = require('./getFilesList');
var del = require('del');
var componentsJS = require('./componentsJS');

module.exports = function (gulp) {

    gulp.task("clean-scripts", function (cb) {
        return del([
            config.dest + '/js/components/document-manager/edit-questionnaire/dist',
            config.dest + '/js/components/document-manager/dist',
            config.dest + '/js/components/document-manager/business-entities/dist',
            config.dest + '/js/components/common/dist',
            config.dest + '/js/components/home/dist',
            config.dest + '/js/components/fsa/dist',
            config.dest + '/js/components/changeset/dist',
            config.dest + '/js/components/change-summary/dist',
            config.dest + '/js/components/AuditTest/dist',
            config.dest + '/js/components/cycle/dist',
            config.dest + '/js/components/gaa/dist',
            config.dest + '/js/components/gat/dist',
            config.dest + '/js/components/leadsheet-codes/dist',
            config.dest + '/js/components/materiality/dist',
            config.dest + '/js/components/rat/dist',
            config.dest + '/js/components/risk/dist',
            config.dest + '/js/components/settings/dist',
            config.dest + '/js/components/tickmark/dist',
            config.dest + '/js/components/validation/dist',
            config.dest + '/js/components/warning/dist',
            config.dest + '/js/components/changeset/changeset-properties/dist',
            config.dest + '/js/components/scope-tags/dist',
            config.dest + '/js/components/Translations/dist',
            config.dest + '/vendor/dist'
        ], { force: true }, cb);
    });

    gulp.task("inject", function () {
       return gulp.src(config.inject.in)
       .pipe($.inject(gulp.src(config.inject.injectSrc), { addRootSlash: false, ignorePath: 'wwwroot' }))
       .pipe(gulp.dest(config.inject.out));
    });

    gulp.task('scripts', ['clean-scripts','componentsJS'], function () {
        return gulp.src(config.js.in)
        .pipe($.newer(config.js.out))
        .pipe(gulp.dest(config.js.out));
    });

};
