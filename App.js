const heading = React.createElement("h1", {}, "Hello react!!!!!!!!!");
const heading2 = React.createElement("h1", {}, "Hello react 2 !!!!!!!!!");

const root = ReactDOM.createRoot(document.getElementById("contianer"));

root.render(heading);
root.render(heading2);