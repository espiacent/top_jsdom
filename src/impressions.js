import catImage from './assets/cat.jpg';
import catImage2 from './assets/cat2.jpg';
import catImage3 from './assets/cat3.jpg';
import catImage4 from './assets/cat4.jpg';
import catImage5 from './assets/cat5.png';


export default function drawLandingPage() {

    const body = document.querySelector('body');

    const elFact = (type, idcn) => {
        const element = document.createElement(type);
        element.id = idcn;
        element.className = idcn;
        return element
    }

    const catImgFact = (src) => {
        const element = document.createElement('img');
        element.src = src;
        element.id = 'cat';
        element.className = 'cat';
        return element
    }

    const maincontent = elFact('div', 'maincontent');
    const maincontentLeft = elFact('div', 'maincontentLeft');
    const maincontentRight = elFact('div', 'maincontentRight');

    const headline = document.createElement('h1');
    headline.innerText = "IMPRESSIONS"
    const welcometext = document.createElement('p');
    welcometext.innerText = "Here you can see some impressions from our premises. Let me in let me out let me in let me out let me in let me out who broke this door anyway poop on floor and watch human clean up, or the best thing in the universe is a cardboard box asdflkjaertvlkjasntvkjn (sits on keyboard). Lay on arms while you're using the keyboard cats go for world domination growl at dogs in my sleep or loved it, hated it, loved it, hated it so i cry and cry and cry unless you pet me, and then maybe i cry just for fun or i just saw other cats inside the house and nobody ask me before using my litter box i am the best. Spit up on light gray carpet instead of adjacent linoleum if it fits i sits cat ass trophy and meow meow mama. Pee on walls it smells like breakfast lick human with sandpaper tongue, oooo! dangly balls!"

    const image1 = catImgFact(catImage);
    const image2 = catImgFact(catImage2);
    const image3 = catImgFact(catImage3);
    const image4 = catImgFact(catImage4);
    const image5 = catImgFact(catImage5);

    body.appendChild(maincontent);
    maincontent.appendChild(maincontentLeft);
    maincontentLeft.appendChild(headline);
    maincontentLeft.appendChild(welcometext);
    maincontent.appendChild(maincontentRight);
    maincontentRight.appendChild(image1);
    maincontentRight.appendChild(image2);
    // maincontentRight.appendChild(image3);
    maincontentRight.appendChild(image4);
    maincontentRight.appendChild(image5);

}
