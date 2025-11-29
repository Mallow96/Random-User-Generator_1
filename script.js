const greetingView = document.getElementById("greeting-view");
const results = document.getElementById("results");
const profileGrid = document.getElementById("profile-grid");
const footer = document.getElementById("footer");

const btnBack = document.getElementById("btnBack");
const btnAgain = document.getElementById("btnAgain");
const btnMale = document.getElementById("btnMale");
const btnFemale = document.getElementById("btnFemale");
const btnBoth = document.getElementById("btnBoth");

let viewControl = null;

let userQueue = [];
let currentIndex = 0;

//轉頁面
const exitGreeting = () => {
  greetingView.classList.add("hidden");

  results.classList.remove("hidden");

  footer.classList.remove("absolute", "bottom-0");

  fetchUsers();
};

const returnGreeting = () => {
  greetingView.classList.remove("hidden");

  results.classList.add("hidden");

  footer.classList.add("absolute", "bottom-0");

  viewControl = null;
};

//按下性別按鈕
btnMale.addEventListener("click", () => {
  viewControl = "male";
  exitGreeting();
});

btnFemale.addEventListener("click", () => {
  viewControl = "female";
  exitGreeting();
});

btnBoth.addEventListener("click", () => {
  viewControl = "both";
  exitGreeting();
});

//按下返回按鈕
btnBack.addEventListener("click", () => {
  profileGrid.innerHTML = "";

  switch (viewControl) {
    case "male":
      returnGreeting();
      break;

    case "female":
      returnGreeting();
      break;

    case "both":
      returnGreeting();
      break;

    default:
      console.error("Page Switch Error");
  }
});

//按下重新載入按鈕
btnAgain.addEventListener("click", () => {
  userQueue = [];
  currentIndex = 0;

  fetchUsers();
});

//抓資料
const fetchUsers = async () => {
  let apiURL = "https://randomuser.me/api/?results=24";

  if (viewControl == "male" || viewControl == "female") {
    apiURL += `&gender=${viewControl}`;
  } else if (viewControl == "both") {
    apiURL = "https://randomuser.me/api/?results=24";
  } else {
    console.error("Gender Select Error");
  }

  try {
    const response = await fetch(apiURL);

    const data = await response.json();
    userQueue = data.results;
    currentIndex = 0;

    console.log(viewControl);
    console.log(userQueue);
  } catch (error) {
    console.error("資料讀取失敗", error);
  } finally {
    renderUserProfile();
  }
};

//顯示使用者檔案
const renderUserProfile = () => {
  profileGrid.innerHTML = "";

  if (userQueue.length == 0) {
    console.error("Fetch Profile Error");
  } else {
    for (const user of userQueue) {
      console.log(user);

      const newCard = document.createElement("div");
      newCard.classList.add(
        "border",
        "border-pink-200",
        "px-4",
        "py-2",
        "rounded-md",
        "flex",
        "flex-col",
        "jusitfy-center",
        "items-center"
      );

      if (viewControl == "both") {
        newCard.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}" class="w-36">
      <p class="text-lg font-bold">${user.name.first} ${user.name.last}</p>

      <div class="flex flex-col w-full">
        <p class="mt-2">
          <span class="font-bold">Age:</span>
          ${user.dob.age}
        </p>
        <p class="mt-1">
          <span class="font-bold">Gender:</span>
          ${user.gender}
         </p>
        <p class="mt-1">
          <span class="font-bold">Location: </span>
          ${user.location.city}, ${user.location.country}
        </p>
      </div>
      `;
      } else {
        newCard.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}" class="w-36">
      <p class="text-lg font-bold">${user.name.first} ${user.name.last}</p>

      <div class="flex flex-col w-full">
        <p class="mt-2"><span class="font-bold">Age:</span> ${user.dob.age}</p>
        <p class="mt-1">
          <span class="font-bold">Location: </span>
      ${user.location.city}, ${user.location.country}
        </p>
      </div>
      `;
      }

      profileGrid.appendChild(newCard);
    }
  }
};
