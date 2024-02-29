'use strict';

const page = document.querySelector('.page');
const lightThemeLink = document.querySelector('.themes__link_light');
const darkThemeLink = document.querySelector('.themes__link_dark');
const themeSwitch = document.querySelector('.settings__theme');
const animSwitch = document.querySelector('.settings__anim');

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

// Theme switch
themeSwitch.addEventListener('click', () => {
	page.classList.toggle('dark');
	if (localStorage.getItem('weblinks-theme') == 'dark') {
		localStorage.setItem('weblinks-theme', 'light');
	} else if (localStorage.getItem('weblinks-theme') == 'light') {
		localStorage.setItem('weblinks-theme', 'dark');
	}
});

// Animation switch
animSwitch.addEventListener('click', () => {
	// Scroll animation toggle
	let root = document.documentElement;
	let rootScroll = window.getComputedStyle(root).getPropertyValue('scroll-behavior');
	rootScroll == 'smooth' ? root.style.scrollBehavior = 'auto' : root.style.scrollBehavior = 'smooth';
	// Contents animation toggle
	const topicsList = document.querySelectorAll('.contents__topics');
	topicsList.forEach((el) => {
		el.classList.toggle('no-animation');
	});
});