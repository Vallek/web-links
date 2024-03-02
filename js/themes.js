'use strict';

const page = document.querySelector('.page');
const themeSwitchTop = document.querySelector('.toggle__theme');
const themeSwitchSide = document.querySelector('.settings__theme');
const animSwitch = document.querySelector('.settings__anim');

// No theme transition on start
window.addEventListener('load', () => {
	page.classList.remove('no-animation');
});

// Enable dark theme
function themeSwitchDark() {
	themeSwitchTop.classList.add('toggle__theme_dark');
	themeSwitchSide.classList.add('toggle__theme_dark');
}
// Enable light theme
function themeSwitchLight() {
	themeSwitchTop.classList.remove('toggle__theme_dark');
	themeSwitchSide.classList.remove('toggle__theme_dark');
}

// Check theme preference switch real time
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
	const newColorScheme = event.matches ? 'dark' : 'light';
	if (newColorScheme == 'dark') {
		page.classList.add('dark');
		themeSwitchTop.classList.add('toggle__theme_dark');
		themeSwitchSide.classList.add('toggle__theme_dark');
	}
	if (newColorScheme == 'light') {
		page.classList.remove('dark');
		themeSwitchTop.classList.remove('toggle__theme_dark');
		themeSwitchSide.classList.remove('toggle__theme_dark');
	} 
});

// Theme switch
if (localStorage.getItem('weblinks-theme') == 'dark') {
	themeSwitchTop.classList.add('toggle__theme_dark');
	themeSwitchSide.classList.add('toggle__theme_dark');
}
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	themeSwitchTop.classList.add('toggle__theme_dark');
	themeSwitchSide.classList.add('toggle__theme_dark');
}
themeSwitchTop.addEventListener('click', (el) => {
	page.classList.toggle('dark');
	if (localStorage.getItem('weblinks-theme') == 'dark') {
		localStorage.setItem('weblinks-theme', 'light');
		themeSwitchLight();
	} else if (localStorage.getItem('weblinks-theme') == 'light') {
		localStorage.setItem('weblinks-theme', 'dark');
		themeSwitchDark();
	}
});
themeSwitchSide.addEventListener('click', (el) => {
	page.classList.toggle('dark');
	if (localStorage.getItem('weblinks-theme') == 'dark') {
		localStorage.setItem('weblinks-theme', 'light');
		themeSwitchLight();
	} else if (localStorage.getItem('weblinks-theme') == 'light') {
		localStorage.setItem('weblinks-theme', 'dark');
		themeSwitchDark();
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
	// Sections animation
	const partWrapper = document.querySelectorAll('.part__content');
	partWrapper.forEach((el) => {
		el.classList.toggle('no-animation');
	});
	// Theme animation switch
	page.classList.toggle('no-animation');
});