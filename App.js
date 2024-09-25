import React from "react";
import ReactDOM from "react-dom/client"; 

//JXS =>Babal transpiles it to React.createElement => React.createElement-JS object => HTMLElement(render)

const heading = React.createElement("h1",{id:"heading"},"Hello Arshad")

console.log(heading);

//  JXS - is not HTML in js[HTML-like or XML-like syntax]

// JXS (transpiled before it reaches the js) - parcel - Babel
      
// React Elament 
const Jsxheading = () => (
    <h1 className="head" tabIndex="5">
    This is  JSX and using Babal 
    </h1>
)


// React Functional component

const FunctionalComponent = () => (
    <div id="container">
        <Jsxheading/>
        <h1 className="heading">Hello IT'S Arshad HERE...</h1>
    </div>
)

console.log(Jsxheading);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<FunctionalComponent/>)