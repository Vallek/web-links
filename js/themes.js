'use strict';

const page = document.querySelector('.page');
const lightThemeLink = document.querySelector('.themes__link_light');
const darkThemeLink = document.querySelector('.themes__link_dark');

// Check if user set dark theme before
if (localStorage.getItem('weblinks-theme') == 'dark') {
	page.classList.add('dark');
}
// Check if user prefers dark theme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	page.classList.add('dark');
}
// Check theme preference switch real time
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
	const newColorScheme = event.matches ? 'dark' : 'light';
	if (newColorScheme == 'dark') {
		page.classList.add('dark');
	}
	if (newColorScheme == 'light') {
		page.classList.remove('dark');
	} 
});

// Turn dark theme on
darkThemeLink.addEventListener('click', setDark);
function setDark(el) {
	el.preventDefault();
	page.classList.add('dark');
	localStorage.setItem('weblinks-theme', 'dark');
}

// Turn light theme on
lightThemeLink.addEventListener('click', setLight);
function setLight(el) {
	el.preventDefault();
	page.classList.remove('dark');
		localStorage.setItem('weblinks-theme', 'light');
}