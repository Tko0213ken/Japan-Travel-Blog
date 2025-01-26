const hamburger = document.getElementById("js-btnHamburger");
const nav = document.querySelector(".gnav");

// クリックイベントを追加
hamburger.addEventListener("click", function () {
  // ハンバーガーボタンとナビゲーションの_openクラスを切り替え
  hamburger.classList.toggle("_open");
  nav.classList.toggle("_open");
});

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

// document.addEventListener("DOMContentLoaded", () => {
//   const ppNo1Element = document.querySelector("#base-No1hight");
//   const ppNo1Hight = ppNo1Element.getBoundingClientRect().height;
//   const rowGap = 16;
//   const ppNo2to4 = ppNo1Hight - rowGap * 2;
//   document.documentElement.style.setProperty("--No1-height", `${ppNo2to4}px`);
//   console.log(`No1:${ppNo1Hight}, No2~4:${ppNo2to4} ,割3:${ppNo2to4 / 3}`);
// });

function updateHeights() {
  const ppNo1Element = document.querySelector("#base-imgHight");
  const ppNo1Hight = ppNo1Element.getBoundingClientRect().height;
  const rowGap = 0;
  const ppNo2to4 = ppNo1Hight - rowGap * 2;
  document.documentElement.style.setProperty("--img-height", `${ppNo2to4}px`);
  console.log(`No1の高さ: ${ppNo1Hight}, No2~4の高さ: ${ppNo2to4}`);
}
document.addEventListener("DOMContentLoaded", updateHeights);
window.addEventListener("resize", updateHeights);

//   // スクロール前のスクロール位置を保持する変数
// let lastScrollPosition = window.scrollY;
// // 現在のスクロール位置を保持する変数
// let currentScrollPosition = 0;
// // requestAnimationFrameの実行中かどうかを保持する変数。過剰な発火を防ぐ
// let ticking = false;

// function isGnavOpen() {
//     return document.querySelector('.gnav').classList.contains('_open');
// }

// function scrollUpDown(scrollPos, lastScrollPos) {
//     if (isGnavOpen()) {
//         return;
//     }
//     // 現在のスクロール位置が前回のスクロール位置よりも大きい場合、スクロールダウンを検知
//     if (scrollPos > lastScrollPos) {
//         // スクロールダウン
//         document.body.classList.remove('scroll-up');
//         document.body.classList.add('scroll-down');
//         console.log('SCROLLING DOWN: scrollPos: ',scrollPos,"lastScrollPos", lastScrollPos)
//     } else {
//         document.body.classList.add('scroll-up');
//         document.body.classList.remove('scroll-down');
//         console.log('SCROLLING UP: scrollPos: ',scrollPos,"lastScrollPos", lastScrollPos)
//     }
// }

// // ウインドウのスクロールイベントを監視
// window.addEventListener('scroll', function (e) {
//     // スクロールイベントが発火したら、現在のスクロール位置を保持する
//     currentScrollPosition = window.scrollY;

//     //スクロールイベントの過剰な実行を制御します。
//     if (!ticking) {
//         // requestAnimationFrameを使って、scrollUpDown関数を実行する
//         window.requestAnimationFrame(function () {
//             scrollUpDown(currentScrollPosition, lastScrollPosition);
//             lastScrollPosition = currentScrollPosition;
//             ticking = false;
//         });

//         ticking = true;
//     }
// });
