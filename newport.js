var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";

}
function closemenu() {
    sidemenu.style.right = "-200px";

}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzEDwOQHI0-l9yLrefuSVl7VpskI-3XnQRR11T9ryoUTGrwuARKzeobpxFT6gNAxzW0ew/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent succefully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))

    })


function toggleMenu() {
    const menu = document.querySelector('nav ul');
    const menuBtn = document.getElementById('menu-btn');
    
    menu.classList.toggle('show');
    
   
    if (menu.classList.contains('show')) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
}


document.addEventListener('click', (e) => {
    const menu = document.querySelector('nav ul');
    const menuBtn = document.getElementById('menu-btn');
    
    if (!menu.contains(e.target) && !menuBtn.contains(e.target) && menu.classList.contains('show')) {
        toggleMenu();
    }
});

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('nav ul');
        if (menu.classList.contains('show')) {
            toggleMenu();
        }
    });
});
function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
}
    
