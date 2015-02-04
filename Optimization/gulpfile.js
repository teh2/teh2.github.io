//Need to include gulp
var gulp = require('gulp');

//Need to include plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat'); //At this time, there's only one of each, so this shouldn't really do anything, but prepare for the future...
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');
var minifyhtml = require('gulp-minify-html');
var minifycss = require('gulp-minify-css');
var imageopt = require('gulp-image-optimization');
//var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var cache = require('gulp-cache');
var notify = require('gulp-notify');
var del = require('del');

//lint the JS
gulp.task('lint', function() {
	return gulp.src('js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(notify({ message: 'finished with lint task'}));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
		.pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))
		.pipe(notify({ message: 'finished with scripts task'}));
});

//Minify the html
gulp.task('html', function() {
	return gulp.src('*.html')
		.pipe(replace(/css\/([a-zA-Z0-9\-]+).css/g,'css/$1.min.css'))
		.pipe(replace(/js\/([a-zA-Z0-9\-]+).js/g,'js/$1.min.js'))
		.pipe(minifyhtml())
		.pipe(gulp.dest('build'))
		.pipe(notify({ message: 'finished with html task'}));
});

//Minify the css
gulp.task('styles', function() {
	return gulp.src('css/*.css')
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('build/css'))
		.pipe(notify({ message: 'finished with styles task'}));
});

//Compress the images
gulp.task('images', function() {
	return gulp.src('img/**/*')
		.pipe(imageopt({optimizationLevel: 5, progressive: true, interlaced: true}))
		.pipe(gulp.dest('build/img'))
		.pipe(notify({ message: 'Finished with images task'}));
});

//Now, do it all again for the Pizza (views folder).
//I'd like to do this using lazyPipes and merge the stuff above with
//the stuff below, but for now, the simple approach works...

//lint the JS
gulp.task('pizzalint', function() {
	return gulp.src('views/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(notify({ message: 'finished with lint task'}));
});

// Concatenate & Minify JS
gulp.task('pizzascripts', function() {
    return gulp.src('views/js/*.js')
		.pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('build/views/js'))
		.pipe(notify({ message: 'finished with scripts task'}));
});

//Minify the html
gulp.task('pizzahtml', function() {
	return gulp.src('views/*.html')
		.pipe(replace(/css\/([a-zA-Z0-9\-]+).css/g,'css/$1.min.css'))
		.pipe(replace(/js\/([a-zA-Z0-9\-]+).js/g,'js/$1.min.js'))
		.pipe(minifyhtml())
		.pipe(gulp.dest('build/views'))
		.pipe(notify({ message: 'finished with html task'}));
});

//Minify the css
gulp.task('pizzastyles', function() {
	return gulp.src('views/css/*.css')
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('build/views/css'))
		.pipe(notify({ message: 'finished with styles task'}));
});

//Compress the images
gulp.task('pizzaimages', function() {
	return gulp.src('views/images/**/*')
		.pipe(imageopt({optimizationLevel: 5, progressive: true, interlaced: true}))
		.pipe(gulp.dest('build/views/images'))
		.pipe(notify({ message: 'Finished with images task'}));
});

//Clean out build folder in preparation for a new build
gulp.task('clean', function(cb) {
	del(['build'], cb);
});

// Watch Files For Changes (Not using this yet...)
/*
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});
*/
// Default Task
//gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
gulp.task('default', ['clean'], function() {
	gulp.start('html', 'lint', 'scripts', 'styles', 'images',
		'pizzahtml', 'pizzalint', 'pizzascripts', 'pizzastyles',
		'pizzaimages');
});
