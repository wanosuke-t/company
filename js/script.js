// ページトップボタンの表示・非表示
const pageTop = document.querySelector("#js-pagetop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    pageTop.classList.add("is-show");
  } else {
    pageTop.classList.remove("is-show");
  }
});

// ドロワーメニューの表示・非表示
const headerIcon = document.querySelector("#js-header__icon");
const drawer = document.querySelector("#js-drawer");

headerIcon.addEventListener("click", function () {
  headerIcon.classList.toggle("is-opened");
  drawer.classList.toggle("is-opened");
});

// ドロワーメニューのリンクをクリックしたときにドロワーを閉じる
const drawerLinks = document.querySelectorAll('#js-drawer a[href^="#"]');

drawerLinks.forEach(link => {
  link.addEventListener("click", function () {
    headerIcon.classList.remove("is-opened");
    drawer.classList.remove("is-opened");
  });
});
