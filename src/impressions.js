import catImage from './assets/cat.jpg';
import catImage2 from './assets/cat2.jpg';
import catImage3 from './assets/cat3.jpg';
import catImage4 from './assets/cat4.jpg';
import catImage5 from './assets/cat5.png';


export default function drawLandingPage() {
    const body = document.querySelector('body');

    const maincontent = document.createElement('div');
    maincontent.id = 'maincontent';
    maincontent.className = 'maincontent';

    const maincontentLeft = document.createElement('div');
    maincontentLeft.id = 'maincontentLeft';
    maincontentLeft.className = 'maincontentLeft';

    const headline = document.createElement('h1');
    headline.innerText = "IMPRESSIONS"
    const welcometext = document.createElement('p');
    welcometext.innerText = "Here you can see some impressions from our premises. Let me in let me out let me in let me out let me in let me out who broke this door anyway poop on floor and watch human clean up, or the best thing in the universe is a cardboard box asdflkjaertvlkjasntvkjn (sits on keyboard). Lay on arms while you're using the keyboard cats go for world domination growl at dogs in my sleep or loved it, hated it, loved it, hated it so i cry and cry and cry unless you pet me, and then maybe i cry just for fun or i just saw other cats inside the house and nobody ask me before using my litter box i am the best. Spit up on light gray carpet instead of adjacent linoleum if it fits i sits cat ass trophy and meow meow mama. Pee on walls it smells like breakfast lick human with sandpaper tongue, oooo! dangly balls!"

    const maincontentRight = document.createElement('div');
    maincontentRight.id = 'maincontentRight';
    maincontentRight.className = 'maincontentRight';

    const image1 = document.createElement('img');
    image1.src = catImage;
    image1.className = 'cat';

    const image2 = document.createElement('img');
    image2.src = catImage2;
    image2.className = 'cat';

    const image3 = document.createElement('img');
    image3.src = catImage3;
    image3.className = 'cat';

    const image4 = document.createElement('img');
    image4.src = catImage4;
    image4.className = 'cat';

    const image5 = document.createElement('img');
    image5.src = catImage5;
    image5.className = 'cat';

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
