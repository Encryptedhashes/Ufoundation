// document.addEventListener("DOMContentLoaded", function() {
//     const navToggle = document.getElementById("nav-toggle");
//     const navMenu = document.getElementById("nav-menu");
//     const closeNav = document.getElementById("close-nav-btn");

//     if (navToggle && navMenu) {
//         navToggle.addEventListener("click", function() {
//             if (navMenu.classList.contains("close")) {
//                 return
//             }
//             if (navMenu.classList.contains("open")) {
//                 navMenu.classList.add("close");
//                 setTimeout(() => {
//                     navMenu.classList.remove("open");
//                     navMenu.classList.remove("close");
//                 }, 3000);
//             } else {
//                 navMenu.classList.add("open");
//             }
//             navMenu
//                 .querySelectorAll("a")
//                 .forEach(function(link) {
//                     link.addEventListener("click", function() {
//                         navMenu.classList.remove("open");
//                         setTimeout(() => {
//                             navMenu.classList.remove("open");
//                             navMenu.classList.remove("close");
//                         }, 3000);
//                     });
//                 })
//         });

        
//         window.addEventListener("resize", function() {
//             if (window.innerWidth > 480) {
//                 navMenu.classList.remove("open");
//             }
//         });
//     } else {
//         console.error("nav-toggle or nav-menu element not found");
//     }
//     if (closeNav && navMenu) {
//         closeNav.addEventListener("click", function() {
//             if (navMenu.classList.contains("open")) {
//                 navMenu.classList.add("close");
//                 setTimeout(() => {
//                     navMenu.classList.remove("open");
//                     navMenu.classList.remove("closing");
//                 }, 3000);
//             }
//         });
//     }
// });


document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const closeNav = document.getElementById("close-nav-btn");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", function() {
            if (navMenu.classList.contains("open")) {
                // If the menu is already open, close it
                navMenu.classList.remove("open");
                navMenu.classList.add("close");
            } else {
                // If the menu is closed, open it
                navMenu.classList.remove("close");
                navMenu.classList.add("open");
            }
        });

        closeNav.addEventListener("click", function() {
            if (navMenu.classList.contains("open")) {
                // If the menu is open, close it
                navMenu.classList.add("close");
                navMenu.classList.remove("open");
            }
        });

        window.addEventListener("resize", function() {
            if (window.innerWidth > 480) {
                navMenu.classList.remove("open");
                navMenu.classList.add("close");
            }
        });
    } else {
        console.error("nav-toggle or nav-menu element not found");
    }
});