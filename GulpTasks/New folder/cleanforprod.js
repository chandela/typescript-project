var config = require('./config')
module.exports = function(gulp) {
    gulp.task('cleanforprod', function() {
        del([
            config.dest + 'templates/'
        ]);
    });
};
