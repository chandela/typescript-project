var $ = require('gulp-load-plugins')({ lazy: true });
var config = require('./config')
tsProject = $.typescript.createProject('tsconfig.json'),
   
module.exports = function (gulp) {
    /**
     * Compile TypeScript and include references to library and app .d.ts files.
     */
    gulp.task('compile-ts', ['tslint'], function () {
        return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest(config.ts.out));
    });

    gulp.task('tslint', function () {
        return gulp.src(config.ts.in)
                .pipe($.tslint({
                    formatter: "prose"
            }))
            .pipe($.tslint({
                configuration: "../tslint.json"
            }))
            .pipe($.tslint.report({
                emitError: true,
                    summarizeFailureOutput: true,
                    allowWarnings: false
                }));
    });
    /**
     * Remove all generated JavaScript files from TypeScript compilation.
     */
    gulp.task('clean-ts', function (cb) {
        var typeScriptGenFiles = [
                                    config.ts.out + '**/*.js',    // path to all JS files auto gen'd by editor
                                    config.ts.out + '**/*.js.map', // path to all sourcemap files auto gen'd by editor
                                    '!' + config.ts.out + '/lib'
        ];

        // delete the files
        del(typeScriptGenFiles, cb);
    });
    return gulp;
};

