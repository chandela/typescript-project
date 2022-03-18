var pkg = require('../package.json'),
    source = 'UIDev/',
    dbMigrationSource = '../../DataAccess/Database.Migration/',
    dest = 'wwwroot/',
    destinationDocumentManager = dest + 'js/components/document-manager/',
    destinationCommon = dest + 'js/components/common/',
    destinationAuditTest = dest + 'js/components/AuditTest/',
    destinationCycle = dest + 'js/components/cycle/';
destinationFsa = dest + 'js/components/fsa/';
destinationGaa = dest + 'js/components/gaa/';
destinationGat = dest + 'js/components/gat/';
destinationLeadsheetCode = dest + 'js/components/leadsheet-codes/';
destinationMateriality = dest + 'js/components/materiality/';
destinationRat = dest + 'js/components/rat/';
destinationRisk = dest + 'js/components/risk/';
destinationSetting = dest + 'js/components/settings/';
destinationTickmark = dest + 'js/components/tickmark/';
destinationValidation = dest + 'js/components/validation/';
destinationWarning = dest + 'js/components/warning/';
destinationChangeSet = dest + 'js/components/changeset/';
destinationHome = dest + 'js/components/home/';
destinationChangesetProp = dest + 'js/components/changeset/changeset-properties/';
destinationChangeSummary = dest + 'js/components/change-summary/';
destinationScopeTags = dest + 'js/components/scope-tags/';
destinationTranslation = dest + 'js/components/translations/';
tsconfigLoc = 'tsconfig.json',
destMvcView = 'Views/Shared/',
envArg = process.argv.indexOf('--env'),
devBuild = true;

module.exports = {
    source: source,
    dest: dest,
    destMvcView: destMvcView,
    devBuild: devBuild,
    filesToCopy: [
        source + "images/**/*.*",
        source + "fonts/**/*.*",
        source + "vendor/**/*.*",
        source + "css/**/*.*",
        source + "data/**/*.*",
        source + "favicon.ico",
        source + "robots.txt"
    ],

    cshtml: {
        in: 'Views/Shared/_Layout.cshtml',
        watch: ['Views/**/*.cshtml'],
        out: dest,
        context: {
            devBuild: devBuild,
            author: pkg.author,
            version: pkg.version
        }
    },
    Questionnaire: {
        in: [destinationDocumentManager + "edit-questionnaire/*.js", destinationDocumentManager + "edit-questionnaire/**/*.js"],
        out: destinationDocumentManager + "/edit-questionnaire/dist",
        filename: 'edit-questionnaire.js',
        min: 'edit-questionnaire.min.js'
    },
    DocumentManagerBusinessEntity: {
        in: [destinationDocumentManager + "business-entities/*.js", destinationDocumentManager + "business-entities/**/*.js"],
        out: destinationDocumentManager + "/business-entities/dist",
        filename: 'doc-manager-entities.js',
        min: 'doc-manager-entities.min.js'
    },
    DocumentManager: {
        in: [destinationDocumentManager + "*.js",
            destinationDocumentManager + "**/*.js",
            "!" + destinationDocumentManager + "business-entities",
             "!" + destinationDocumentManager + "business-entities/**",
            "!" + destinationDocumentManager + "edit-questionnaire",
            "!" + destinationDocumentManager + "edit-questionnaire/**"],

        out: destinationDocumentManager + "dist",
        filename: 'document-manager.js',
        min: 'document-manager.min.js'
    },
    Common: {
        in: [destinationCommon + "**/*.js"],
        out: destinationCommon + "dist",
        filename: 'common.js',
        min: 'common.js'
    },
    VendorBundle: {
        in: [dest + "vendor/*.min.js", dest + "vendor/**/*.min.js", dest + "vendor/*.js", dest + "vendor/**/*.js", ],
        out: dest + "vendor/dist",
        filename: 'vendor.min.js',
        min: 'vendor.min.js'
    },
    AuditTest: {
        in: [destinationAuditTest + "*.js", destinationAuditTest + "**/*.js"],
        out: destinationAuditTest + "dist",
        filename: 'audit-test.js',
        min: 'audit-test-min.js'
    },
    Cycle: {
        in: [destinationCycle + "*.js", destinationCycle + "**/*.js"],
        out: destinationCycle + "dist",
        filename: 'cycle.js',
        min: 'cycle-min.js'
    },
    Fsa: {
        in: [destinationFsa + "*.js", destinationFsa + "**/*.js"],
        out: destinationFsa + "dist",
        filename: 'fsa.js',
        min: 'fsa-min.js'
    },
    Gaa: {
        
        in: [destinationGaa + "*.js", destinationGaa + "**/*.js"],
        out: destinationGaa + "dist",
        filename: 'gaa.js',
        min: 'gaa-min.js'
    },
    Gat: {
        in: [destinationGat + "*.js", destinationGat + "**/*.js"],
        out: destinationGat + "dist",
        filename: 'gat.js',
        min: 'gat-min.js'
    },
    LeadsheetCodes: {
        in: [destinationLeadsheetCode + "*.js", destinationLeadsheetCode + "**/*.js"],
        out: destinationLeadsheetCode + "dist",
        filename: 'leadsheet-code.js',
        min: 'leadsheet-code-min.js'
    },
    Materiality: {
        in: [destinationMateriality + "*.js", destinationMateriality + "**/*.js"],
        out: destinationMateriality + "dist",
        filename: 'materiality.js',
        min: 'materiality-min.js'
    },
    Rat: {
        in: [destinationRat + "*.js", destinationRat + "**/*.js"],
        out: destinationRat + "dist",
        filename: 'rat.js',
        min: 'rat-min.js'
    },
    Risk: {
        in: [destinationRisk + "*.js", destinationRisk + "**/*.js"],
        out: destinationRisk + "dist",
        filename: 'risk.js',
        min: 'risk-min.js'
    },
    Settings: {
        in: [destinationSetting + "*.js", destinationSetting + "**/*.js"],
        out: destinationSetting + "dist",
        filename: 'settings.js',
        min: 'settings-min.js'
    },
    Tickmark: {
        in: [destinationTickmark + "*.js", destinationTickmark + "**/*.js"],
        out: destinationTickmark + "dist",
        filename: 'tickmark.js',
        min: 'tickmark-min.js'
    },
    Validation: {
        in: [destinationValidation + "*.js", destinationValidation + "**/*.js"],
        out: destinationValidation + "dist",
        filename: 'validation.js',
        min: 'validation-min.js'
    },
    Warning: {
        in: [destinationWarning + "*.js", destinationWarning + "**/*.js"],
        out: destinationWarning + "dist",
        filename: 'warning.js',
        min: 'warning-min.js'
    },
    ChangeSet: {
        in: [destinationChangeSet + "*.js", destinationChangeSet + "**/*.js"],
        out: destinationChangeSet + "dist",
        filename: 'changeset.js',
        min: 'changeset-min.js'
    },
    Home: {
        in: [destinationHome + "*.js", destinationHome + "**/*.js"],
        out: destinationHome + "dist",
        filename: 'home.js',
        min: 'home-min.js'
    },
    ChangeSetProperties: {
        in: [destinationChangesetProp + "*.js", destinationChangesetProp + "**/*.js"],
        out: destinationChangesetProp + "dist",
        filename: 'changeset-properties.js',
        min: 'changeset-properties-min.js'
    },
    ChangeSummary: {
        in: [destinationChangeSummary + "*.js", destinationChangeSummary + "**/*.js"],
        out: destinationChangeSummary + "dist",
        filename: 'change-summary.js',
        min: 'change-summary-min.js'
    },
    ScopeTags: {
        in: [destinationScopeTags + "*.js", destinationScopeTags + "**/*.js"],
        out: destinationScopeTags + "dist",
        filename: 'scope-tags.js',
        min: 'scope-tags-min.js'
    },
    Translations: {
        in: [destinationTranslation + "*.js", destinationTranslation + "**/*.js"],
        out: destinationTranslation + "dist",
        filename: 'translation.js',
        min: 'translation-min.js'
    },
    html: {
        in: source + 'app/**/*.html',
        watch: [source + 'app/**/*.html'],
        out: dest,
        context: {
            devBuild: devBuild,
            author: pkg.author,
            version: pkg.version
        }
    },

    images: {
        in: [source + 'images/*.*', '!' + source + 'images/*.svg'],
        out: dest + 'images/'
    },

    css: {
        in: source + 'scss/main.scss',
        watch: [source + 'scss/**/*.scss', source + 'app/components/**/*.scss'],
        out: dest + 'css/',
        sassOpts: {
            outputStyle: 'expanded', // nested, expanded, compact, compressed, 
            imagePath: '../images',
            precision: 3,
            sourceComments: 'map',
            errLogToConsole: true
        }
    },

    componentsCSS: {
        in: source + 'app/components/**/*.scss',
        watch: [source + 'app/components/**/*.scss'],
        out: dest + "js/components/"
    },

    fonts: {
        in: source + 'fonts/*.*',
        out:dest + 'css/fonts/'
    },

    font: {
        in: source + 'fonts/*.*',
        out: destinationCommon + 'fonts/'
    },

    ts: {
        in: source + 'app/**/*.ts',
        out: dest + 'js/',
        libraryTypeScriptDefinitions: '../typings/*.ts'
    },

    js: {
        in: source + 'js/*.js',
        out: dest + 'js/',
        filename: 'main.min.js',
        vendor: source + 'vendor/'
    },

    vendor: {
        in: source + 'vendor/**/*',
        out: dest + 'vendor/'
    },

    componentsJS: {
        in: source + 'js/components/**/*.js',
        out: dest + 'js/components/'
    },

    lookup: {
        in: dbMigrationSource + 'Lookup/*.*',
        out: dest + 'lookup/'
    },

    syncOpts: {
        server: {
            baseDir: dest,
            index: 'index.html'
        },
        open: false,
        notify: true
    },

    inject: {
        in: destMvcView + '_Layout.cshtml',
        out: destMvcView,
        // injectSrc: [dest + "vendor/*.min.js", dest + "vendor/**/*.min.js", dest + "vendor/scrollbar/*.js"]
        injectSrc: [
            dest + "vendor/jquery.min.js",
            dest + "vendor/bootstrap.min.js",
            dest + "vendor/angular.min.js",
            dest + "vendor/angular-ui-router.min.js",
            dest + "vendor/ui-bootstrap-tpls.min.js",
            dest + "vendor/angular-animate.min.js",
            dest + "vendor/angular-sanitize.min.js",
            dest + "vendor/ocLazyLoad.min.js",
            dest + "vendor/purify.min.js",
            dest + "vendor/ngStorage.min.js",
            dest + "vendor/loading-bar.min.js",
            dest + "vendor/mention.js",
            dest + "vendor/scrollbar/jquery.mCustomScrollbar.concat.min.js",
            dest + "vendor/scrollbar/scrollbars.js",
            dest + "vendor/pako_deflate.min.js",
			dest + 'vendor/kendo.all.min.js',
			dest + "vendor/jquery.signalR.min.js",
        ]
    },
    scriptsHtml: source + 'templates/_scripts.html'
};