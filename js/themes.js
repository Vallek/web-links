'use strict';

const lightThemeLink = document.querySelector('.themes__link_light');
const darkThemeLink = document.querySelector('.themes__link_dark');
const styleTag = document.createElement('style');
styleTag.innerText = '.page{background-color:#002B36;} header,a,p,li{color:#b1c5c8;} h2>a,h2>a:visited,h3{color:#268BD2;} ';
console.log();
if (localStorage.getItem('themeIs') == 'Dark') {
	document.head.appendChild(styleTag);
}

darkThemeLink.addEventListener('click', setDark);
function setDark(el) {
	el.preventDefault();
	let style = document.querySelector('style');
	document.head.appendChild(styleTag);
	if (style == null) {
		document.head.appendChild(styleTag);
		localStorage.setItem('themeIs', 'Dark');
	}
}

lightThemeLink.addEventListener('click', setLight);
function setLight(el) {
	el.preventDefault();
	let style = document.querySelector('style');
	if (style != null) {
		document.head.removeChild(style);
	}
	localStorage.setItem('themeIs', 'Light');
}