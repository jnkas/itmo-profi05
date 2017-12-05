var gulp        = require('gulp'),
    less        = require('gulp-less'),
    plumber     = require('gulp-plumber'),
    changed     = require('gulp-changed'),
    browsersync = require('browser-sync'),

// other plugins
    
    imagemin        = require('gulp-imagemin'),
    LessAutoPrefix  = require('less-plugin-autoprefix'),
    clean           = require('gulp-clean'),
    runSequence     = require('run-sequence');

var INSTANCE = 'build';

// Path options
var PATH = {
    src : {
        images  :   'app/images/**/*.*',
        less    :   'app/css/less/import.less',
        css     :   'app/css/*.css',
        html    :   'app/*.html',
        fonts   :   'app/fonts/**/*.*',
        lessEdit:   'app/css/less/**/*.less',

    },
    dest: {
        images  :   INSTANCE + '/images/',
        css     :   INSTANCE + '/css/',
        html    :   INSTANCE + '/',
        fonts   :   INSTANCE + '/fonts',
        build   :   INSTANCE + '/'
    }  
};

// Server options
var SYNC_CONFIG = {
    server  :   {
        baseDir : './' + INSTANCE,
        index   : 'index.html'
    },
    open    :   true,
    notify  :   true
};

// LESS options
var LESS_PREFIXER = new LessAutoPrefix({
    browsers: ['last 5 versions', 'ie 9', 'Firefox 14']
});

// Handle styles
gulp.task('css', function() {
    return gulp.src(PATH.src.css)
        .pipe(gulp.dest(PATH.dest.css));
});

gulp.task('less', function() {
    return gulp.src(PATH.src.less)
        .pipe(changed(PATH.dest.css))
        .pipe(plumber( function (err) {
            console.log('*** LESS TASK ERROR ***');
            console.log(err);
            this.emit('end');
        }))
        .pipe(less({
            paths   : [PATH.src.less],
            plugins : [LESS_PREFIXER]
        }))
        .pipe(gulp.dest(PATH.dest.css))
        .pipe(browsersync.reload({ stream: true }));
});

// Handle images
gulp.task('pictures', function() { 
    return gulp.src(PATH.src.images)
        .pipe(changed(PATH.dest.images))
        .pipe(imagemin())
        .pipe(gulp.dest(PATH.dest.images));
});

// Handle html
gulp.task('html', function() {
    return gulp.src(PATH.src.html)
        .pipe(changed(PATH.dest.html))
        .pipe(gulp.dest(PATH.dest.html));
});

// handle fonts
gulp.task('fonts', function(){
    return gulp.src(PATH.src.fonts)
        .pipe(gulp.dest(PATH.dest.fonts));
});

// Delite build content 
gulp.task('clean', function () {
    console.log('*** ' + INSTANCE + ' directory successfully removed ***');
    return gulp.src(PATH.dest.build, {read: false})
        .pipe(clean());
});

// Browser-sync task
gulp.task('browsersync', function() {
    browsersync(SYNC_CONFIG);
});

// Styles rebuild only: $ gulp styles
gulp.task('styles', ['css', 'less']);

// Build task: $ gulp build
gulp.task('build', function() {

    runSequence('clean',
        [   
            'styles',
            'fonts',
            'pictures',
            'html'
        ]
    );
    
});

// WATCH task: $ gulp
gulp.task('default', function() {
    
    console.log('*** Starting WATCH task ***');
    
    runSequence('build','browsersync');
    
    // image changes
    gulp.watch(PATH.src.images, ['pictures', browsersync.reload]);
    
    // html changes
    gulp.watch(PATH.src.html,   ['html', browsersync.reload]);
    
    // css changes
    gulp.watch(PATH.src.css,    ['css', browsersync.reload]);    
    
    // fonts changes
    gulp.watch(PATH.src.fonts,    ['fonts', browsersync.reload]);

    // less changes
    gulp.watch(PATH.src.lessEdit,   ['less', browsersync.reload]);

});