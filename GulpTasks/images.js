var $ = require('gulp-load-plugins')({ lazy: true });
var config = require('./config');

module.exports = function(gulp) {
    gulp.task('images', function() {
        return gulp.src(config.images.in)
            .pipe($.newer(config.images.out))
            .pipe($.imagemin())
            .pipe(gulp.dest(config.images.out));
    });
};
