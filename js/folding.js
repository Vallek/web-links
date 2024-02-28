'use strict';

const foldContents = document.querySelector('.contents__fold');

const foldContentsInput = document.querySelector('#fold-contents');
const topics = document.querySelectorAll('.list__fold-button');
const listFoldButton  = document.querySelectorAll('.list__fold-button');
const topicsList = document.querySelectorAll('.contents__topics');

foldContentsInput.addEventListener('click', foldCOntents);
listFoldButton.forEach(el => {
	el.addEventListener('click', foldList);
});

// Toggle all button
function foldCOntents(event) {
	// Change title
	const unfoldContentsTitle = document.querySelector('.fold__title_show');
	const foldContentsTitle = document.querySelector('.fold__title_hide');
	unfoldContentsTitle.classList.toggle('visually-hidden');
	foldContentsTitle.classList.toggle('visually-hidden');
	// Fold and unfold lists
	if (foldContentsInput.value == 'show') {
		topicsList.forEach(el => {
			el.classList.add('visually-hidden');
			foldContentsInput.value = 'hide';
		});
			// Contents arrows
		topics.forEach(topic => {
			topic.classList.add('list__fold-button_folded');
		});
	} 
	else if (foldContentsInput.value == 'hide') {
		topicsList.forEach(el => {
			el.classList.remove('visually-hidden');
			foldContentsInput.value = 'show';
		});
			// Contents arrows
		topics.forEach(topic => {
			topic.classList.remove('list__fold-button_folded');
		});
	}
	// Eye icon change
	foldContents.classList.toggle('fold_folded');
}

// Fold/unfold each
function foldList(el) {
	let thisItem = el.target.parentNode;
	let thisLIst = thisItem.parentNode.querySelector('.contents__topics');
	let thisButton = thisItem.querySelector('.list__fold-button');
	thisLIst.classList.toggle('visually-hidden');
	thisButton.classList.toggle('list__fold-button_folded');
}