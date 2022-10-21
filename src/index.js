import './styles/main.scss';
import header from './header.js';
import landing from './landing.js';
import footer from './footer.js';
import impressions from './impressions.js';
import ourmenu from './ourmenu.js';

window.addEventListener('load', initPage);

export default function initPage(page) {
    if (page == 'ourMenu') {
        header();
        ourmenu();
        footer();
    } else if (page == 'impressions') {
        header();
        impressions();
        footer();
    } else {
        header();
        landing();
        footer();
    }
}
