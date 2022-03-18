var config = require('./config')
module.exports = function(gulp) {
    gulp.task('clean', function() {
        del([
            config.destination + '*'
        ], { force: true });
    });
};
