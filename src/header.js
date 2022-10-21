import Icon from './assets/icon.png';
import Heart from './assets/heart.png';
import init from './index.js';

export default function drawHeader() {
    const body = document.querySelector('body');

    const navbar = document.createElement('div');
    navbar.id = 'navbar';
    navbar.className = 'navbar';

    const logo = document.createElement('div');
    logo.id = 'logo';
    logo.className = 'logo';

    const logoImage = new Image(80, 80);
    logoImage.src = Icon;
    logoImage.id = 'logoImage';
    logoImage.className = 'logoImage';

    const logoText1 = document.createElement('span');
    logoText1.textContent = 'Chez';
    logoText1.className = 'logoText1';

    const logoImage2 = new Image(40, 40);
    logoImage2.src = Heart;
    logoImage2.id = 'logoImage2';
    logoImage2.className = 'logoImage2';

    const logoText2 = document.createElement('span');
    logoText2.textContent = 'Webpack';
    logoText2.className = 'logoText2';

    const menu = document.createElement('div');
    menu.id = 'menu';
    menu.className = 'menu';

    const btn1 = document.createElement('button');
    btn1.textContent = 'Our Menu';
    btn1.id = 'btn1';

    const btn2 = document.createElement('button');
    btn2.textContent = 'Impressions';
    btn2.id = 'btn2';

    const link3 = document.createElement('a');
    link3.href = 'https://webpack.js.org/';

    var btn3 = document.createElement('button');
    btn3.textContent = "Contact";

    body.appendChild(navbar);
    navbar.appendChild(logo);
    logo.appendChild(logoImage);
    logo.appendChild(logoText1);
    logo.appendChild(logoImage2);
    logo.appendChild(logoText2);
    navbar.appendChild(menu);
    menu.appendChild(btn1);
    menu.appendChild(btn2);
    menu.appendChild(link3);
    link3.appendChild(btn3);


    btn1.onclick = ourMenu;

    btn2.onclick = impressions;

    const logoLink = document.getElementById('logoImage');
    logoLink.style.cursor = 'pointer';

    logoLink.addEventListener('click', () => {
        const body = document.querySelector('body');
        body.innerHTML = '';
        init();
    });

    function ourMenu() {
        const body = document.querySelector('body');
        body.innerHTML = '';
        init('ourMenu');
    }


    function impressions() {
        const body = document.querySelector('body');
        body.innerHTML = '';
        init('impressions');
    }
};
