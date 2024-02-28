'use strict';

const foldContents = document.querySelector('.contents__fold');
const foldContentsTitle = document.querySelector('.contents__fold__title');
const foldedContentsTitle = document.querySelector('.contents__fold__title.contents__fold__title_show');
const foldContentsInput = document.querySelector('#fold-contents');
const topics = document.querySelectorAll('.contents-list__link');
const topicsList = document.querySelectorAll('.contents-list__topics');

foldContentsInput.addEventListener('click', foldCOntents);

function foldCOntents() {
	topicsList.forEach(el => {
		// Hide lists
		el.classList.toggle('visually-hidden');
		// Eye icon change
		foldContents.classList.toggle('contents__fold_folded');
		foldContentsTitle.classList.toggle('contents__fold__title_show');
		foldedContentsTitle.classList.toggle('contents__fold__title_show');
		// Contents arrows
		topics.forEach(topic => {
			topic.classList.toggle('contents-list__link_folded');
		});
	});
}