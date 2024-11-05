// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
        const onClick = () => {
        item.classList.toggle('cs-active')
    }
    item.addEventListener('click', onClick)
    }

// your local storage reset for local testing. uncomment this command so you can still access you pop up after clicking the close or submit button.
// localStorage.setItem('closed', 'false');
    
// document.addEventListener('DOMContentLoaded', function() {
//     var CSmodal = document.getElementById('cs-modal-1605');
//     var CScloseButton = document.getElementById('cs-close-1605');
//     var CSsubmitButton = document.getElementById('cs-submit-1605');


//     if (localStorage.getItem('modalClosed') !== 'true') {
//         setTimeout(function() {
//             CSmodal.classList.add('cs-loaded');
//             CSmodal.style.zIndex = 12000;
//         }, 0);
//     } else {

//         CSmodal.classList.add('cs-closed');
//         CSmodal.classList.remove('cs-loaded');
//         CSmodal.style.zIndex = -10000;
//     }

//     CScloseButton.addEventListener('click', function() {
//         CSmodal.classList.add('cs-closed');
//         CSmodal.classList.remove('cs-loaded');
//         CSmodal.style.zIndex = -1000; 

//         localStorage.setItem('modalClosed', 'true');
//     });
// });

// Intersection Observer

document.addEventListener('DOMContentLoaded', () => {
    // Function to handle intersection events
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add an active class to trigger animations or effects
          entry.target.classList.add('active');
          // Optionally stop observing once the section is in view
          observer.unobserve(entry.target);
        }
      });
    };
  
    // Options for the observer
    const options = {
      root: null,         // Use the viewport as the root
      threshold: 0.1      // Trigger when 20% of the section is visible
    };
  
    // Create the observer
    const observer = new IntersectionObserver(handleIntersection, options);
  
    // Target each section to be observed
    const sections = document.querySelectorAll('.observed-section');
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  
               
                            