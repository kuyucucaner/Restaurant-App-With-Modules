document.addEventListener("DOMContentLoaded", function () {
    // "Hakkımızda" bağlantısına tıklama işlevselliği eklemek
    const aboutLink = document.querySelector('.nav[href="about.html"]');
    if (aboutLink) {
        aboutLink.addEventListener('click', function (event) {
            event.preventDefault(); // Sayfa yeniden yüklemesini engelle
            window.location.href = 'about.html'; // "about.html" sayfasına yönlendir
        });
    }

    // "Menu" bağlantısına tıklama işlevselliği eklemek
    const menuLink = document.querySelector('.nav[href="menu.html"]');
    if (menuLink) {
        menuLink.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = 'menu.html';
        });
    }

    // "İletişim" bağlantısına tıklama işlevselliği eklemek
    const contactLink = document.querySelector('.nav[href="contact.html"]');
    if (contactLink) {
        contactLink.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = 'contact.html';
        });
    }
    const welcomeText = document.querySelector('.welcome-text h1');
     welcomeText.textContent = 'Welcome To YamYamPizza';
});

