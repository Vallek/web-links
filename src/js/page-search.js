const form = document.querySelector('.search-form');
const input = document.querySelector('#page-search');
const main = document.querySelector('main');
const article = main.querySelectorAll('article');
const heading = main.querySelectorAll('h3 > a, h4');
const section = main.querySelectorAll('section');
const listItems = main.querySelectorAll('li');

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
	article.forEach(
		function hideArticles(item) {
			if (! item.querySelector('.show')) {
				item.classList.add('visually-hidden');
			}
			else {
				item.classList.remove('visually-hidden');
			}
		}
	);
	section.forEach(
		function hideSections(item) {
			if (! item.querySelector('.show')) {
				item.classList.add('visually-hidden');
			}
			else {
				item.classList.remove('visually-hidden');
			}
		}
	);
	heading.forEach((item) => {
		let linkText = item.textContent.toUpperCase();
		if (item.nodeName === 'A' && linkText.includes(inputValue) ) {
			let a = item.closest('article');
			let s = item.closest('section');
			a.classList.remove('visually-hidden');
			s.classList.remove('visually-hidden');
			let x = a.querySelectorAll('.visually-hidden');
			x.forEach((el) => {
				el.classList.remove('visually-hidden');
			});
		} 
		else if (item.nodeName === 'H4' && linkText.includes(inputValue)) {
			let a = item.closest('article');
			let s = item.closest('section');
			let p = item.closest('.part');
			a.classList.remove('visually-hidden');
			s.classList.remove('visually-hidden');
			p.classList.remove('visually-hidden');
			let x = s.querySelectorAll('.visually-hidden');
			x.forEach((el) => {
				el.classList.remove('visually-hidden');
			});
		}
	});
}

function autoReset() {
	if (input.value == null || input.value == "") {
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