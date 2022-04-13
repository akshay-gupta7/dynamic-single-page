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


// build the nav

window.addEventListener('load', function createnavbar(){
    const num_sec = 4;
    const section_names = ["Home", "About", "Product", "Pricing"];
    let ul=document.getElementById("Menu");
    for(let i = 0; i < num_sec; i++){
        let a = document.createElement("a");
        let section_name = "";
        if(i>3){
                section_name = "Section ".concat(i+1);
                let sentence = "This is ".concat(section_name);
                let sect = document.createElement("SECTION");
                sect.setAttribute("id",section_name);
                sect.innerHTML = sentence;
                document.body.append(sect);
        }
        else{
            section_name = section_names[i];
        }
        a.textContent = section_name;
        let li = document.createElement("li");
        let link = "#".concat(section_name.toLowerCase());
        a.setAttribute('href', link);
        a.setAttribute('id', "link".concat(section_name.toLowerCase()));
        li.setAttribute("class", section_name.toLowerCase());
        /*if(i==0){
            li.setAttribute("class", "active");
        }*/
        //li.id = "Section".concat(section_name.toLowerCase());
        li.appendChild(a);
        ul.appendChild(li);
    }
    let current = location.pathname;
    //alert(current);
});

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



// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/*
 * End Main Functions
 * Begin Events
 * 
*/



// Set sections and li as active

let sections = '';
let navLi = '';

window.addEventListener('scroll' , ()=> {
    sections = document.querySelectorAll('section');
    navLi = document.querySelectorAll('nav .container ul li');
    let current = '';

    sections.forEach( section =>{
        let rect = section.getBoundingClientRect();
        const sectionTop = section.offsetTop;
        //console.log(sectionTop)
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight/3.33)){
            current = section.getAttribute('id');
        }

        /*navLi.forEach(li => {
            li.classList.remove('active');
            if(li.classList.contains(current)){
                li.classList.add('active');
            }
        })*/

        if (rect.top <150 && rect.bottom >150){
            document.querySelector(`.${section.id}`).classList.add('active')
            section.classList.add('now-active')
        }
        else{
            document.querySelector(`.${section.id}`).classList.remove('active')
            section.classList.remove('now-active')
        }
    })

})

// Add anchor ID and scroll to that anchor using ScrollIntoView

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth"
        });
    });
});
