const gulp = require('gulp'); 
const concat = require('gulp-concat');
const del = require('del');
const header = require('gulp-header');

gulp.task('scripts', function() {
  let clean = del("./js/main.js");
	let scripts = gulp.src(['./js/themes.js', './js/header.js', './js/folding.js'])
		.pipe(concat('main.js', {newLine: '\n\n'}))
		.pipe(header("'use strict';\n"))
		.pipe(gulp.dest('./js/'));

	return Promise.all([clean, scripts]);
});

gulp.task('styles', function() {
  let clean = del("./js/main.css");
	let styles = gulp.src(['./src/css/style.css', './src/css/emojis.css', './src/css/favicons.css'])
		.pipe(concat('main.css', {newLine: '\n\n'}))
		.pipe(gulp.dest('./css/'));

	return Promise.all([clean, styles]);
});
