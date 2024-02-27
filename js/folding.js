'use strict';

const foldContents = document.querySelector('.contents__fold');
const foldContentsInput = document.querySelector('#fold-contents');
const topics = document.querySelectorAll('.contents-list__link');
const topicsList = document.querySelectorAll('.contents-list__topics');

foldContentsInput.addEventListener('click', foldCOntents);

function foldCOntents() {
	topicsList.forEach(el => {
		el.classList.toggle('visually-hidden');
		foldContents.classList.toggle('contents__fold_fold');
		topics.forEach(topic => {
			topic.classList.toggle('contents-list__link_folded');
		});
	});
}