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