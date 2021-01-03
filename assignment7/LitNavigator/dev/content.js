import {LitElement, html, css} from 'lit-element';

export class LitContent extends LitElement {
    static get styles() {
        return css`
            
        `;
    }



    constructor() {
        super();
    }

    render() {
        return html`
                <slot name="left"></slot>
                <slot name="center"></slot>
                <slot name="right"></slot>
                <slot name="footer"></slot>
    `;
    }
}

window.customElements.define('lit-content', LitContent);