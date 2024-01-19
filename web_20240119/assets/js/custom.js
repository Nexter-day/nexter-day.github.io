/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function (a) {
  (jQuery.browser = jQuery.browser || {}).mobile =
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
      a
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      a.substr(0, 4)
    );
})(navigator.userAgent || navigator.vendor || window.opera);

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  $("body").addClass("is-mobile");
}

function menuToggle() {
  $(".menu-toggle").click(function () {
    $(".c-hamburger").toggleClass("active");
    $(".menu-panel").toggleClass("is-toggle");
    $("body").toggleClass("scroll--hidden");

    if ($(".menu-panel").hasClass("is-toggle")) {
      $(".site-header").addClass("is-view");
    } else {
      $(".site-header").removeClass("is-view");
    }
  });

  $(".main-menu a").click(function () {
    $(".c-hamburger").removeClass("active");
    $(".menu-panel").removeClass("is-toggle");
    $("body").removeClass("scroll--hidden");
    $(".site-header").removeClass("is-view");
  });
}

function scroll() {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
      $(".site-header").addClass("sticky");
      $(".to-top").addClass("is-view");
    } else {
      $(".site-header").removeClass("sticky");
      $(".to-top").removeClass("is-view");
    }
  });

  $(window).height(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
      $(".site-header").addClass("sticky");
      $(".to-top").addClass("is-view");
    } else {
      $(".site-header").removeClass("sticky");
      $(".to-top").removeClass("is-view");
    }
  });

  (function ($, win) {
    $.fn.inViewport = function (cb) {
      return this.each(function (i, el) {
        function visPx() {
          var elH = $(el).outerHeight(),
            H = $(win).height(),
            r = el.getBoundingClientRect(),
            t = r.top,
            b = r.bottom;
          return cb.call(
            el,
            Math.max(0, t > 0 ? Math.min(elH, H - t) : Math.min(b, H))
          );
        }
        visPx();
        $(win).on("resize scroll", visPx);
      });
    };
  })(jQuery, window);

  // $('.site-footer').inViewport(function(px){
  //   if(px >0){
  //     $('.to-top').addClass('change-bottom');
  //   }
  //   else{
  //     $('.to-top').removeClass('change-bottom');
  //   }
  // });
}

(function ($) {
  var _hash = location.hash || null,
    _validateLocHash = function (val) {
      try {
        var $val = $(val);
      } catch (error) {
        return false;
      } //avoid js errors on invalid selectors
      return $(val).length && $("a[href*='" + val + "']").length;
    };
  $(document).ready(function () {
    if (_hash) {
      if (_validateLocHash(_hash)) {
        var href = window.location.href.replace(/#.*$/, "#");
        $(window).scrollTop(0); //stop jump to hash straight away
        if (window.history && window.history.replaceState) {
          window.history.replaceState("", "", href);
        } else {
          window.location.href = href;
        }
      }
    }
  });
  $(window).on("load", function () {
    $(".main-menu a,a[rel='m_PageScroll2id']").mPageScroll2id({
      highlightSelector: ".main-menu a",
      forceSingleHighlight: true,
      highlightByNextTarget: true,
    });

    $(window).hashchange(function () {
      var loc = window.location,
        to = loc.hash.split("/")[1] || "#top";
      $.mPageScroll2id("scrollTo", to, {
        clicked: $(
          "a[href='" +
            loc +
            "'],a[href='" +
            loc.hash +
            "'],a[href='" +
            loc.hash +
            " target='_blank']"
        ),
      });
    });
    if (_hash) {
      if (_validateLocHash(_hash)) {
        $(window).scrollTop(0); //jump/start from the top
        setTimeout(function () {
          $.mPageScroll2id("scrollTo", _hash); //scroll to location hash on page load
          if (window.history && window.history.replaceState) {
            window.history.replaceState("", "", _hash);
          } else {
            window.location.hash = _hash;
          }
        }, 0); //optional delay
      }
    }
  });
})(jQuery);

function inview() {
  $(".in-view").on(
    "inview",
    function (event, isInView, visiblePartX, visiblePartY) {
      // $(this).delay(50).queue(function() {$(this).addClass("animated fadeInUp");});

      if (isInView) {
        $(this).delay(50).addClass("animated fadeInUp");
      }
    }
  );
}

function globeNav() {
  $(".tab").removeClass("active");
  $(".tab-content").removeClass("is-view");
  $("#globe-trigger").addClass("active");
  $("#globe").addClass("is-view");
}

function taiwanNav() {
  $(".tab").removeClass("active");
  $(".tab-content").removeClass("is-view");
  $("#taiwan-trigger").addClass("active");
  $("#taiwan").addClass("is-view");
}

function tabs() {
  $("#globe-trigger").click(function () {
    globeNav();
  });

  $("#taiwan-trigger").click(function () {
    taiwanNav();
  });

  $("#feature-trigger-1").click(function () {
    if ($(this).hasClass("active")) {
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
    } else {
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
      $(this).addClass("active");
      $("#feature1").addClass("is-view");
    }
  });

  $("#feature-trigger-2").click(function () {
    if ($(this).hasClass("active")) {
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
    } else {
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
      $(this).addClass("active");
      $("#feature2").addClass("is-view");
    }
  });

  $("#feature-trigger-3").click(function () {
    if ($(this).hasClass("active")) {
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
    } else {
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
      $(this).addClass("active");
      $("#feature3").addClass("is-view");
    }
  });

  $("#feature-trigger-4").click(function () {
    if ($(this).hasClass("active")) {
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
    } else {
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
      $(this).addClass("active");
      $("#feature4").addClass("is-view");
    }
  });

  $("#feature-trigger-5").click(function () {
    if ($(this).hasClass("active")) {
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
    } else {
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
      $(this).addClass("active");
      $("#feature5").addClass("is-view");
    }
  });

  $("#feature-trigger-6").click(function () {
    if ($(this).hasClass("active")) {
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
    } else {
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
      $(this).addClass("active");
      $("#feature6").addClass("is-view");
    }
  });

  $("#feature-trigger-7").click(function () {
    if ($(this).hasClass("active")) {
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
    } else {
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
      $(this).addClass("active");
      $("#feature7").addClass("is-view");
    }
  });

  $("#feature-trigger-8").click(function () {
    if ($(this).hasClass("active")) {
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
    } else {
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
      $(this).addClass("active");
      $("#feature8").addClass("is-view");
    }
  });

  $(".feature-close").click(function () {
    $(".feature-item").removeClass("active");
    $(".feature-section").removeClass("is-view");
  });

  $("#taiwan .feature-close").click(function () {
    $.mPageScroll2id("scrollTo", "#taiwan", { offset: -300 });
  });

  $("#globe .feature-close").click(function () {
    $.mPageScroll2id("scrollTo", "#globe", { offset: -300 });
  });

  $("#family .feature-close").click(function () {
    $.mPageScroll2id("scrollTo", "#family", { offset: -300 });
  });
}

function swiper() {
  var featureMenuSwiper = new Swiper("#feature-menu-1 .swiper-container", {
    slidesPerView: "auto",
    observer: true,
    observeParents: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    pagination: {
      el: "#feature-menu-1 .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: "auto",
        centeredSlides: true,
        centerInsufficientSlides: true,
        initialSlide: 1,
      },
      480: {
        slidesPerView: "auto",
        centeredSlides: true,
        centerInsufficientSlides: true,
        initialSlide: 1,
      },
      640: {
        slidesPerView: "auto",
        centeredSlides: true,
        centerInsufficientSlides: true,
        initialSlide: 1,
      },
      768: {
        slidesPerView: "auto",
        centeredSlides: true,
        centerInsufficientSlides: true,
        initialSlide: 1,
      },
      1024: {
        slidesPerView: "auto",
        centeredSlides: false,
        simulateTouch: false,
      },
    },
  });

  var featureMenuSwiper2 = new Swiper("#feature-menu-2 .swiper-container", {
    slidesPerView: "auto",
    observer: true,
    observeParents: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    // simulateTouch: false,
    pagination: {
      el: "#feature-menu-2 .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: "auto",
        centeredSlides: true,
        centerInsufficientSlides: true,
        initialSlide: 1,
      },
      480: {
        slidesPerView: "auto",
        centeredSlides: true,
        centerInsufficientSlides: true,
        initialSlide: 1,
      },
      640: {
        slidesPerView: "auto",
        centeredSlides: true,
        centerInsufficientSlides: true,
        initialSlide: 1,
      },
      768: {
        slidesPerView: "auto",
        centeredSlides: true,
        centerInsufficientSlides: true,
        initialSlide: 1,
      },
      1024: {
        slidesPerView: "auto",
        centeredSlides: false,
      },
    },
  });

  var featureMenuSwiper3 = new Swiper("#feature-menu-3 .swiper-container", {
    slidesPerView: "auto",
    observer: true,
    observeParents: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    // simulateTouch: false,
    pagination: {
      el: "#feature-menu-3 .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: "auto",
        centeredSlides: true,
        centerInsufficientSlides: true,
        initialSlide: 1,
      },
      480: {
        slidesPerView: "auto",
        centeredSlides: true,
        centerInsufficientSlides: true,
        initialSlide: 1,
      },
      640: {
        slidesPerView: "auto",
        centeredSlides: true,
        centerInsufficientSlides: true,
        initialSlide: 1,
      },
      768: {
        slidesPerView: "auto",
        centeredSlides: true,
        centerInsufficientSlides: true,
        initialSlide: 1,
      },
      1024: {
        slidesPerView: "auto",
        centeredSlides: false,
      },
    },
  });

  var featureMenuSwiper4 = new Swiper("#feature-menu-4 .swiper-container", {
    slidesPerView: "auto",
    observer: true,
    observeParents: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    // simulateTouch: false,
    pagination: {
      el: "#feature-menu-4 .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: "auto",
        centeredSlides: true,
        centerInsufficientSlides: true,
        initialSlide: 1,
      },
      480: {
        slidesPerView: "auto",
        centeredSlides: true,
        centerInsufficientSlides: true,
        initialSlide: 1,
      },
      640: {
        slidesPerView: "auto",
        centeredSlides: true,
        centerInsufficientSlides: true,
        initialSlide: 1,
      },
      768: {
        slidesPerView: "auto",
        centeredSlides: true,
        centerInsufficientSlides: true,
        initialSlide: 1,
      },
      1024: {
        slidesPerView: "auto",
        centeredSlides: false,
      },
    },
  });

  var recommendSwiper = new Swiper(".recommend-swiper", {
    slidesPerView: "auto",
    observer: true,
    observeParents: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    // simulateTouch: false,
    pagination: {
      el: ".recommend-swiper .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: "auto",
        centeredSlides: true,
        centerInsufficientSlides: true,
        initialSlide: 1,
      },
      480: {
        slidesPerView: "auto",
        centeredSlides: true,
        centerInsufficientSlides: true,
        initialSlide: 1,
      },
      640: {
        slidesPerView: "auto",
        centeredSlides: true,
        centerInsufficientSlides: true,
        initialSlide: 1,
      },
      768: {
        slidesPerView: "auto",
        centeredSlides: true,
        centerInsufficientSlides: true,
        initialSlide: 1,
      },
      1024: {
        slidesPerView: "auto",
        centeredSlides: false,
      },
    },
  });

  var experienceSwiper = new Swiper(".experience-swiper", {
    slidesPerView: "auto",
    observer: true,
    observeParents: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    // simulateTouch: false,
    pagination: {
      el: ".experience-swiper .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: "auto",
        centeredSlides: true,
        centerInsufficientSlides: true,
        initialSlide: 1,
      },
      480: {
        slidesPerView: "auto",
        centeredSlides: true,
        centerInsufficientSlides: true,
        initialSlide: 1,
      },
      640: {
        slidesPerView: "auto",
        centeredSlides: true,
        centerInsufficientSlides: true,
        initialSlide: 1,
      },
      768: {
        slidesPerView: "auto",
        centeredSlides: true,
        centerInsufficientSlides: true,
        initialSlide: 1,
      },
      1024: {
        slidesPerView: "auto",
        centeredSlides: false,
      },
    },
  });
}

function popup() {
  // https://dimsemenov.com/plugins/magnific-popup/documentation.html#options

  $(".popup-modal").magnificPopup({
    type: "inline",

    preloader: false,
    focus: "#username",
    mainClass: "mfp-fade",
  });

  $(document).on("click", ".popup-modal-dismiss", function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
}

function init() {
  var currentUrl = window.location.href;
  var params = new URLSearchParams(window.location.search);

  // 獲取特定的參數值
  var nav = params.get("nav");
  var tabs = params.get("tabs");

  // 輸出解析得到的參數值
  console.log("nav:", nav);
  console.log("tabs:", tabs);

  switch (nav) {
    case "globe":
      globeNav();
      break;
    case "taiwan":
      taiwanNav();
      break;
  }
  switch (tabs) {
    case "healthone":
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
      $("#feature-trigger-6").addClass("active");
      $("#feature6").addClass("is-view");
      scrollToAnchor("#feature6");
      break;
    case "healthtwo":
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
      $("#feature-trigger-8").addClass("active");
      $("#feature8").addClass("is-view");
      scrollToAnchor("#feature8");
      break;
    case "taiwanone":
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
      $("#feature-trigger-1").addClass("active");
      $("#feature1").addClass("is-view");
      scrollToAnchor("#feature-trigger-1");
      break;
    case "taiwantwo":
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
      $("#feature-trigger-2").addClass("active");
      $("#feature2").addClass("is-view");
      scrollToAnchor("#feature-trigger-2");
      break;
    case "taiwanthree":
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
      $("#feature-trigger-4").addClass("active");
      $("#feature4").addClass("is-view");
      scrollToAnchor("#feature-trigger-4");
      break;
    case "taiwanfour":
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
      $("#feature-trigger-3").addClass("active");
      $("#feature3").addClass("is-view");
      scrollToAnchor("#feature-trigger-3");
      break;
    case "homeone":
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
      $("#feature-trigger-2").addClass("active");
      $("#feature2").addClass("is-view");
      scrollToAnchor("#feature-trigger-2");
      break;
    case "thometwo":
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
      $("#feature-trigger-3").addClass("active");
      $("#feature3").addClass("is-view");
      break;
    case "homethree":
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
      $("#feature-trigger-5").addClass("active");
      $("#feature5").addClass("is-view");
      scrollToAnchor("#feature-trigger-5");
      break;
    case "homefour":
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
      $("#feature-trigger-6").addClass("active");
      $("#feature6").addClass("is-view");
      scrollToAnchor("#feature-trigger-6");
      break;
    case "golfone":
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
      $("#feature-trigger-1").addClass("active");
      $("#feature1").addClass("is-view");
      scrollToAnchor("#feature-trigger-1");
      break;
    case "golftwo":
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
      $("#feature-trigger-2").addClass("active");
      $("#feature2").addClass("is-view");
      scrollToAnchor("#feature-trigger-2");
      break;
    case "golfthree":
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
      $("#feature-trigger-3").addClass("active");
      $("#feature3").addClass("is-view");
      scrollToAnchor("#feature-trigger-3");
      break;
    case "golffour":
      $(".feature-item").removeClass("active");
      $(".feature-section").removeClass("is-view");
      $("#feature-trigger-4").addClass("active");
      $("#feature4").addClass("is-view");
      scrollToAnchor("#feature-trigger-4");
      break;
  }
}
function scrollToAnchor(anchorId) {
  // var anchorElement = document.querySelector(anchorId);
  // if (anchorElement) {
  //   // 使用 scrollIntoView 方法滑動到元素
  //   anchorElement.scrollIntoView({ behavior: "smooth", block: "start" });
  // } else {
  //   console.log("錨點未找到: " + anchorId);
  // }
}
$(document).ready(function () {
  menuToggle();
  scroll();
  inview();
  tabs();
  swiper();
  popup();
  init();

  $("img[data-original]").show().lazyload({
    threshold: 1000,
    // effect : "fadeIn",
    skip_invisible: true,
    event: "sporty",
  });

  var $window = $(window),
    $html = $("html");

  function resize() {
    if ($window.width() > 768) {
      $(".c-hamburger").removeClass("active");
      $(".menu-panel").removeClass("is-toggle");
      $("body").removeClass("scroll--hidden");
      $(".site-header").removeClass("is-view");
    }
  }

  $window.resize(resize).trigger("resize");

  // 注意事項 收合
  $(".collapse-trigger").click(function () {
    $(this).closest(".collapse").toggleClass("is-view");
    return false;
  });

  $(".kv .bg")
    .delay(0)
    .queue(function () {
      $(this).addClass("animated fadeIn");
    });
  $(".kv__box")
    .delay(500)
    .queue(function () {
      $(this).addClass("animated fadeInLeft");
    });
});

$(window).bind("load", function () {
  // https://appelsiini.net/projects/lazyload/v1/

  var timeout = setTimeout(function () {
    $("img[data-original]").trigger("sporty");
  }, 1500);
});

// https://stackoverflow.com/questions/3664381/force-page-scroll-position-to-top-at-page-refresh-in-html
// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }
