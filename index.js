let headingEl = document.getElementById("heading-ell");
let firstBtnEl = document.getElementById("first-button");
let secondBtnEl = document.getElementById("secondBtn");
let thirdBtnEl = document.getElementById("thirdBtn");
let fourthBtnEl = document.getElementById("fourthBtn");
let fifthBtnEl = document.getElementById("fifthBtn");

let imgBtnOneEl = document.getElementById("imgBtnOne");
let imgBtnTwoEl = document.getElementById("imgBtnTwo");
let imgBtnThreeEl = document.getElementById("imgBtnThree");
let imgBtnFourEl = document.getElementById("imgBtnFour");
let imgBtnFifthEl = document.getElementById("imgBtnFifth");

imgBtnOneEl.style.display = "none";
imgBtnTwoEl.style.display = "none";
imgBtnThreeEl.style.display = "none";
imgBtnFourEl.style.display = "none";
imgBtnFifthEl.style.display = "none";

let defMarkEl = document.getElementById("defMark");
let roundMarkEl = document.getElementById("roundMark");
let geoMarkEl = document.getElementById("geoMark");
let EleMarkEl = document.getElementById("eleMark");
let monoMarkEl = document.getElementById("monoMark");

defMarkEl.style.color = "gray";
roundMarkEl.style.color = "gray";
geoMarkEl.style.color = "gray";
EleMarkEl.style.color = "gray";
monoMarkEl.style.color = "gray";

defMarkEl.style.backgroundColor = "white";
roundMarkEl.style.backgroundColor = "white";
geoMarkEl.style.backgroundColor = "white";
EleMarkEl.style.backgroundColor = "white";
monoMarkEl.style.backgroundColor = "white";

firstBtnEl.onclick = function () {
  headingEl.style.fontFamily = "roboto";

  firstBtnEl.style.backgroundColor = "#87ceeb";
  secondBtnEl.style.backgroundColor = "#dcdcdc";
  thirdBtnEl.style.backgroundColor = "#dcdcdc";
  fourthBtnEl.style.backgroundColor = "#dcdcdc";
  fifthBtnEl.style.backgroundColor = "#dcdcdc";

  imgBtnOneEl.style.display = "block";
  imgBtnTwoEl.style.display = "none";
  imgBtnThreeEl.style.display = "none";
  imgBtnFourEl.style.display = "none";
  imgBtnFifthEl.style.display = "none";

  defMarkEl.style.backgroundColor = "skyblue";
  roundMarkEl.style.backgroundColor = "white";
  geoMarkEl.style.backgroundColor = "white";
  EleMarkEl.style.backgroundColor = "white";
  monoMarkEl.style.backgroundColor = "white";
};
secondBtnEl.onclick = function () {
  headingEl.style.fontFamily = "sans-serif";

  firstBtnEl.style.backgroundColor = "#dcdcdc";
  secondBtnEl.style.backgroundColor = "#87ceeb";
  thirdBtnEl.style.backgroundColor = "#dcdcdc";
  fourthBtnEl.style.backgroundColor = "#dcdcdc";
  fifthBtnEl.style.backgroundColor = "#dcdcdc";

  imgBtnOneEl.style.display = "none";
  imgBtnTwoEl.style.display = "block";
  imgBtnThreeEl.style.display = "none";
  imgBtnFourEl.style.display = "none";
  imgBtnFifthEl.style.display = "none";

  defMarkEl.style.backgroundColor = "white";
  roundMarkEl.style.backgroundColor = "skyblue";
  geoMarkEl.style.backgroundColor = "white";
  EleMarkEl.style.backgroundColor = "white";
  monoMarkEl.style.backgroundColor = "white";
};
thirdBtnEl.onclick = function () {
  headingEl.style.fontFamily = "Georgia";

  firstBtnEl.style.backgroundColor = "#dcdcdc";
  secondBtnEl.style.backgroundColor = "#dcdcdc";
  thirdBtnEl.style.backgroundColor = "#87ceeb";
  fourthBtnEl.style.backgroundColor = "#dcdcdc";
  fifthBtnEl.style.backgroundColor = "#dcdcdc";

  imgBtnOneEl.style.display = "none";
  imgBtnTwoEl.style.display = "none";
  imgBtnThreeEl.style.display = "block";
  imgBtnFourEl.style.display = "none";
  imgBtnFifthEl.style.display = "none";

  defMarkEl.style.backgroundColor = "white";
  roundMarkEl.style.backgroundColor = "white";
  geoMarkEl.style.backgroundColor = "skyblue";
  EleMarkEl.style.backgroundColor = "white";
  monoMarkEl.style.backgroundColor = "white";
};
fourthBtnEl.onclick = function () {
  headingEl.style.fontFamily = "Courier new";

  firstBtnEl.style.backgroundColor = "#dcdcdc";
  secondBtnEl.style.backgroundColor = "#dcdcdc";
  thirdBtnEl.style.backgroundColor = "#dcdcdc";
  fourthBtnEl.style.backgroundColor = "#87ceeb";
  fifthBtnEl.style.backgroundColor = "#dcdcdc";

  imgBtnOneEl.style.display = "none";
  imgBtnTwoEl.style.display = "none";
  imgBtnThreeEl.style.display = "none";
  imgBtnFourEl.style.display = "block";
  imgBtnFifthEl.style.display = "none";

  defMarkEl.style.backgroundColor = "white";
  roundMarkEl.style.backgroundColor = "white";
  geoMarkEl.style.backgroundColor = "white";
  EleMarkEl.style.backgroundColor = "skyblue";
  monoMarkEl.style.backgroundColor = "white";
};
fifthBtnEl.onclick = function () {
  headingEl.style.fontFamily = "monospace";

  firstBtnEl.style.backgroundColor = "#dcdcdc";
  secondBtnEl.style.backgroundColor = "#dcdcdc";
  thirdBtnEl.style.backgroundColor = "#dcdcdc";
  fourthBtnEl.style.backgroundColor = "#dcdcdc";
  fifthBtnEl.style.backgroundColor = "#87ceeb";

  imgBtnOneEl.style.display = "none";
  imgBtnTwoEl.style.display = "none";
  imgBtnThreeEl.style.display = "none";
  imgBtnFourEl.style.display = "none";
  imgBtnFifthEl.style.display = "block";

  defMarkEl.style.backgroundColor = "white";
  roundMarkEl.style.backgroundColor = "white";
  geoMarkEl.style.backgroundColor = "white";
  EleMarkEl.style.backgroundColor = "white";
  monoMarkEl.style.backgroundColor = "skyblue";
};
