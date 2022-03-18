var config = require('./config')
var $ = require('gulp-load-plugins')({ lazy: true });
var componentsSass = require('./componentsSass');

module.exports = function (gulp) {
    gulp.task('sass', ['componentsSass'], function () {
        var prodBuildStream = gulp.src(config.css.in);
        if (config.devBuild) {
            config.css.sassOpts.outputStyle = 'compressed';
            delete config.css.sassOpts.sourceComments;
            prodBuildStream =
                prodBuildStream
                //.pipe(sourcemaps.init())
                .pipe($.sass(config.css.sassOpts))
                .pipe($.sass({ outputStyle: 'compressed' }))
                .pipe($.sourcemaps.write())
                .pipe(gulp.dest(config.css.out));
        } else {
            del([
                config.dest + 'css/*'
            ], { force: true });

            config.css.sassOpts.outputStyle = 'compressed';
            delete config.css.sassOpts.sourceComments;

            prodBuildStream = prodBuildStream
                .pipe(sass(config.css.sassOpts))
                .pipe($.autoprefixer({
                    browsers: ['last 2 versions'],
                    cascade: false
                }))
                .pipe($.rename('main.min.css'))

                .pipe(sass({
                    outputStyle: 'compressed'
                }))
                .pipe(gulp.dest(config.css.out));

        }
        return prodBuildStream;
    });
};
