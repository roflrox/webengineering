import {LitElement, html } from 'lit-element';

export class LitHeader extends LitElement {
    constructor() {
        super();
    }

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <header id="Navigatorheader">
                <h2 id="Navigatorh2">Header</h2>
                <ul class="Navigatorul" id="Navigatorulheader">
                </ul>
            </header>
    `;
    }
}

window.customElements.define('lit-header', LitHeader);