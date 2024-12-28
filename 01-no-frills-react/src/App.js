// // Writing my first react app experience 😊
// const App = () => {
//   return React.createElement(
//     "div",
//     {}, // or you can put Null as well.
//     React.createElement("h1", {}, "Hey, this is my first react app!")
//   );
// };

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(React.createElement(App));

// // React is all about making components.
// // We are staying, Inside root, stamp the "App" component once (instance of component) and we can do that
// // as many times we want to.

// // -----------------------------------------------------------------------

// // Version 1.0
// const Pizza = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "The Veg Pizza"),
//     React.createElement("p", {}, "Onion, Bell Pepper, Tomatos, Cheese"),
//   ]);
// };

// // Version 2.0
const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "MyPizzaShop"),
    // React.createElement(Pizza, {}),
    React.createElement(Pizza, {
      name: "The Veg Pizza",
      description: "Onion, Bell Pepper, Tomatos, Cheese",
    }),
    React.createElement(Pizza, {
      name: "The Seven Cheesy Pizza",
      description: "Seven different types of cheese.",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
