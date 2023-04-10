import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1 className="heading">
        React using JSX 🚀
    </h1>
);


const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h2>Hello from Heading Component</h2>
    </div>
    
);
    
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);