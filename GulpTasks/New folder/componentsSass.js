var $ = require('gulp-load-plugins')({ lazy: true });
var config = require('./config');

module.exports = function (gulp) {
    
    gulp.task('componentsSass', function () {
        var prodBuildStream = gulp.src(config.componentsCSS.in);
        if (config.devBuild) {
            prodBuildStream =
                prodBuildStream
                .pipe($.sourcemaps.init())
                .pipe($.sass(config.css.sassOpts))
                .pipe($.sourcemaps.write())
                .pipe(gulp.dest(config.componentsCSS.out));
        } else {
            config.css.sassOpts.outputStyle = 'compressed';
            delete config.css.sassOpts.sourceComments;

            prodBuildStream = prodBuildStream
                .pipe($.sass(config.css.sassOpts))
                .pipe(autoprefixer({
                    browsers: ['last 2 versions'],
                    cascade: false
                }))
                .pipe(gulp.dest(config.componentsCSS.out));
        }
        return prodBuildStream;
    });
};
