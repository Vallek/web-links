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
	if (localStorage.getItem('weblinks-animation') === 'on' ||
	!localStorage.getItem('weblinks-animation')) {
		switchAnim('anim-off');
	} else if (localStorage.getItem('weblinks-animation') === 'off') {
		switchAnim('anim-on');
	}
});

const stickyContents = document.querySelector('.sticky');
const contentsBtn = document.querySelector('.sticky-contents-btn');
const settingsBtn = document.querySelector('.sticky-settings-btn');

function stickHeader() {
	let pageTop = page.getBoundingClientRect().top;
	if (pageTop < -350) {
		stickyContents.classList.add('sticky-contents_fixed');
	}
	else {
		stickyContents.classList.remove('sticky-contents_fixed');
	}	
}

window.addEventListener('scroll', stickHeader);
window.addEventListener('DOMContentLoaded', stickHeader);

// Close when click outside
document.addEventListener('click', (el) => {
	let target = el.target;
	if (!stickyContents.contains(target)) {
		contentsBtn.checked = false;
		settingsBtn.checked = false;
	}
});

const fold = document.querySelector('.contents__fold');
const foldInput = document.querySelector('#fold-contents');
const topics = document.querySelectorAll('.list__fold-button');
const foldButton  = document.querySelectorAll('.list__fold-button');
const topicsList = document.querySelectorAll('.contents__topics');
const topicsListLinks = document.querySelectorAll('.contents__topics a');

foldInput.addEventListener('click', foldCOntents);
foldButton.forEach(el => {
	el.addEventListener('click', foldListAll);
});

// Fold list for css transition with height detection function
function foldList(el, status) {
	if (status === 'show' ||
	el.style.height === '0px') {
		el.style.height = el.scrollHeight + 'px';
	} else {
		el.style.height = el.scrollHeight + 'px';
		window.getComputedStyle(el, null).getPropertyValue('height');
		el.style.height = '0';
	}
	if (status === 'hide' ||
	el.style.height === 'auto') {
		el.style.height = el.scrollHeight + 'px';
		window.getComputedStyle(el, null).getPropertyValue('height');
		el.style.height = '0';
	}
	el.addEventListener('transitionend', () => {
		if (el.style.height !== '0px') {
				el.style.height = 'auto';
		}
	});
}

// Fold/unfold contents toggle
function foldCOntents(event) {
	// Change title
	const unfoldTitle = document.querySelector('.fold__title_show');
	const foldTitle = document.querySelector('.fold__title_hide');
	unfoldTitle.classList.toggle('visually-hidden');
	foldTitle.classList.toggle('visually-hidden');
	// Fold and unfold lists
	if (foldInput.value === 'show') {
		topicsList.forEach(el => {
			foldList(el, 'hide');
			foldInput.value = 'hide';
		});
			// Contents arrows
		topics.forEach(topic => {
			topic.classList.add('list__fold-button_folded');
		});
	} 
	else if (foldInput.value === 'hide') {
		topicsList.forEach(el => {
			foldList(el, 'show');
			foldInput.value = 'show';
		});
			// Contents arrows
		topics.forEach(topic => {
			topic.classList.remove('list__fold-button_folded');
		});
	}
	// Eye icon change
	fold.classList.toggle('fold_folded');
}

// Fold/unfold each content list
function foldListAll(el) {
	let thisItem = el.target.parentNode;
	let thisLIst = thisItem.parentNode.querySelector('.contents__topics');
	let thisButton = thisItem.querySelector('.list__fold-button');
	thisButton.classList.toggle('list__fold-button_folded');
	foldList(thisLIst);
}

// Fold main sections on heading click
const partHeadings = document.querySelectorAll('.part__heading');

partHeadings.forEach((el) => {
	el.addEventListener('click', (evt) => {
		if (evt.target === evt.currentTarget) {
			let partContent = el.parentElement.querySelector('.part__content');
			foldList(partContent);
			el.classList.toggle('heading-folded');
			partContent.classList.toggle('item-folded');
		} 
	});
});

// Unfold section on anchor link click
topicsListLinks.forEach((el) => {
	el.addEventListener('click', (evt) => {
		let hrefId = evt.target.getAttribute('href');
		let targetHeading = document.querySelector(hrefId.toString());
		let partContent = targetHeading.closest('.part__content');
		if (partContent.classList.contains('item-folded')) {
			partContent.classList.remove('item-folded');
			foldList(partContent, 'show');
			setTimeout(() => {
				targetHeading.scrollIntoView();
				// Time higher then transition time
			}, 550);
		}
	});
});

// Fold main sections toggle
const foldSwitch = document.querySelector('.settings__fold');
foldSwitch.addEventListener('click', () => {
	if (foldSwitch.value === 'show') {
		partHeadings.forEach((el) => {
			let partContent = el.parentElement.querySelector('.part__content');
			foldList(partContent, 'hide');
			el.classList.add('heading-folded');
			partContent.classList.add('item-folded');
			foldSwitch.value = 'hide';
			foldSwitch.classList.add('settings__fold_folded');
		});
	}
	else {
		partHeadings.forEach((el) => {
			let partContent = el.parentElement.querySelector('.part__content');
			foldList(partContent, 'show');
			el.classList.remove('heading-folded');
			partContent.classList.remove('item-folded');
			foldSwitch.value = 'show';
			foldSwitch.classList.remove('settings__fold_folded');
		});
	}
});