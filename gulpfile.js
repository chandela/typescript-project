/// <binding BeforeBuild='tslint' AfterBuild='tslint' />
/*
 * Author : Hari Kumar Reddy
 * Refactored on : 09/09/2018 
 * Description : The gulp task is responsible for the build and deployment.
 * Params :  Gulp, Gulp Dev, serve-prod
 * Organization : Microsoft Corp.
 */
/// <binding />
var gulp = require("gulp");
var $ = require('gulp-load-plugins')({ lazy: true });
//var ts = require("gulp-typescript");
//var tsProject = ts.createProject("tsconfig.json");
//var gutil = require("gulp-util");
var del = require("del");
var config = require("./GulpTasks/config");


// clean the build folder
require('./GulpTasks/clean')(gulp);

// build HTML files
require('./gulptasks/html')(gulp);

// manage image optimization
require('./gulptasks/images')(gulp);

// compile Sass
require('./gulptasks/sass')(gulp);

// components Sass
require('./gulptasks/componentsSass')(gulp);

// scripts optimization
require('./gulptasks/tstojs')(gulp);
require('./gulptasks/scripts')(gulp);
require('./gulptasks/bundling')(gulp);
require('./gulptasks/minification')(gulp);
// componentsJS optimization
require('./gulptasks/componentsJS')(gulp);

// copy static files ( fonts, views, favicon.ico etc )
require('./gulptasks/copy')(gulp);

// cleaning ( templates) for production build
require('./gulptasks/cleanforprod')(gulp);


debugger;
// default task
gulp.task('default', ['help', 'sass', 'html', 'compile-ts', 'scripts', 'bundling','inject'], function () {

    // html changes
    gulp.watch(config.html.watch, ['html']);

    // sass changes
    gulp.watch(config.css.watch, ['sass']);

    // javascript changes
    gulp.watch(config.js.in, ['scripts']);

    // watch ts changes
    gulp.watch([config.ts.in], ['bundling']);

    if (!config.devBuild) {
        del([
            config.destination + 'vendor/',
        ], { force: true });
    }

    del([
        config.destination + 'templates/',
        config.destination + 'App/**/*'
    ], { force: true });
});

gulp.task('setup', ['images', 'html', 'copy'], function () {
    del([
        config.destination + 'templates/',
        config.destination + 'app/'
    ], { force: true });
});

//Introdcuing gulp sequence
gulp.task('serve-prod', function (cb) {
    $.sequence(['help','images', 'sass', 'html'], 'compile-ts', 'scripts', 'copy', 'minification', cb)
    del([
       config.destination + 'app/',
       //need to verify this folder
       config.destination
    ], { force: true });
})
gulp.task('help', $.taskListing);




// old code need remove?
// gulp.task("default", function () {
//     return tsProject.src()
//         .pipe(tsProject())
//         .js.pipe(gulp.dest("dist"));
// });
// gulp.task("copy-html", function () {
//     return gulp.src(paths.pages)
//         .pipe(gulp.dest("dist"));
// });

// var watchedBrowserify = watchify(browserify({
//     basedir: '.',
//     debug: true,
//     entries: ['src/app.ts'],
//     cache: {},
//     packageCache: {}
// }).plugin(tsify));



// function bundle() {
//     return watchedBrowserify
//         .bundle()
//         .pipe(source('bundle.js'))
//         .pipe(gulp.dest("dist"));
// }

// gulp.task("default", ["copy-html"], bundle);
// watchedBrowserify.on("update", bundle);
// watchedBrowserify.on("log", gutil.log);