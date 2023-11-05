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
    const informationText = document.querySelector('.information h1');
    informationText.textContent = 'Bizimle iletişime geç!';
    const contectItems = document.querySelectorAll('.info');
    contectItems.forEach(item => {
        const h2 = item.querySelector('h2');
        const p = item.querySelector('p');
        h2.textContent = 'Ad-Soyad : XXXX XXXX';
        p.textContent = 'Telefon Numarası : XXXXXXXXX';
    });
    const imageSources = {
        "image1": "https://i1.sndcdn.com/avatars-LrV8voHTqB32jnW9-HzmABw-t500x500.jpg",
        "image2": "https://i1.sndcdn.com/avatars-LrV8voHTqB32jnW9-HzmABw-t500x500.jpg",
        "image3": "https://i1.sndcdn.com/avatars-LrV8voHTqB32jnW9-HzmABw-t500x500.jpg"
    };

    for (const className in imageSources) {
        const imgElement = document.querySelector(`.${className}`);
        if (imgElement) {
            imgElement.src = imageSources[className];
        }}
        
});