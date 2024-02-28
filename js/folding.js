'use strict';

const fold = document.querySelector('.contents__fold');
const foldInput = document.querySelector('#fold-contents');
const topics = document.querySelectorAll('.list__fold-button');
const foldButton  = document.querySelectorAll('.list__fold-button');
const topicsList = document.querySelectorAll('.contents__topics');

foldInput.addEventListener('click', foldCOntents);
foldButton.forEach(el => {
	el.addEventListener('click', foldList);
});

// Toggle all button
function foldCOntents(event) {
	// Change title
	const unfoldTitle = document.querySelector('.fold__title_show');
	const foldTitle = document.querySelector('.fold__title_hide');
	unfoldTitle.classList.toggle('visually-hidden');
	foldTitle.classList.toggle('visually-hidden');
	// Fold and unfold lists
	if (foldInput.value == 'show') {
		topicsList.forEach(el => {
			el.classList.add('visually-hidden');
			foldInput.value = 'hide';
		});
			// Contents arrows
		topics.forEach(topic => {
			topic.classList.add('list__fold-button_folded');
		});
	} 
	else if (foldInput.value == 'hide') {
		topicsList.forEach(el => {
			el.classList.remove('visually-hidden');
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

// Fold/unfold each
function foldList(el) {
	let thisItem = el.target.parentNode;
	let thisLIst = thisItem.parentNode.querySelector('.contents__topics');
	let thisButton = thisItem.querySelector('.list__fold-button');
	thisLIst.classList.toggle('visually-hidden');
	thisButton.classList.toggle('list__fold-button_folded');
}