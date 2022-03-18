var $ = require('gulp-load-plugins')({ lazy: true });
var config = require('./config');

module.exports = function(gulp){
	gulp.task('html', function() {
		var page = gulp.src(config.html.in)
			.pipe($.preprocess({ context: config.html.context }));

		if (!config.devBuild) {
			page = page
				.pipe($.size({ title: 'HTML in' }))
				.pipe($.htmlclean())
				.pipe($.size({ title: 'HTML out' }));
		}
		return page.pipe(gulp.dest(config.js.out));
	});
	gulp.task('html-min',['html'], function () {
	    return gulp.src(config.html.in)
        .pipe($.htmlclean())
        .pipe($.htmlMinifier({ collapseWhitespace: true }))
        .pipe(gulp.dest(config.js.out))
	});
};