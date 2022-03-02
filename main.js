// Sticky Navigation Bar
window.addEventListener("scroll", function () {
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Scroll-2-Top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// Scroll-2-Top Disabling Bounce on Hover
const bounce = document.querySelector(".fa-chevron-up");

$(document).ready(function () {
  $(bounce).hover(
    function () {
      $(this).removeClass("fa-bounce");
    },
    function () {
      $(this).addClass("fa-bounce");
    }
  );
});

// Disabling Right-Click on Images
$(function () {
  $("img").bind("contextmenu", function () {
    return false;
  });
});
