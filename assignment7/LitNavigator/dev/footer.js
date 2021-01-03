import {LitElement, html} from 'lit-element';

export class LitFooter extends LitElement {


    createRenderRoot() {
        return this;
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <footer id="Navigatorfooter">
                Footer: <a href="Sitemap.html">Sitemap</a> <a href="Sitemap.html">Home</a> <a href="Sitemap.html">News</a> <a href="Sitemap.html">Contact</a> <a href="Sitemap.html">About</a>
            </footer>
    `;
    }
}

window.customElements.define('lit-footer', LitFooter);