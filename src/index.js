import "./scss/main.scss";
import "./js/module-a";
import "./js/module-b";
import firstImage from "../src/images/bell.png";
import secondImage from "../src/images/bell.svg";
import thirdImage from "../src/images/logos.png";

const first = document.getElementById("firstImage");
const second = document.getElementById("secondImage");
const third = document.getElementById("thirdImage");
first.src = firstImage;
second.src = secondImage;
third.src = thirdImage;
