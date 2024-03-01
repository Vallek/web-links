'use strict';

const page = document.querySelector('.page');
const themeSwitch = document.querySelector('.settings__theme');
const animSwitch = document.querySelector('.settings__anim');

// No theme transition on start
window.addEventListener('load', () => {
	page.classList.remove('no-animation');
});

// Check theme preference switch real time
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
	const newColorScheme = event.matches ? 'dark' : 'light';
	if (newColorScheme == 'dark') {
		page.classList.add('dark');
		themeSwitch.classList.add('settings__theme_dark');
	}
	if (newColorScheme == 'light') {
		page.classList.remove('dark');
		themeSwitch.classList.remove('settings__theme_dark');
	} 
});

// Theme switch
if (localStorage.getItem('weblinks-theme') == 'dark') {
	themeSwitch.classList.add('settings__theme_dark');
}
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	themeSwitch.classList.add('settings__theme_dark');
}
themeSwitch.addEventListener('click', (el) => {
	page.classList.toggle('dark');
	if (localStorage.getItem('weblinks-theme') == 'dark') {
		localStorage.setItem('weblinks-theme', 'light');
		el.target.classList.remove('settings__theme_dark');
	} else if (localStorage.getItem('weblinks-theme') == 'light') {
		localStorage.setItem('weblinks-theme', 'dark');
		el.target.classList.add('settings__theme_dark');
	}
});

// Animation toggle
animSwitch.addEventListener('click', (button) => {
	button.target.classList.toggle('settings__anim_on');
	// Scroll animation swich
	let root = document.documentElement;
	let rootScroll = window.getComputedStyle(root).getPropertyValue('scroll-behavior');
	rootScroll == 'smooth' ? root.style.scrollBehavior = 'auto' : root.style.scrollBehavior = 'smooth';
	// Contents animation swich
	const topicsList = document.querySelectorAll('.contents__topics');
	topicsList.forEach((el) => {
		el.classList.toggle('no-animation');
	});
	// Theme animation switch
	page.classList.toggle('no-animation');
});