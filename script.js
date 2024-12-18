const hamburger = document.getElementById("js-btnHamburger");
const nav = document.querySelector(".gnav");

// クリックイベントを追加
hamburger.addEventListener("click", function () {
    // ハンバーガーボタンとナビゲーションの_openクラスを切り替え
    hamburger.classList.toggle("_open");
    nav.classList.toggle("_open");
});


//Swiper.jsの初期化
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    centeredSlides: true,
   
    breakpoints:{
        1024:{
            slidesPerView: 1.5,
            spaceBetween: 15,
            centeredSlides : true
            },
        768:{
        slidesPerView: 1.2,
        spaceBetween: 10,
        centeredSlides : true
        }
    },
    slidesPerView: 1,
    spaceBetween: 5,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


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