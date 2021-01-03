import {LitElement, html, css} from 'lit-element';

export class LitMenue extends LitElement {
    static get styles() {
        return css`
          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #333;
          }

          ::slotted(*) {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #333;
          }
          
          ul ::slotted(li) {
            float: left;
          }
    `;
    }

    static get properties() {
        return {
            /**
             * The name to say "Hello" to.
             */
            name: {type: String},

            /**
             * The number of times the button has been clicked.
             */
            count: {type: Number},
        };
    }

    constructor() {
        super();
        this.name = 'World';
        this.count = 0;
    }

    render() {
        return html`
            <ul>
                <slot name="title"></slot>
            </ul>
    `;
    }
}

window.customElements.define('lit-menu', LitMenue);