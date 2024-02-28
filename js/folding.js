'use strict';

const foldContents = document.querySelector('.contents__fold');
const foldContentsTitle = document.querySelector('.fold__title');
const foldedContentsTitle = document.querySelector('.fold__title.fold__title_show');
const foldContentsInput = document.querySelector('#fold-contents');
const topics = document.querySelectorAll('.contents__link');
const topicsList = document.querySelectorAll('.contents__topics');

foldContentsInput.addEventListener('click', foldCOntents);

function foldCOntents() {
	topicsList.forEach(el => {
		// Hide lists
		el.classList.toggle('visually-hidden');
		// Eye icon change
		foldContents.classList.toggle('fold_folded');
		foldContentsTitle.classList.toggle('fold__title_show');
		foldedContentsTitle.classList.toggle('fold__title_show');
		// Contents arrows
		topics.forEach(topic => {
			topic.classList.toggle('list__link_folded');
		});
	});
}