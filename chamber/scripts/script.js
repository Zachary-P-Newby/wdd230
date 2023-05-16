function toggleMenu (){
    document.getElementById("navBurger").classList.toggle("open");
    document.getElementById("navMenu").classList.toggle("open");
}

const hamburger = document.getElementById("navBurger");
hamburger.onclick = toggleMenu

let currentDate = new Date;
let weekDay = currentDate.getDay();
let month = currentDate.getMonth();

week = Array(null, "Monday", "Tuesday","Wednesday","Thursday", "Friday", "Saturday", "Sunday");

months = Array("January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

document.getElementById("date").textContent = `${week[weekDay]}, ${currentDate.getDate()} ${months[month]} ${currentDate.getFullYear()}`;









let lastmod = document.lastModified;

document.getElementById("last_mod_date").innerHTML = lastmod;