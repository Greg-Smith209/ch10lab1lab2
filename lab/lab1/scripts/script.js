/*
Gregory Smith
Script.js
11/18/2022
*/
// Hamburger menu function
funtion hamburger(){
  var menu = document.getElementById("menu-links");
     if (menu.style.display === "block") {
       menu.style.display = "none";
     } else {
       menu.style.display = "block";
     }
}
