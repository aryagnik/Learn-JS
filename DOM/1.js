// Difference between innerText, textContent and innerHTML:
/*
If in a paragraph we hide some words using display: none then:
-> innerText will only show the visible part of the paragraph.
-> textContent will show the whole paragraph.
-> innerHTML will show everything including the HTML code written inside it.
*/


// Query selectors:

document.querySelector('h1');
// It will only select the first occurence of the h1.

document.querySelectorAll('h1');
// It will select all the occurences of h1.

document.querySelector('#title');   // for selecting id

document.querySelector('.class');  // for selecting class

// From document.querySelectorAll(), we get the values in HTMLCollection or NodeList. In NodeList we can use forEach but for HTMLCollection we have to use Array.from(HTMLCollection) to convert it into an array and then only we can alter the changes required.