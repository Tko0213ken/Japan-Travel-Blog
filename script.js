const headerSearch = document.querySelector(".serch-icon");
const searchWrapper = document.querySelector(".serch__wrapper");
const closeElements = document.querySelectorAll(".close-btn, .serch__bg");

// フェードインの処理
headerSearch.addEventListener("click", function () {
  console.log("click");
  searchWrapper.classList.add("active");
});

// フェードアウトの処理
closeElements.forEach((element) => {
  element.addEventListener("click", function () {
    searchWrapper.classList.remove("active");
  });
});

// function updateHeights() {
//   const ppNo1Element = document.querySelector("#base-imgHight");
//   const ppNo1Hight = ppNo1Element.getBoundingClientRect().height;
//   const rowGap = 0;
//   const ppNo2to4 = ppNo1Hight - rowGap * 2;
//   document.documentElement.style.setProperty("--img-height", `${ppNo2to4}px`);
//   console.log(`No1の高さ: ${ppNo1Hight}, No2~4の高さ: ${ppNo2to4}`);
// }
// document.addEventListener("DOMContentLoaded", updateHeights);
// window.addEventListener("resize", updateHeights);

// 画面幅1024px時、ヘッダー
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("js-btnHamburger");
  const gnav = document.querySelector(".gnav");
  const overlay = document.querySelector(".gnav-overlay");
  const body = document.body;

  function toggleMenu() {
    if (gnav.classList.contains("_open")) {
      gnav.classList.remove("_open");
      overlay.classList.remove("_open");
      body.classList.remove("no-scroll");
      hamburger.classList.remove("_open");
    } else {
      gnav.classList.add("_open");
      overlay.classList.add("_open");
      body.classList.add("no-scroll");
      hamburger.classList.add("_open");
    }
  }
  hamburger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);

  // 画面幅1024px時、ヘッダーのアコーディオン開閉処理
  const accordionToggles = document.querySelectorAll(
    ".gnav__link--has-dropdown"
  );

  accordionToggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      // e.preventDefault();

      const dropdown = toggle.querySelector(".dropdown");

      if (dropdown.classList.contains("_open")) {
        dropdown.classList.remove("_open");
      } else {
        document.querySelectorAll(".dropdown._open").forEach((openDropdown) => {
          openDropdown.classList.remove("_open");
        });

        dropdown.classList.add("_open");
      }
    });
  });
});
