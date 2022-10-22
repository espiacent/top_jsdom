export default function drawFooter() {
    const body = document.querySelector('body');
    const footer = document.createElement('div');
    footer.className = 'footer';

    const footertext = document.createElement('span');
    footertext.textContent = "made with webpack and a pinch of salt";

    body.appendChild(footer);
    footer.appendChild(footertext);
}
