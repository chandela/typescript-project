var $ = require('gulp-load-plugins')({ lazy: true });
var getFilesList = require('./getFilesList');
var componentsJS = require('./componentsJS');
var config = require('./config')
var $ = require('gulp-load-plugins')({ lazy: true });

module.exports = function (gulp) {
    gulp.task('minification', ['compile-ts', 'html-min'], function () {

        // //minification Common
        // gulp.src(config.Common.in)
        //    .pipe($.debug({ title: 'Source:' }))
        //    .pipe($.concat(config.Common.filename))
        //    .pipe($.debug({ title: 'Concatination:' }))
        //    .pipe($.uglify())
        //    .pipe(gulp.dest(config.Common.out))
        //    .pipe($.debug({ title: 'Destination:' }))

           //minification HomeComponent
        gulp.src(config.HomeComponent.in)
        .pipe($.debug({ title: 'Source:' }))
        .pipe($.concat(config.HomeComponent.filename))
        .pipe($.debug({ title: 'Concatination:' }))
        .pipe($.uglify())
        .pipe(gulp.dest(config.HomeComponent.out))
        .pipe($.debug({ title: 'Destination:' }))

        //Note : No need for minification for vendor as it is already bundled. Need a copy command.

        //bundling vendor js files
        gulp.src(config.VendorBundle.in)
         .pipe($.debug({ title: 'Source:' }))
         .pipe($.concat(config.VendorBundle.filename))
         .pipe($.debug({ title: 'Concatination:' }))
         //.pipe($.uglify())
         .pipe(gulp.dest(config.VendorBundle.out))
         .pipe($.debug({ title: 'Destination:' }))
    });
};