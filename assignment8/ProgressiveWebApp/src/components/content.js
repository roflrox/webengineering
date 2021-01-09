import {LitElement, html, css} from 'lit-element';
import {SharedStyles} from "./shared-styles";

export class LitContent extends LitElement {
    static get styles() {
        return [SharedStyles];
    }



    constructor() {
        super();
    }



    render() {
        return html`
            <div  class="Navigatorleft">
                <ul class="Navigatorul" id="Navigatorleftul">

                </ul>
            </div>

            <div  id="Navigatorcenter">

            </div>

            <div id="Navigatorright">

            </div>

            <lit-footer></lit-footer>
    `;
    }
}

window.customElements.define('lit-content', LitContent);