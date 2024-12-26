const gulp = require('gulp'); 
const concat = require('gulp-concat');
const del = require('del');
const header = require('gulp-header');

gulp.task('scripts', function() {
  let clean = del("./js/main.js");
	let scripts = gulp.src(['./src/js/themes.js', './src/js/header.js', './src/js/folding.js', './src/js/page-search.js'])
		.pipe(concat('main.js', {newLine: '\n\n'}))
		// .pipe(header("const page = document.querySelector('.page');\n"))
		.pipe(header("'use strict';\n\n"))
		.pipe(gulp.dest('./js/'));

	return Promise.all([clean, scripts]);
});

gulp.task('styles', function() {
  let clean = del("./css/main.css");
	let styles = gulp.src(['./src/css/style.css', './src/css/emojis.css', './src/css/favicons.css'])
		.pipe(concat('main.css', {newLine: '\n\n'}))
		.pipe(gulp.dest('./css/'));

	return Promise.all([clean, styles]);
});

gulp.task('stylesEN', function() {
  let clean = del("./css/mainEN.css");
	let stylesEN = gulp.src(['./src/css/style.css', './src/css/emojis.css', './src/css/favicons_EN.css'])
		.pipe(concat('main_EN.css', {newLine: '\n\n'}))
		.pipe(gulp.dest('./css/'));	

	return Promise.all([clean, stylesEN]);
});
