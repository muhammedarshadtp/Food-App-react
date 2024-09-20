import React from "react";
import ReactDOM from "react-dom/client"; 

// React.createElement => object => HTMLElement(render)

const heading = React.createElement("h1",{id:"heading"},"Hello Arshad")

console.log(heading);

//  JXS - is not HTML in js[HTML-like or XML-like syntax]

// JXS (transpiled before it reaches the js) - parcel - Babel
      

const jsxheading = <h1 id="heading">This is  JSX </h1>

console.log(jsxheading);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(jsxheading)