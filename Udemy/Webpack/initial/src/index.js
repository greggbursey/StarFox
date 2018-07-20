// //const sum = require("./sum");// CommonJS way
// import sum from "./sum";
// import "./image_viewer";// because "image_viewer" does not export any code

// const total = sum(10, 5);
// console.log(total);

const button = document.createElement("button");
button.innerText = "Click Me";
button.onclick = () => {
    System.import("./image_viewer")// reaches out to server
        .then(module => {
            module.default();
        });
};

document.body.appendChild(button);
