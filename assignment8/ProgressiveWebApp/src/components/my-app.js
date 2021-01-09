/**
 @license
 Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { LitElement, html, css } from 'lit-element';
import {SharedStyles} from "./shared-styles";

// These are the elements needed by this element.


class MyApp extends LitElement {


    static get styles() {
        return [SharedStyles];
    }

    render() {
        // Anything that's related to rendering should be done in here.
        return html`
      <lit-header></lit-header>

      <lit-content>

      </lit-content>


        `;
    }

    constructor() {
        super();

    }

    firstUpdated() {
        import('../components/content')
        import('../components/footer')
        import('../components/header')
        import('../components/shared-styles')
    }


}

window.customElements.define('my-app', MyApp);
