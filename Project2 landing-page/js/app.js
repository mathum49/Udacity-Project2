/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


const sections = document.querySelectorAll('section');



// build the nav

sections.forEach((section) => {
    const newIl = document.createElement("li");
    const idSection = section.id;
    const currentUl = document.getElementById("navbar__list");
    currentUl.appendChild(newIl);
    const anchor = document.createElement("a");
    const link = "#" + idSection;
    anchor.setAttribute('href', link);
    newIl.appendChild(anchor);
    const text = document.createTextNode(idSection);
    anchor.appendChild(text); 
});


// Add class 'active' to section when near top of viewport



function activeViewport(){
    for(let section of sections){
        const box = document.getElementById(section.id);
        const rect = box.getBoundingClientRect();
        const isInViewport = rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth);
        if(isInViewport === true){
            box.classList.add("active");
        } else {
            box.classList.remove("active");
        }
    }
};

document.addEventListener('scroll', activeViewport);


// Scroll to anchor ID using scrollTO event


const listItems = document.querySelectorAll('li');
console.log(listItems);


for(let listItem of listItems) {
  const idLink = listItem.textContent;
  listItem.addEventListener('click', (event) => {
    event.preventDefault();
    const element_to_scroll_to = document.getElementById(idLink);
    const scrollOptions = {
      behavior: 'smooth'
    }
    element_to_scroll_to.scrollIntoView(scrollOptions);
    });
};












/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


