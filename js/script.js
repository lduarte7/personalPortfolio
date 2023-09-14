"use strict";

// light and darkmode

const /** node element */ $themeBtn = document.querySelector("[data-theme-btn");
const /** node element */ $HTML = document.documentElement;
let /** boolean | string */ isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

if (sessionStorage.getItem("theme")) {
  $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
  $HTML.dataset.theme = isDark ? "dark" : "light";
  sessionStorage.setItem("theme", $HTML.dataset.theme);
}

const changeTheme = () => {

  $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
  sessionStorage.setItem("theme", $HTML.dataset.theme);
}

$themeBtn.addEventListener("click", changeTheme);

// Tab Logic

const /** {nodelist} */ $tabBtn = document.querySelectorAll("[data-tab-btn]");
let /** {nodelement} */ [lastActiveTab] = document.querySelectorAll("[data-tab-content]");
let /** {nodelement} */ [lastActiveTabBtn] = $tabBtn;

$tabBtn.forEach(item => {
  item.addEventListener("click", function(){
    lastActiveTab.classList.remove("active");
    lastActiveTabBtn.classList.remove("active");

    const /** {nodeElement} */ $tabContent = 
    document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);
    $tabContent.classList.add("active");
    this.classList.add("active");

    lastActiveTab = $tabContent;
    lastActiveTabBtn = this;

  });
});


