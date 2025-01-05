const form = document.querySelector('.search-form');
const input = document.querySelector('#page-search');
const main = document.querySelector('main');
const articles = main.querySelectorAll('article');
const headings = main.querySelectorAll('h3 > a, h4');
const sections = main.querySelectorAll('section');
const listItems = main.querySelectorAll('li');
let parts = [];
parts.push(articles, sections);

form.addEventListener('submit', submit);
input.addEventListener('keyup', filter);
input.addEventListener('keyup', autoReset);
input.addEventListener('keyup', scrollToTop);

function submit(evt) {
	evt.preventDefault();
}

function filter(evt) {
	evt.preventDefault();
	let inputValue = input.value.toUpperCase();	
	// Filter links
	listItems.forEach(
		function getMatch(item) {
			let listLinks = item.querySelectorAll('a');
			listLinks.forEach(
				function allLinks(link) {
					let linkText = link.textContent.toUpperCase();
					if (! linkText.includes(inputValue)) {
						item.classList.add('visually-hidden');
						item.classList.remove('show');
						link.classList.remove('show');
					}
					else {
						item.classList.remove('visually-hidden');
						item.classList.add('show');
						link.classList.add('show');
					}
					if (item.querySelector('.show')) {
						item.classList.remove('visually-hidden');
					}
				}
			);
		}
	);
	// Filter sections with/without shown links 
	parts.map((part) => {
		part.forEach((el) => {
			if (! el.querySelector('.show')) {
				el.classList.add('visually-hidden');
			}
			else {
				el.classList.remove('visually-hidden');
			}
		});
	});
	// Show sections on page and links inside sections
	function showLInks(part, links) {
		for (let i = 0; i < part.length; i++) {
			part[i].classList.remove('visually-hidden');
		}
		let x = links.querySelectorAll('.visually-hidden');
		x.forEach((el) => {
			el.classList.remove('visually-hidden');
		});
	}
	// Filter sections based on headings h3 and h4
	headings.forEach((item) => {
		let linkText = item.textContent.toUpperCase();
		let a = item.closest('article');
		let s = item.closest('section');
		if (item.nodeName === 'A' && linkText.includes(inputValue) ) {
			showLInks([a, s], a);
		} 
		else if (item.nodeName === 'H4' && linkText.includes(inputValue)) {
			let p = item.closest('.part');
			showLInks([a, s, p], s);
		}
	});
}

function autoReset() {
	if (input.value === null || input.value === "") {
		let allHide = main.querySelectorAll('.visually-hidden');
		let allShow = main.querySelectorAll('.show');
		allHide.forEach(
			function showAll(item) {
				item.classList.remove('visually-hidden');
				item.classList.remove('show');
			}
		);
		allShow.forEach(
			function showAll(item) {
				item.classList.remove('visually-hidden');
				item.classList.remove('show');
			}
		);
	}
	else {
		return;
	}			
}

function scrollToTop() {
	if (window.scrollY !== 0) {
		main.scrollIntoView({
			// behavior: "smooth"
		});
	}
}