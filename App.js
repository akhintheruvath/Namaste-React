const heading = React.createElement(
   "h1",
   { id: "heading", xyz: "abc" },
   "Hello world from React"
);
console.log("heading: ", heading); // object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);