const greetingView = document.getElementById("greeting-view");
const maleView = document.getElementById("male-view");
const femaleView = document.getElementById("female-view");
const bothView = document.getElementById("both-view");

const btnBack = document.getElementById("btnBack");
const btnMale = document.getElementById("btnMale");
const btnFemale = document.getElementById("btnFemale");
const btnBoth = document.getElementById("btnBoth");

let viewControl = null;

const exitGreeting = () => {
  greetingView.classList.add("hidden");
  btnBack.classList.remove("hidden");
};

const returnGreeting = () => {
  greetingView.classList.remove("hidden");
  btnBack.classList.add("hidden");
  viewControl = null;
};

btnMale.addEventListener("click", () => {
  viewControl = "male";
  exitGreeting();
  maleView.classList.remove("hidden");
});

btnFemale.addEventListener("click", () => {
  viewControl = "female";
  exitGreeting();
  femaleView.classList.remove("hidden");
});

btnBoth.addEventListener("click", () => {
  viewControl = "both";
  exitGreeting();
  bothView.classList.remove("hidden");
});

btnBack.addEventListener("click", () => {
  switch (viewControl) {
    case "male":
      maleView.classList.add("hidden");
      returnGreeting();
      break;

    case "female":
      femaleView.classList.add("hidden");
      returnGreeting();
      break;

    case "both":
      bothView.classList.add("hidden");
      returnGreeting();
      break;

    default:
      console.log("Page Switch Error");
  }
});
