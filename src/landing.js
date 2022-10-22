import webpack from './assets/webpack.png';

export default function drawLandingPage() {
    const body = document.querySelector('body');

    const elFact = (type, idcn) => {
        const element = document.createElement(type);
        element.id = idcn;
        element.className = idcn;
        return element
    }

    const maincontent = elFact('div', 'maincontent');
    const maincontentLeft = elFact('div', 'maincontentLeft');
    const maincontentRight = elFact('div', 'maincontentRight');

    const headline = document.createElement('h1');
    headline.innerText = "Welcome to our Restaurant!"
    const welcometext = document.createElement('p');
    welcometext.innerText = "At its core, webpack is a static module bundler restaurant for modern JavaScript gourmets. When webpack prepares your application, it internally builds a flavourful dependency graph from one or more entry points and then combines every modular flavour your project needs into one or more bundled dishes, which are static assets to be served fresh."

    const webpackImage = document.createElement('img');
    webpackImage.src = webpack;
    webpackImage.className = 'webpack';

    body.appendChild(maincontent);
    maincontent.appendChild(maincontentLeft);
    maincontentLeft.appendChild(headline);
    maincontentLeft.appendChild(welcometext);
    maincontent.appendChild(maincontentRight);
    maincontentRight.appendChild(webpackImage);
}
