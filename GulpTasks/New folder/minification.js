var $ = require('gulp-load-plugins')({ lazy: true });
var getFilesList = require('./getFilesList');
var componentsJS = require('./componentsJS');
var config = require('./config')
var $ = require('gulp-load-plugins')({ lazy: true });

module.exports = function (gulp) {
    gulp.task('minification', ['compile-ts', 'html-min'], function () {

        //minification Questionnaire
        gulp.src(config.Questionnaire.in)
        .pipe($.debug({ title: 'Source:' }))
        .pipe($.concat(config.Questionnaire.filename))
        .pipe($.debug({ title: 'Concatination:' }))
        .pipe($.uglify())
        .pipe(gulp.dest(config.Questionnaire.out))
        .pipe($.debug({ title: 'Destination:' }))

        //minification Document Manager
        gulp.src(config.DocumentManager.in)
           .pipe($.debug({ title: 'Source:' }))
           .pipe($.concat(config.DocumentManager.filename))
           .pipe($.debug({ title: 'Concatination:' }))
           .pipe($.uglify())
           .pipe(gulp.dest(config.DocumentManager.out))
           .pipe($.debug({ title: 'Destination:' }))

        //minification Common
        gulp.src(config.Common.in)
           .pipe($.debug({ title: 'Source:' }))
           .pipe($.concat(config.Common.filename))
           .pipe($.debug({ title: 'Concatination:' }))
           .pipe($.uglify())
           .pipe(gulp.dest(config.Common.out))
           .pipe($.debug({ title: 'Destination:' }))

        //Note : No need for minification for vendor as it is already bundled. Need a copy command.

        //minification Audit Test
        gulp.src(config.AuditTest.in)
          .pipe($.debug({ title: 'Source:' }))
          .pipe($.concat(config.AuditTest.filename))
          .pipe($.debug({ title: 'Concatination:' }))
          .pipe($.uglify())
          .pipe(gulp.dest(config.AuditTest.out))
          .pipe($.debug({ title: 'Destination:' }))

        //minification Cycle
        gulp.src(config.Cycle.in)
         .pipe($.debug({ title: 'Source:' }))
         .pipe($.concat(config.Cycle.filename))
         .pipe($.debug({ title: 'Concatination:' }))
         .pipe($.uglify())
         .pipe(gulp.dest(config.Cycle.out))
         .pipe($.debug({ title: 'Destination:' }))

        //minification Fsa
        gulp.src(config.Fsa.in)
         .pipe($.debug({ title: 'Source:' }))
         .pipe($.concat(config.Fsa.filename))
         .pipe($.debug({ title: 'Concatination:' }))
         .pipe($.uglify())
         .pipe(gulp.dest(config.Fsa.out))
         .pipe($.debug({ title: 'Destination:' }))

        //minification Gaa
        gulp.src(config.Gaa.in)
         .pipe($.debug({ title: 'Source:' }))
         .pipe($.concat(config.Gaa.filename))
         .pipe($.debug({ title: 'Concatination:' }))
         .pipe($.uglify())
         .pipe(gulp.dest(config.Gaa.out))
         .pipe($.debug({ title: 'Destination:' }))

        //minification Gat
        gulp.src(config.Gat.in)
         .pipe($.debug({ title: 'Source:' }))
         .pipe($.concat(config.Gat.filename))
         .pipe($.debug({ title: 'Concatination:' }))
         .pipe($.uglify())
         .pipe(gulp.dest(config.Gat.out))
         .pipe($.debug({ title: 'Destination:' }))

        //minification LeadsheetCodes
        gulp.src(config.LeadsheetCodes.in)
         .pipe($.debug({ title: 'Source:' }))
         .pipe($.concat(config.LeadsheetCodes.filename))
         .pipe($.debug({ title: 'Concatination:' }))
         .pipe($.uglify())
         .pipe(gulp.dest(config.LeadsheetCodes.out))
         .pipe($.debug({ title: 'Destination:' }))

        //minification Materiality
        gulp.src(config.Materiality.in)
         .pipe($.debug({ title: 'Source:' }))
         .pipe($.concat(config.Materiality.filename))
         .pipe($.debug({ title: 'Concatination:' }))
         .pipe($.uglify())
         .pipe(gulp.dest(config.Materiality.out))
         .pipe($.debug({ title: 'Destination:' }))

        //minification Rat
        gulp.src(config.Rat.in)
         .pipe($.debug({ title: 'Source:' }))
         .pipe($.concat(config.Rat.filename))
         .pipe($.debug({ title: 'Concatination:' }))
         .pipe($.uglify())
         .pipe(gulp.dest(config.Rat.out))
         .pipe($.debug({ title: 'Destination:' }))

        //minification Risk
        gulp.src(config.Risk.in)
         .pipe($.debug({ title: 'Source:' }))
         .pipe($.concat(config.Risk.filename))
         .pipe($.debug({ title: 'Concatination:' }))
         .pipe($.uglify())
         .pipe(gulp.dest(config.Risk.out))
         .pipe($.debug({ title: 'Destination:' }))

        //minification Settings
        gulp.src(config.Settings.in)
         .pipe($.debug({ title: 'Source:' }))
         .pipe($.concat(config.Settings.filename))
         .pipe($.debug({ title: 'Concatination:' }))
         .pipe($.uglify())
         .pipe(gulp.dest(config.Settings.out))
         .pipe($.debug({ title: 'Destination:' }))

        //minification Tickmark
        gulp.src(config.Tickmark.in)
         .pipe($.debug({ title: 'Source:' }))
         .pipe($.concat(config.Tickmark.filename))
         .pipe($.debug({ title: 'Concatination:' }))
         .pipe($.uglify())
         .pipe(gulp.dest(config.Tickmark.out))
         .pipe($.debug({ title: 'Destination:' }))

        //minification Validation
        gulp.src(config.Validation.in)
         .pipe($.debug({ title: 'Source:' }))
         .pipe($.concat(config.Validation.filename))
         .pipe($.debug({ title: 'Concatination:' }))
         .pipe($.uglify())
         .pipe(gulp.dest(config.Validation.out))
         .pipe($.debug({ title: 'Destination:' }))

        //minification Warning
        gulp.src(config.Warning.in)
         .pipe($.debug({ title: 'Source:' }))
         .pipe($.concat(config.Warning.filename))
         .pipe($.debug({ title: 'Concatination:' }))
         .pipe($.uglify())
         .pipe(gulp.dest(config.Warning.out))
         .pipe($.debug({ title: 'Destination:' }))

        //minification ChangeSet
        gulp.src(config.ChangeSet.in)
         .pipe($.debug({ title: 'Source:' }))
         .pipe($.concat(config.ChangeSet.filename))
         .pipe($.debug({ title: 'Concatination:' }))
         .pipe($.uglify())
         .pipe(gulp.dest(config.ChangeSet.out))
         .pipe($.debug({ title: 'Destination:' }))

        //minification Home
        gulp.src(config.Home.in)
         .pipe($.debug({ title: 'Source:' }))
         .pipe($.concat(config.Home.filename))
         .pipe($.debug({ title: 'Concatination:' }))
         .pipe($.uglify())
         .pipe(gulp.dest(config.Home.out))
         .pipe($.debug({ title: 'Destination:' }))

        //minification ChangeSetProperties
        gulp.src(config.ChangeSetProperties.in)
         .pipe($.debug({ title: 'Source:' }))
         .pipe($.concat(config.ChangeSetProperties.filename))
         .pipe($.debug({ title: 'Concatination:' }))
         .pipe($.uglify())
         .pipe(gulp.dest(config.ChangeSetProperties.out))
         .pipe($.debug({ title: 'Destination:' }))
        
        //minification ChangeSummary
        gulp.src(config.ChangeSummary.in)
         .pipe($.debug({ title: 'Source:' }))
         .pipe($.concat(config.ChangeSummary.filename))
         .pipe($.debug({ title: 'Concatination:' }))
         .pipe($.uglify())
         .pipe(gulp.dest(config.ChangeSummary.out))
         .pipe($.debug({ title: 'Destination:' }))

        //minification ScopeTags
        gulp.src(config.ScopeTags.in)
         .pipe($.debug({ title: 'Source:' }))
         .pipe($.concat(config.ScopeTags.filename))
         .pipe($.debug({ title: 'Concatination:' }))
         .pipe($.uglify())
         .pipe(gulp.dest(config.ScopeTags.out))
            .pipe($.debug({ title: 'Destination:' }))

        //minification translations
        gulp.src(config.Translations.in)
            .pipe($.debug({ title: 'Source:' }))
            .pipe($.concat(config.Translations.filename))
            .pipe($.debug({ title: 'Concatination:' }))
            .pipe($.uglify())
            .pipe(gulp.dest(config.Translations.out))
            .pipe($.debug({ title: 'Destination:' }))

        //minification document-manager business entities
        gulp.src(config.DocumentManagerBusinessEntity.in)
       .pipe($.debug({ title: 'Source:' }))
       .pipe($.concat(config.DocumentManagerBusinessEntity.filename))
       .pipe($.debug({ title: 'Concatination:' }))
       .pipe($.uglify())
       .pipe(gulp.dest(config.DocumentManagerBusinessEntity.out))
       .pipe($.debug({ title: 'Destination:' }))

        //bundling vendor js files
        gulp.src(config.VendorBundle.in)
         .pipe($.debug({ title: 'Source:' }))
         .pipe($.concat(config.VendorBundle.filename))
         .pipe($.debug({ title: 'Concatination:' }))
         //.pipe($.uglify())
         .pipe(gulp.dest(config.VendorBundle.out))
         .pipe($.debug({ title: 'Destination:' }))
    });
};