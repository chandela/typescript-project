var $ = require('gulp-load-plugins')({ lazy: true });
var getFilesList = require('./getFilesList');
var componentsJS = require('./componentsJS');
var config = require('./config');

module.exports = function (gulp) {
    gulp.task('bundling', ['clean-scripts', 'compile-ts'], function () {
        //bundling Questionnaire
        gulp.src(config.Questionnaire.in)
        .pipe($.concat(config.Questionnaire.filename))
        .pipe(gulp.dest(config.Questionnaire.out));
        //bundling DocumentManager
        gulp.src(config.DocumentManager.in)
        .pipe($.concat(config.DocumentManager.filename))
        .pipe(gulp.dest(config.DocumentManager.out));
        //bunding Common
        gulp.src(config.Common.in)
        .pipe($.concat(config.Common.filename))
        .pipe(gulp.dest(config.Common.out));
        //bundling Audit Test
        gulp.src(config.AuditTest.in)
        .pipe($.concat(config.AuditTest.filename))
        .pipe(gulp.dest(config.AuditTest.out));
        //bundling Cycle
        gulp.src(config.Cycle.in)
       .pipe($.concat(config.Cycle.filename))
       .pipe(gulp.dest(config.Cycle.out));
        //bundling Fsa
        gulp.src(config.Fsa.in)
       .pipe($.concat(config.Fsa.filename))
       .pipe(gulp.dest(config.Fsa.out));
        //bundling Gaa
        gulp.src(config.Gaa.in)
       .pipe($.concat(config.Gaa.filename))
       .pipe(gulp.dest(config.Gaa.out));
        //bundling Gat
        gulp.src(config.Gat.in)
       .pipe($.concat(config.Gat.filename))
       .pipe(gulp.dest(config.Gat.out));
        //bundling Leadsheet code
        gulp.src(config.LeadsheetCodes.in)
       .pipe($.concat(config.LeadsheetCodes.filename))
       .pipe(gulp.dest(config.LeadsheetCodes.out));
        //bundling materiality
        gulp.src(config.Materiality.in)
       .pipe($.concat(config.Materiality.filename))
       .pipe(gulp.dest(config.Materiality.out));
        //bundling rat
        gulp.src(config.Rat.in)
       .pipe($.concat(config.Rat.filename))
       .pipe(gulp.dest(config.Rat.out));
        //bundling risk
        gulp.src(config.Risk.in)
       .pipe($.concat(config.Risk.filename))
       .pipe(gulp.dest(config.Risk.out));
        //bundling settings
        gulp.src(config.Settings.in)
       .pipe($.concat(config.Settings.filename))
       .pipe(gulp.dest(config.Settings.out));
        //bundling Tickmark
        gulp.src(config.Tickmark.in)
       .pipe($.concat(config.Tickmark.filename))
       .pipe(gulp.dest(config.Tickmark.out));
        //bundling Validation
        gulp.src(config.Validation.in)
       .pipe($.concat(config.Validation.filename))
       .pipe(gulp.dest(config.Validation.out));
        //bundling Warning
        gulp.src(config.Warning.in)
       .pipe($.concat(config.Warning.filename))
       .pipe(gulp.dest(config.Warning.out));
        //bundling ChangeSet
        gulp.src(config.ChangeSet.in)
       .pipe($.concat(config.ChangeSet.filename))
       .pipe(gulp.dest(config.ChangeSet.out));
        //bundling Home
        gulp.src(config.Home.in)
       .pipe($.concat(config.Home.filename))
       .pipe(gulp.dest(config.Home.out));
        //bundling Changeset properties
        gulp.src(config.ChangeSetProperties.in)
       .pipe($.concat(config.ChangeSetProperties.filename))
       .pipe(gulp.dest(config.ChangeSetProperties.out));
        //bundling change summary
        gulp.src(config.ChangeSummary.in)
       .pipe($.concat(config.ChangeSummary.filename))
       .pipe(gulp.dest(config.ChangeSummary.out));
        //bundling scoping questionnaire
        gulp.src(config.ScopeTags.in)
       .pipe($.concat(config.ScopeTags.filename))
        .pipe(gulp.dest(config.ScopeTags.out));
        //bundling translation 
        gulp.src(config.Translations.in)
        .pipe($.concat(config.Translations.filename))
        .pipe(gulp.dest(config.Translations.out));
        //bundling document manager business entities
        gulp.src(config.DocumentManagerBusinessEntity.in)
        .pipe($.concat(config.DocumentManagerBusinessEntity.filename))
        .pipe(gulp.dest(config.DocumentManagerBusinessEntity.out))
        //bunlding vendor js
        gulp.src(config.VendorBundle.in)
        .pipe($.concat(config.VendorBundle.filename))
        .pipe(gulp.dest(config.VendorBundle.out))
    });
};
