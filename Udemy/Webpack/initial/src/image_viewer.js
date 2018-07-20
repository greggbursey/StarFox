import "../styles/image_viewer.css";// for non-js files, file extention MUST be included

const image = document.createElement("img");
const dobbyImgSrc = "https://vignette.wikia.nocookie.net/harrypotter/images/1/18/DOBBY2.jpg/revision/latest?cb=20161215055153";
image.src = dobbyImgSrc;

document.body.appendChild(image);