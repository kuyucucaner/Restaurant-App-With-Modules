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
    const menuText = document.querySelector('.information h1');
    menuText.textContent = 'Menu';
    
    const menuItems = document.querySelectorAll('.info');
    menuItems.forEach(item => {
        const h2 = item.querySelector('h2');
        const p = item.querySelector('p');
        h2.textContent = 'Menu Adı: XXXXXXXX';
        p.textContent = 'Fiyatı: XXX';
    });

    const imageSources = {
        "image1": "https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg",
        "image2": "https://iasbh.tmgrup.com.tr/635616/821/464/0/53/724/462?u=https://isbh.tmgrup.com.tr/sbh/2021/09/27/hamburger-nerenin-yemegi-hamburger-hangi-ulkenin-yemegidir-1632722854093.jpg",
        "image3": "https://hips.hearstapps.com/hmg-prod/images/delish-230502-06-fried-chicken-0887-eb-index-645ec6fb0ca64.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*"
    };

    for (const className in imageSources) {
        const imgElement = document.querySelector(`.${className}`);
        if (imgElement) {
            imgElement.src = imageSources[className];
        }}

});