'use strict';

const stickyContents = document.querySelector('.sticky');
const thisPage = document.querySelector('.sticky');

function stickHeader() {
	let pageTop = thisPage.getBoundingClientRect().top;
	if (pageTop < -350) {
		stickyContents.classList.add('sticky-contents_fixed');
	}
	else {
		stickyContents.classList.remove('sticky-contents_fixed');
	}	
}

window.addEventListener('scroll', stickHeader);
window.addEventListener('DOMContentLoaded', stickHeader);