$(function () {
  var modal = document.getElementById("myModal");
  var modal2 = document.getElementById("myModal2");
  var modal3 = document.getElementById("myModal3");
  var modal4 = document.getElementById("myModal4");
  var iframe1 = document.getElementById("iframeContent1");
  var iframe2 = document.getElementById("iframeContent2");
  var iframe3 = document.getElementById("iframeContent3");
  var iframe4 = document.getElementById("iframeContent4");
  var images = document.querySelectorAll(".Pslide img");
  var designImages = document.querySelectorAll("#page4 img");

  images.forEach(function (element) {
    element.onclick = function () {
      if (this.classList.contains("todolist")) {
        modal3.style.display = "block";
        iframe3.src = "https://heoyeji.github.io/todolist/";
      } else {
        modal.style.display = "block";
        if (this.classList.contains("lush")) {
          iframe1.src = "https://heoyeji.github.io/lush/";
        } else if (this.classList.contains("santaN")) {
          iframe1.src = "https://heoyeji.github.io/";
        } else if (this.classList.contains("movie")) {
          iframe1.src = "https://heoyeji.github.io/movie_api/";
        } else if (this.classList.contains("weather")) {
          iframe1.src = "https://heoyeji.github.io/weatherapp/";
        } else if (this.classList.contains("numberB")) {
          iframe1.src = "https://heoyeji.github.io/numberbingo/";
        } else {
          iframe1.src = "";
        }
      }
    };
  });
  designImages.forEach(function (img) {
    img.addEventListener("click", function () {
      modal4.style.display = "block";
      if (this.classList.contains("Dimg1")) {
        iframe4.src = "img/to-do-list.png";
      } else if (this.classList.contains("Dimg2")) {
        iframe4.src = "img/black-friday.jpg";
      } else if (this.classList.contains("Dimg3")) {
        iframe4.src = "img/한가위.jpg";
      } else {
        iframe4.src = "";
      }
    });
  });
  var close1 = document.getElementById("close1");
  var close2 = document.getElementById("close2");
  var close3 = document.getElementById("close3");
  var close4 = document.getElementById("close4");

  close1.onclick = function () {
    modal.style.display = "none";
    iframe1.src = "";
  };

  close2.onclick = function () {
    modal2.style.display = "none";
    iframe2.src = "";
  };
  close3.onclick = function () {
    modal3.style.display = "none";
    iframe3.src = "";
  };
  close4.onclick = function () {
    modal4.style.display = "none";
    iframe4.src = "";
  };

  var planButton = document.getElementById("planButton");
  planButton.onclick = function () {
    modal2.style.display = "block";
    iframe2.src = "img/기획서 최최종1.5.jpg";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      iframe1.src = "";
    }
    if (event.target === modal2) {
      modal2.style.display = "none";
      iframe2.src = "";
    }
    if (event.target === modal3) {
      modal3.style.display = "none";
      iframe3.src = "";
    }
    if (event.target === modal4) {
      modal4.style.display = "none";
      iframe4.src = "";
    }
  };

  const baseline = -200; // 스크롤 오프셋 조정
  const pageOffsets = [
    $("#page1").offset().top + baseline,
    $("#page2").offset().top + baseline,
    $("#page3").offset().top + baseline,
    $("#page4").offset().top + baseline,
  ];

  let isScrolling = false; // 스크롤 상태를 추적

  function activateNavItem(index) {
    $("#nav li").removeClass("on");
    $("#nav li").eq(index).addClass("on");
  }

  function scrollToPage(index) {
    isScrolling = true;
    $("html, body")
      .stop()
      .animate({ scrollTop: pageOffsets[index] - baseline }, 10, function () {
        isScrolling = false;
      });
    activateNavItem(index);
  }

  function throttle(fn, wait) {
    let time = Date.now();
    return function () {
      if (time + wait - Date.now() < 0) {
        fn();
        time = Date.now();
      }
    };
  }

  $(window).on(
    "scroll",
    throttle(function () {
      if (!isScrolling) {
        let scroll = $(this).scrollTop();

        if (scroll >= pageOffsets[0] && scroll < pageOffsets[1]) {
          activateNavItem(0);
        } else if (scroll >= pageOffsets[1] && scroll < pageOffsets[2]) {
          activateNavItem(1);
        } else if (scroll >= pageOffsets[2] && scroll < pageOffsets[3]) {
          activateNavItem(2);
        } else if (scroll >= pageOffsets[3]) {
          activateNavItem(3);
        }
      }
    }, 100)
  );

  $("#nav li").on("click", function (event) {
    event.preventDefault();
    const index = $(this).index();
    scrollToPage(index);
  });
});

$(function () {
  $("#page1 h1").animate({ opacity: "1", left: "40%" }, 1000);
  $("#page1  h2").delay(300).animate({ opacity: "1", right: "30%" }, 1000);
  $("#page1 .Fflower").delay(500).animate({ opacity: "1", top: "45%" }, 1000);
  $("#page1 .Fflower2")
    .delay(500)
    .animate({ opacity: "1", top: "63.5%" }, 1000);
  $("#page1 .logo").delay(1000).animate({ opacity: "1", top: "63%" }, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
  const page2 = document.querySelector("#page2");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  function callback(entries, observer) {
    entries.forEach((entry) => {
      const showLElement = entry.target.querySelector(".showL");
      if (entry.isIntersecting) {
        showLElement.style.left = "0";
      } else {
        showLElement.style.left = "-100%";
      }
    });
  }

  const observer = new IntersectionObserver(callback, options);

  observer.observe(page2);
});
