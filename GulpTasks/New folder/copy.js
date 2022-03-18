var $ = require('gulp-load-plugins')({ lazy: true });
var config = require('./config');
var html = require('./html');

module.exports = function (gulp) {

    gulp.task('copy',['font', 'lookup'], function() {
        // the base option sets the relative root for the set of files,
        // preserving the folder structure
        if (config.devBuild) {
            gulp.src(config.filesToCopy, { base: config.source })
                .pipe(gulp.dest(config.dest));
        } else {
            // copy fonts only in prod, images already copied with images task
            gulp.src(config.filesToCopy[1], { base: config.source })
                .pipe(gulp.dest(config.dest));
        }
    });

    gulp.task('font', function () {
        return gulp.src(config.font.in)
            .pipe(gulp.dest(config.font.out));
    });

    gulp.task('lookup', function () {
        return gulp.src(config.lookup.in)
            .pipe(gulp.dest(config.lookup.out))
    });
};

