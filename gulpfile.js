const { src, dest, watch } = require('gulp');
const concat = require('gulp-concat');
const header = require('gulp-header');

const styles = () => {
	return src(['./src/css/style.css', './src/css/emojis.css', './src/css/favicons.css'])
	.pipe(concat('main.css', {newLine: '\n\n'}))
	.pipe(dest('./css/'));
}

const stylesEn = () => {
	return src(['./src/css/style.css', './src/css/emojis.css', './src/css/favicons_EN.css'])
	.pipe(concat('main_EN.css', {newLine: '\n\n'}))
	.pipe(dest('./css/'));
}

const scripts = () => {
	return src(['./src/js/themes.js', './src/js/header.js', './src/js/folding.js', './src/js/page-search.js'])
	.pipe(concat('main.js', {newLine: '\n\n'}))
	.pipe(header("'use strict';\n\n"))
	.pipe(dest('./js/'));
}

const watchDev = () => {
	watch('./src/css/*.css', styles);
	watch('./src/css/*.css', stylesEn);
	watch('./src/js/*.js', scripts);
}

exports.styles = styles;
exports.stylesEn = stylesEn;
exports.scripts = scripts;
exports.watchDev = watchDev;