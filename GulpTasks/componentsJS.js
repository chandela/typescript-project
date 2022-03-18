var $ = require('gulp-load-plugins')({ lazy: false });
var getFilesList = require('./getFilesList');
var config = require('./config')

module.exports = function(gulp) {

    gulp.task('componentsJS', function() {
        if (config.devBuild) {
            return gulp.src(config.componentsJS.in)
                .pipe($.newer(config.componentsJS.out))
            .pipe(gulp.dest(config.componentsJS.out));
        } else {
            return gulp.src(config.componentsJS.in)
                .pipe($.ngAnnotate({
                    add: true,
                    single_quotes: true
                }))
                .pipe($.stripdebug())
                .pipe($.uglify())
                .pipe(gulp.dest(config.componentsJS.out));
        }
    });

};
