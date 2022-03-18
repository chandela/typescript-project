var pkg = require('../package.json'),
    source = 'src/',  
    destination = '../dist/',
    devBuild = true;
    destinationCommon = destination + 'js/components/common/',
    destinationMainView = '../Index/index.html'

    module.exports = {
        source: source,
        destination: destination,
        devBuild: devBuild,
        destinationCommon : destinationCommon,
        filesToCopy: [
            source + "images/**/*.*",
            source + "fonts/**/*.*",
            source + "vendor/**/*.*",
            source + "css/**/*.*",
            source + "data/**/*.*",
            source + "favicon.ico",
            source + "robots.txt"
        ],
            
        HomeComponent: {
            in: [destination + 'DocManApp/js/components/HomeComponent/*.js', destination + 'js/components/HomeComponent/**/*.js'],
            out: destination + 'DocManApp/js/components/HomeComponent/dist',
            filename: 'homecomponent.js',
            min: 'homecomponent-min.js'
        },

        VendorBundle: {
            in: [destination + "vendor/*.min.js", destination + "vendor/**/*.min.js", destination + "vendor/*.js", destination + "vendor/**/*.js", ],
            out: destination + "vendor/dist",
            filename: 'vendor.min.js',
            min: 'vendor.min.js'
        },
    
        Common: {
            in: [destinationCommon + "**/*.js"],
            out: destinationCommon + "dist",
            filename: 'common.js',
            min: 'common.js'
        },

        html: {
            in: source + 'app/**/*.html',
            watch: [source + 'app/**/*.html'],
            out: destination +'DocManApp/js',
            context: {
                devBuild: devBuild,
                author: pkg.author,
                version: pkg.version
            }
        },

    images: {
        in: [source + 'images/*.*', '!' + source + 'images/*.svg'],
        out: destination + 'images/'
    },


    css: {
        in: source + 'scss/*.scss',
        watch: [source + 'scss/**/*.scss', source + '/Components/**/*.scss'],
        out: destination + 'css/',
        sassOpts: {
            outputStyle: 'expanded', // nested, expanded, compact, compressed, 
            imagePath: '../images',
            precision: 3,
            sourceComments: 'map',
            errLogToConsole: true
        }
    },
    componentsCSS: {
        in: source + 'App/Components/**/*.scss',
        watch: [source + 'App/Components/**/*.scss'],
        out: destination + 'DocManApp/js/Components'
    },

    // componentsCSS: {
    //     in: source + 'app/components/**/*.scss',
    //     watch: [source + 'app/components/**/*.scss'],
    //     out: dest + "js/components/"
    // },

    fonts: {
        in: source + 'fonts/*.*',
        out:destination + 'css/fonts/'
    },

    font: {
        in: source + 'fonts/*.*',
        out: destinationCommon + 'fonts/'
    },


    ts: {
        in:   source + 'App/**/*.ts',
        out: destination + 'DocManApp/js',
        libraryTypeScriptDefinitions: '../node_modules/@types/**/*.ts'
    },

    js: {
        in: source + 'js/*.js',
        out: destination + 'DocManApp/js',
        filename: 'main.min.js',
        vendor: source + 'vendor/'
    },

    vendor: {
        in: source + 'vendor/*',
        out: destination + 'vendor/'
    },

    componentsJS: {
        in: source + 'js/*.js',
        out: destination + 'js/Componentss/'
    },
    
    
   

   

    
   
   

    // lookup: {
    //     in: dbMigrationSource + 'Lookup/*.*',
    //     out: destination + 'lookup/'
    // },

   
    inject: {
        in: destinationMainView,
        out: destinationMainView,
        // injectSrc: [dest + "vendor/*.min.js", dest + "vendor/**/*.min.js", dest + "vendor/scrollbar/*.js"]
        injectSrc: [
            destination + "vendor/jquery.min.js",
            destination + "vendor/bootstrap.min.js",
            destination + "vendor/angular.min.js",
            destination + "vendor/angular-ui-router.min.js",
            destination + "vendor/ui-bootstrap-tpls.min.js",
            destination + "vendor/angular-animate.min.js",
            destination + "vendor/angular-sanitize.min.js",
            destination + "vendor/ocLazyLoad.min.js",
            destination + "vendor/purify.min.js",
            destination + "vendor/ngStorage.min.js",
            destination + "vendor/loading-bar.min.js",
            destination + "vendor/mention.js",
            destination + "vendor/scrollbar/jquery.mCustomScrollbar.concat.min.js",
            destination + "vendor/scrollbar/scrollbars.js",
            destination + "vendor/pako_deflate.min.js",
			destination + 'vendor/kendo.all.min.js',
			destination + "vendor/jquery.signalR.min.js",
        ]
    },
    scriptsHtml: source + 'templates/_scripts.html'
}