import "../styles/image_viewer.css";// for non-js files, file extention MUST be included
import "../assets/beautiful-blur-bright-326055.jpg";
import "../assets/bench-cascade-creek-355321.jpg";
import "../assets/bright-daylight-environment-240040.jpg";
import "../assets/cold-dark-eerie-414144.jpg";
import foggyForrest from "../assets/fog-foggy-forest-4827.jpg";

const dobbyImgSrc = "https://vignette.wikia.nocookie.net/harrypotter/images/1/18/DOBBY2.jpg/revision/latest?cb=20161215055153";

export default (src) => {
    const image = document.createElement("img");
    image.src = src;
    document.body.appendChild(image);
}
