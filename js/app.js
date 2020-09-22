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
     //the DOM is ready to be interacted with! // 
    document.addEventListener('DOMContentLoaded', function () {
    console.log('the DOM is ready to be interacted with!');



/**
 * Define Global Variables
 * 
*/
const navbarList  = document.querySelector("#navbar__list");
const listOfSection= document.querySelectorAll("section");


/**
 * End Global Variables
 
 * Begin Main Functions
 * 
*/


// build the nav

listOfSection.forEach((section , index) => {
	const newList = document.createElement('li');
	newList.innerHTML += `<a  href="#section${index + 1}" class="menu__link" id=my${section.id}>${section.dataset.nav}</a>`;
    navbarList.appendChild(newList);

  });

// getting the largest value that's less or equal to the number
const offsetSection = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class
const removeActiveSection = (section) => {
    section.classList.remove('sectionActive');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
    
};
// adding the active class
const addActiveSection = (condition, section) => {
    if(condition){
        section.classList.add('sectionActive');
        section.style.cssText = "border: 7px solid #fff;";
    };
};

//implementating the actual function

const sectionsActive = () => {
    listOfSection.forEach(section => {
        const elementOffset = offsetSection(section);

        isInView = () => elementOffset < 130 && elementOffset >= -130;

        removeActiveSection(section);
        
        addActiveSection(isInView(),section);
    });
};

window.addEventListener('scroll' ,sectionsActive);




});



 // 
	


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

