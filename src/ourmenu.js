import background from './assets/webpack.png';

export default function ourMenu() {
    const body = document.querySelector('body');

    const maincontent = document.createElement('div');
    maincontent.id = 'maincontent';
    maincontent.className = 'maincontent';

    const maincontentLeft = document.createElement('div');
    maincontentLeft.id = 'maincontentLeft';
    maincontentLeft.className = 'maincontentLeft';

    const headline = document.createElement('h1');
    headline.innerText = "OUR MENU"
    const welcometext = document.createElement('p');
    welcometext.innerText = "Here you can find our current menu. Tart chocolate bear claw lemon drops halvah soufflé fruitcake. Chocolate cake pudding oat cake pastry sugar plum jujubes cake cake pudding. Shortbread candy macaroon oat cake lemon drops cake marshmallow danish. Toffee tart marzipan toffee shortbread lollipop bear claw. Wafer soufflé caramels oat cake ice cream sugar plum. Sugar plum lemon drops icing jujubes oat cake."

    const maincontentRight = document.createElement('div');
    maincontentRight.id = 'maincontentRight';
    maincontentRight.className = 'maincontentRight';

    const menucard1 = document.createElement('div');
    menucard1.id = 'menucard1';
    menucard1.innerHTML = '<h2><u>Loaders</u></h2>Loaders provide a way to flavour the output through preprocessing functions. Gourmets now have more flexibility to include fine-grained salt such as compression, packaging, language translations and more.'

    const menucard2 = document.createElement('div');
    menucard2.className = 'menucard';
    menucard2.innerHTML = '<h2><u>Plugins</u></h2>Plugins are the protein of webpack. Webpack itself is cooked on the same plugin system that you use in your webpack configuration! They also are served for the purpose of doing anything else that a stove cannot do. Webpack provides many such flavours out of the box.'

    const menucard3 = document.createElement('div');
    menucard3.className = 'menucard';
    menucard3.innerHTML = '<h2><u>Modules</u></h2>Each modular dish has a smaller surface area than a full dish, making verification, debugging, and testing super tasty. Well-written modules provide solid flavour and encapsulation boundaries, so that each module has a coherent design and a clear taste within the overall palette.'

    const menucard4 = document.createElement('div');
    menucard4.className = 'menucard';
    menucard4.innerHTML = '<h2><u>Targets</u></h2>Because JavaScript can be sautéd for both server and browser, webpack offers multiple cooking targets that you can boil in your webpack configuration. Warning: The webpack target property is not to be confused with the taste of libraryTarget property. For more information see our preparation guide on the output property.'

    body.appendChild(maincontent);
    maincontent.appendChild(maincontentLeft);
    maincontentLeft.appendChild(headline);
    maincontentLeft.appendChild(welcometext);
    maincontent.appendChild(maincontentRight);
    maincontentRight.appendChild(menucard1);
    maincontentRight.appendChild(menucard2);
    maincontentRight.appendChild(menucard3);
    maincontentRight.appendChild(menucard4);
}
