'use strict';

const lightThemeLink = document.querySelector('.themes__link_light');
const darkThemeLink = document.querySelector('.themes__link_dark');
const styleTag = document.createElement('style');
styleTag.innerText = '.page{background-color:#002B36;} header,a,p,li{color:#b1c5c8;} h2>a,h2>a:visited,h3{color:#268BD2;} h2:target{background-color:initial;outline: 2px solid rgba(132, 207, 250, 0.5);}';
if (localStorage.getItem('themeIs') == 'Dark') {
	document.head.appendChild(styleTag);
}
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	document.head.appendChild(styleTag);
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
	const newColorScheme = event.matches ? 'dark' : 'light';
	if (newColorScheme == 'dark') {
		document.head.appendChild(styleTag);
	}
	if (newColorScheme == 'light') {
		document.head.removeChild(styleTag);
	} 
});

darkThemeLink.addEventListener('click', setDark);
function setDark(el) {
	el.preventDefault();
	let style = document.querySelector('style');
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
		localStorage.setItem('themeIs', 'Light');
	}
}