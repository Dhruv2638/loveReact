const heading = React.createElement(
  "h1",
  {
    // This object is for parameters
    id: "title",
  },
  "This is first React love site!"
);

const heading2 = React.createElement(
  "h2",
  {
    // This object is for parameters
    id: "title",
  },
  "This is first React love website!"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
