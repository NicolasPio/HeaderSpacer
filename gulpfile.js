var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

var fileJS = './src/*',
	distJS = './dist/';

gulp.task('compress', function() {
	gulp.src(fileJS)
		.pipe(uglify())
        .pipe(rename('headerspacer.min.js'))
		.pipe(gulp.dest(distJS));
});

gulp.task('watch', function() {
	gulp.watch(fileJS, ['compress']);
});

gulp.task('default', ['watch']);
