'use strict';

const page = document.querySelector('.page');
const toggleSwitchTop = document.querySelector('.toggle__theme');
const toggleSwitchSide = document.querySelector('.settings__theme');
const animSwitch = document.querySelector('.settings__anim');

// No theme transition on start
window.addEventListener('load', () => {
	if (!localStorage.getItem('weblinks-animation') ||
	localStorage.getItem('weblinks-animation') === 'on') {
		page.classList.remove('no-animation'); // anim ON
	} else {
		page.classList.add('no-animation');
	}
});

// Switch theme function
function switchTheme(state) {
	if (state === 'dark') {
		page.classList.add('dark');
		localStorage.setItem('weblinks-theme', 'dark');
		// Toggle style state
		toggleSwitchTop.classList.add('toggle__theme_dark');
		toggleSwitchSide.classList.add('toggle__theme_dark');
	} 
	else if (state === 'light') {
		page.classList.remove('dark');
		localStorage.setItem('weblinks-theme', 'light');
		// Toggle style state
		toggleSwitchTop.classList.remove('toggle__theme_dark');
		toggleSwitchSide.classList.remove('toggle__theme_dark');
	}
}

// Sync last user choice
if (localStorage.getItem('weblinks-theme') === 'dark') {
	switchTheme('dark');
} 
// else if (localStorage.getItem('weblinks-theme') === 'light') {
// 	switchTheme('light');
// }
// Sync os setting
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	switchTheme('dark');
} 
// else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
// 	switchTheme('light');
// }

// Check theme switch real time
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
	const newColorScheme = event.matches ? 'dark' : 'light';
	if (newColorScheme === 'dark') {
		switchTheme('dark');
	}
	if (newColorScheme === 'light') {
		switchTheme('light');
	} 
});

// Theme toggles
toggleSwitchTop.addEventListener('click', () => {
	if (!localStorage.getItem('weblinks-theme') || 
	localStorage.getItem('weblinks-theme') === 'light') {
		switchTheme('dark');
	} else if (localStorage.getItem('weblinks-theme') === 'dark' || 
	toggleSwitchTop.classList.contains === 'toggle__theme_dark') {
		switchTheme('light');
	}
});

toggleSwitchSide.addEventListener('click', () => {
	if (!localStorage.getItem('weblinks-theme') || 
	localStorage.getItem('weblinks-theme') === 'light') {
		switchTheme('dark');
	} else if (localStorage.getItem('weblinks-theme') === 'dark' || 
	toggleSwitchTop.classList.contains === 'toggle__theme_dark') {
		switchTheme('light');
	}
});

// Switch animation function
function animToggle() {
	// Scroll animation swich
	let root = document.documentElement;
	let rootScroll = window.getComputedStyle(root).getPropertyValue('scroll-behavior');
	rootScroll === 'smooth' ? root.style.scrollBehavior = 'auto' : root.style.scrollBehavior = 'smooth';
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
}

// Check animation setting on start
if (localStorage.getItem('weblinks-animation') === 'off') {
	animToggle();
	animSwitch.classList.remove('settings__anim_on');
	localStorage.setItem('weblinks-animation', 'off');
}

// Animation toggle
animSwitch.addEventListener('click', (button) => {
	button.target.classList.toggle('settings__anim_on');
	animToggle();
	if (localStorage.getItem('weblinks-animation') === 'on') {
		localStorage.setItem('weblinks-animation', 'off');
	} else if (localStorage.getItem('weblinks-animation') === 'off') {
		localStorage.setItem('weblinks-animation', 'on');
	} else {
		localStorage.setItem('weblinks-animation', 'off');
	}
});