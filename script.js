// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let scrollY = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (scrollY >= offset && scrollY < offset + height) {

            // active navbar links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            let currentLink = document.querySelector(
                'header nav a[href*="' + id + '"]'
            );
            if (currentLink) {
                currentLink.classList.add('active');
            }

            // active sections for animation on scroll
            sec.classList.add('show-animate');
        } 
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', scrollY > 100);

    // remove toggle icon and navbar when scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle(
        'show-animate',
        window.innerHeight + scrollY >= document.documentElement.scrollHeight
    );
};

    let images = [];
    let currentIndex = 0;

    function openGallery(imageArray) {
        images = imageArray;
        currentIndex = 0;
        document.getElementById("galleryModal").style.display = "flex";
        updateImage();
    }

    function closeGallery() {
        document.getElementById("galleryModal").style.display = "none";
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    }

    function updateImage() {
        document.getElementById("galleryImage").src = images[currentIndex];
    }

function openPricing() {
    document.getElementById("pricingModal").style.display = "flex";
}

function closePricing() {
    document.getElementById("pricingModal").style.display = "none";
}

function openPricing1() {
    document.getElementById("pricingModal1").style.display = "flex";
}

function closePricing1() {
    document.getElementById("pricingModal1").style.display = "none";
}

function openPricing2() {
    document.getElementById("pricingModal2").style.display = "flex";
}

function closePricing2() {
    document.getElementById("pricingModal2").style.display = "none";
}

function openPricing3() {
    document.getElementById("presetup1").style.display = "flex";
}

function closePricing3() {
    document.getElementById("presetup1").style.display = "none";
}

function openPricing4() {
    document.getElementById("presetup2").style.display = "flex";
}

function closePricing4() {
    document.getElementById("presetup2").style.display = "none";
}


