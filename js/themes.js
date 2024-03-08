'use strict';

const page = document.querySelector('.page');
const toggleSwitchTop = document.querySelector('.toggle__theme');
const toggleSwitchSide = document.querySelector('.settings__theme');
const animSwitch = document.querySelector('.settings__anim');

// No theme transition on start
window.addEventListener('load', () => {
	if (!localStorage.getItem('weblinks-animation') ||
	localStorage.getItem('weblinks-animation') === 'on') {
		page.classList.remove('no-animation');
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
function switchAnim(state) {
	let root = document.documentElement;
	let topicsList = document.querySelectorAll('.contents__topics');
	let partWrapper = document.querySelectorAll('.part__content');
	if (state === 'anim-on') {
		// Scroll animation swich
		root.style.scrollBehavior = 'smooth';
		// Contents animation swich
		topicsList.forEach((el) => {
			el.classList.remove('no-animation');
		});
		// Sections animation
		partWrapper.forEach((el) => {
			el.classList.remove('no-animation');
		});
		// Theme animation switch
		page.classList.remove('no-animation');
		// Button state style
		animSwitch.classList.add('settings__anim_on');
		// Remember state
		localStorage.setItem('weblinks-animation', 'on');
	}
	if (state === 'anim-off') {
		// Scroll animation swich
		root.style.scrollBehavior = 'auto';
		// Contents animation swich
		topicsList.forEach((el) => {
			el.classList.add('no-animation');
		});
		// Sections animation
		partWrapper.forEach((el) => {
			el.classList.add('no-animation');
		});
		// Theme animation switch
		page.classList.add('no-animation');
		// Button state style
		animSwitch.classList.remove('settings__anim_on');
		// Remember state
		localStorage.setItem('weblinks-animation', 'off');
	}
}

// Check os no animation setting
if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
	switchAnim('anim-off');
} 

// Check animation setting on start
if (localStorage.getItem('weblinks-animation') === 'off') {
	switchAnim('anim-off');
}

// Animation toggle
animSwitch.addEventListener('click', (button) => {
	if (localStorage.getItem('weblinks-animation') === 'on') {
		switchAnim('anim-off');
	} else if (localStorage.getItem('weblinks-animation') === 'off') {
		switchAnim('anim-on');
	} else {
		switchAnim('anim-off');
	}
});