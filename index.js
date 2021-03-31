let myLibrary = [];

function Book(title, author, numpage, complete) {
	this.title = title;
	this.author = author;
	this.numpage = numpage;
	this.complete = complete;
	this.sayBook = function() {
		return `Title: ${title}, Author: ${author},
		 Number of Page: ${numpage}, Read it?:`;
	};
}

myLibrary.push(new Book('Lord of the Flies', 'William Golding', 123, false));
myLibrary.push(new Book('test1', 'test1autoh', 11, true));

function addBookToLibrary(event) {
	const theTitle = this.document.getElementById('bookTitle').value;
	const theAuthor = this.document.getElementById('bookAuthor').value; //why does 'this' work?
	const thePage = this.document.getElementById('bookPage').value; //is this due to event only input?
	const bookCompletion = this.document.getElementById('bookCompletion').value;
	myLibrary.push(new Book(theTitle, theAuthor, thePage, bookCompletion));
	displayBook();
	console.log(theTitle);
	console.log('you');
	event.preventDefault();
}

const toggleButton = (event) => {
	const completeState = myLibrary[event.target.id.split('-')[1]].complete;
	if (completeState) !completeState;
	console.log(myLibrary);
};

const deleteItem = (event) => {
	myLibrary.splice(event.target.id.split('-')[1], 1);
	console.log('worked');
	displayBook();
};

const displayBook = () => {
	const bookListUl = document.getElementById('theList');
	bookListUl.innerHTML = '';
	let checkedCount = 0;
	for (let i = 0; i < myLibrary.length; i++) {
		const createLi = document.createElement('li');
		const textTotal = myLibrary[i].sayBook()
		
		if ()
		const newBookContent = document.createTextNode(textTotal);

		const toggleButton = document.createElement('input');
		toggleButton.type = 'checkbox';
		toggleButton.innerText = 'Read Completion';
		toggleButton.addEventListener('change', toggleButton);
		toggleButton.id = 'toggle-' + i; //NEED TO ADD THIS FUNCTION LATER!!!

		const removeButton = document.createElement('button');
		removeButton.innerText = 'Delete Book';
		removeButton.addEventListener('click', deleteItem);
		removeButton.id = 'remove-' + i;

		createLi.appendChild(newBookContent);
		createLi.appendChild(toggleButton);
		createLi.appendChild(removeButton);
		bookListUl.appendChild(createLi);
	}
};
