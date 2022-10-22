import Icon from './assets/icon.png';
import Heart from './assets/heart.png';
import init from './index.js';

export default function drawHeader() {

    const elFact = (type, idcn) => {
        const element = document.createElement(type);
        element.id = idcn;
        element.className = idcn;
        return element
    }

    const body = document.querySelector('body');

    const navbar = elFact('div', 'navbar');
    const logo = elFact('div', 'logo');

    const logoImage = elFact('img', 'logoImage');
    logoImage.src = Icon;
    logoImage.width = 80;

    const logoText1 = elFact('span', 'logoText1');
    logoText1.textContent = 'Chez';

    const logoImage2 = elFact('img', 'logoImage2');
    logoImage2.src = Heart;
    logoImage2.width = 40;

    const logoText2 = elFact('span', 'logoText2');
    logoText2.textContent = 'Webpack';

    const menu = elFact('div', 'menu');
    const btn1 = elFact('button', 'btn1');
    btn1.textContent = 'Our Menu';

    const btn2 = elFact('button', 'btn2');
    btn2.textContent = 'Impressions';

    const link3 = document.createElement('a');
    link3.href = 'https://webpack.js.org/';
    link3.target = '_blank';

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
