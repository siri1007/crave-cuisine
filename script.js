




// script.js
function toggleNav() {
    const nav = document.getElementById("navbar");
    const heading = document.querySelector(".heading");
    const content = document.querySelector(".content");
  

    // Toggle the 'show' class
    nav.classList.toggle("show");

    // Check if the navbar is visible and adjust the margin and height
    if (nav.classList.contains("show")) {
        heading.style.marginTop = "300px"; 
       content.style.height = "700px"; 

       
        
    } else {
        heading.style.marginTop = "100px";

        content.style.height = "500px"; 
       heading.style.transition = "0.4s linear";
    }
      
       
    
}






