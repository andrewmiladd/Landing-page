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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");
const ourDiv = document.createDocumentFragment();
const items = document.getElementById('navbar__list');
const highlight = document.querySelectorAll('your-active-class');


/**
 * End Global Variables
 
 * End Helper Functions
 * Begin Main Functions
 *
  
*/

// build the nav
for (sect of sections ){  // created a for..of loop for the creation of each section in the nav bar 
    let List = document.createElement("li"); // each time creating an 'li' for the sections
    let name = sect.getAttribute('data-nav'); // getting the name from 'dat-nav'
    let links= sect.getAttribute('id')  //  for the adresses
    List.innerHTML = `<a class = 'menu__link' '#${links}'> ${name} </a>`; //
    const smooth = List.addEventListener("click", (e) => { // function to the smooth scrolling
        e.preventDefault();  /* to prevent the page from refreshing*/
        const Id = document.getElementById(links);
        console.log(Id);
        Id.scrollIntoView({
          behavior: "smooth"
        
        });
      });
      
    ourDiv.appendChild(List); // adding the sections to our document fragment
 
    }
    items.appendChild(ourDiv); // adding our document fragment to the our DOM





/**
 * End Main Functions
 * Begin Events
 * 
 

*/



/*Set sections as active*/
/* when the user is in the decided part from the viewport, 
the color of selected section will be changed*/
const activeStat= window.onscroll = function (){
     sections.forEach(function(active){
        if (
            active.getBoundingClientRect().top>=-350 && active.getBoundingClientRect().top<=150){
            active.classList.add("your-active-class");
                }else{
            active.classList.remove("your-active-class");
     }
 }
)}


