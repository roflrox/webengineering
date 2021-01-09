import {css} from "lit-element";

export const SharedStyles = css`

  
  #Navigatorh2 {
    color: white;
    margin-top: 0;
  }
  #Navigatorheader {
    width: 100%;
    height: 90px;
    background-color: #C34C51;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  .Navigatorul {
    list-style-type: none;
    text-align: left;
    padding-bottom: 2vh;
    margin-bottom: 0;
  }
  #Navigatorheader .Navigatorul .Navigatorli {
    display: inline;
    font-size: 20px;
    font-family: Arial;
    background-color: #67709B;
    border: 3px groove #EDEDED;
    border-radius: 20px;
    padding: 0 2vw;
  }

  .Navigatorul .Navigatorli {
    display: block;
    font-size: 20px;
    font-family: Arial;
    background-color: #67709B;
    border: 3px groove #EDEDED;
    border-radius: 20px;
    margin-bottom: 1em;
    width: 6vw;
    padding: 0 2vw;
  }

  lit-content {
    display: grid;
    min-height: calc(100vh - 90px);
    grid-template-columns: 1.5fr 6fr 1.5fr;
    grid-template-rows: 1fr auto;
    grid-template-areas: "left center right"
                                 "footer footer footer"
  }

  @media screen and (max-width: 1024px) {
    lit-content {
      grid-template-columns: 1fr 3fr;
      grid-template-rows: auto auto auto;
      grid-template-areas: "left center"
                                     "right right"
                                     "footer footer";
    }
  }

  @media screen and (max-width: 640px) {
    lit-content {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto auto;
      grid-template-areas: "left"
                                     "center"
                                     "right"
                                     "footer";
    }
  }

  .Navigatorleft {
    grid-area: left;
  }

  #Navigatorcenter {
    background-color: #649EBA;
    grid-area: center;
    color: white;
  }

  #Navigatorright, .Navigatorleft {
    background-color: #C38081;
    color: white;
    font-size: 25px;
  }

  #Navigatorright {
    grid-area: right;
  }

  lit-footer {
    grid-area: footer;
    width: 100%;
    background-color: black;
    color: white;
    font-size: 25px;
    height: 30px;
  }

  #Navigatorfooter a {
    color: white;
    font-size: 15px;
  }


  #Navigatorfooter a {
    color: white;
    font-size: 15px;
  }

\`

`