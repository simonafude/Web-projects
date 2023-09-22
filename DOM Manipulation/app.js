// DOM Manipulation



// getElementById()

// const title = document.getElementById('main-heading');

// console.log(title);


// // getElementByClassName()

// const movie = document.getElementsByClassName('movie');

// console.log(movie);

// // getELementbyTagName()

// const li = document.getElementsByTagName('li');

// console.log(movie);

// querySelector()

// const container = document.querySelector('div');
// console.log(container);

// querySelectorAll

// const containers = document.querySelectorAll('div');
// console.log(containers);


// const title = document.querySelector('#main-heading');
// title.style.color = 'red';
// console.log(title);


//Styling Elements
// const listItems = document.querySelectorAll('.movie');
// console.log(listItems);

// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].style.fontSize = '3rem';
// }


//Creating Elements

const ul = document.querySelector('ul');
const li = document.createElement('li');

//Adding Elements

ul.appendChild(li);

//Modifying the text

const firstListItem = document.querySelector('.movie');

// console.log(firstListItem.innerText); // make use of this
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

li.innerText = 'X-Men';

//Modifying Attributes and Classes

// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

// const title = document.querySelector('#main-heading');

// console.log(title.getAttribute('id'));

li.classList.remove('movie');


console.log(li.classList.contains('movie'));

//Remove Elements

li.remove();