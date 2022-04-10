/*
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
function createnavbar(){
    const num_sec=4;
    const section_names=["Home", "About", "Product", "Pricing"];
    var ul=document.getElementById("Menu");
    for(let i=0; i< num_sec; i++){
        var a = document.createElement("a");
        let section_name="";
        if(i>3){
            section_name="Section ".concat(i);
        }
        else{
            section_name=section_names[i];
        }
        a.textContent=section_name;
        var li=document.createElement("li");
        var link="#".concat(section_name.toLowerCase());
        a.setAttribute('href', link);
        li.setAttribute("class", "links");
        li.appendChild(a);
        ul.appendChild(li);
    }
}

/*
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/*
 * Define Global Variables
 * 
*/


/*
 * End Global Variables
 * Start Helper Functions
 * 
*/



/*
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/*
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

