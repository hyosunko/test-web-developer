function getFile() {
  document.getElementById("job_applicant_resume").click();
}
function sub(e) {
  var n = e.value.split("\\");
  (document.getElementById("file_status").innerHTML = n[n.length - 1]),
    event.preventDefault();
}
$(document).ready(function() {
  $(document).foundation();
  var e;
  new Blazy({ selector: "img, .b-lazy", offset: 500 });
  AOS.init({ disable: "mobile" }),
    $(".smooth-scroll").click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var e = $(this.hash);
        if ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length)
          return (
            $("html, body").animate({ scrollTop: e.offset().top }, 1e3), !1
          );
      }
    }),
    $(".carousel").each(function() {
      var a = $(this);
      a.on("init reInit afterChange", function(e, n, i, o) {
        if (1 < n.slideCount) {
          var t = (i || 0) + 1;
          a.parent()
            .parent()
            .find(".slider_count span")
            .html(
              (t < 10 ? "0" : "") +
                t +
                "&nbsp; / &nbsp;" +
                (n.slideCount < 10 ? "0" : "") +
                n.slideCount
            );
        }
      }),
        a.slick({
          slide: ".carousel-slide",
          autoplay: !1,
          dots: !1,
          arrows: !0,
          infinite: !0,
          appendArrows: a
            .parent()
            .parent()
            .find(".slider_count")
        }),
        a.on("click", "div", function(e) {
          e.stopPropagation();
          var n = a.find(".slick-current").data("slick-index"),
            i = $(this).data("slick-index"),
            o = a.find(".slick-slide").length - a.find(".slick-cloned").length;
          if (n == i) return !1;
          i == o - 1
            ? 0 == n
              ? a.slick("slickPrev")
              : a.slick("slickNext")
            : 0 == i
            ? n == o - 1
              ? a.slick("slickNext")
              : a.slick("slickPrev")
            : i < n
            ? a.slick("slickPrev")
            : a.slick("slickNext");
        });
    }),
    $(".partner-carousel").slick({
      slide: ".carousel-slide",
      autoplay: !0,
      autoplaySpeed: 3e3,
      dots: !1,
      arrows: !1,
      infinite: !0,
      slidesToShow: 2,
      slidesToScroll: 1
    }),
    $(".blog-carousel").on("init reInit afterChange", function(e, n, i, o) {
      var t = (i || 0) + 1;
      $(".blog_slider_count span").html(
        (t < 10 ? "0" : nil) +
          t +
          "&nbsp; / &nbsp;" +
          (n.slideCount < 10 ? "0" : nil) +
          n.slideCount
      );
    }),
    $(".blog-carousel").slick({
      slide: ".carousel-slide",
      autoplay: !1,
      dots: !1,
      arrows: !0,
      infinite: !0,
      adaptiveHeight: !0,
      appendArrows: $(".blog_slider_count"),
      slidesToShow: 2,
      responsive: [
        { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } }
      ]
    }),
    $(".blog-prev").click(function() {
      $(".blog-carousel").slick("slickPrev");
    }),
    $(".blog-next").click(function() {
      $(".blog-carousel").slick("slickNext");
    }),
    $(".team-carousel").on("init reInit afterChange", function(e, n, i, o) {
      var t = (i || 0) + 1;
      $(".team_slider_count span").html(
        (t < 10 ? "0" : "") +
          t +
          "&nbsp; / &nbsp;" +
          (n.slideCount < 10 ? "0" : "") +
          n.slideCount
      );
    }),
    $(".team-carousel").slick({
      slide: ".carousel-slide",
      autoplay: !1,
      dots: !1,
      arrows: !0,
      infinite: !0,
      slidesToShow: 1,
      appendArrows: $(".team_slider_count")
    }),
    $(".testimonial-carousel").slick({
      dots: !1,
      infinite: !0,
      speed: 700,
      autoplay: !1,
      arrows: !0,
      fade: !1
    }),
    "careers" == pagename
      ? (e = 0)
      : sub_page &&
        (e =
          -1 == product_nav_order.indexOf(sub_page)
            ? 0
            : product_nav_order.indexOf(sub_page)),
    $(".menu-carousel").slick({
      slide: ".carousel-slide",
      autoplay: !1,
      dots: !1,
      arrows: !0,
      infinite: !0,
      variableWidth: !0,
      centerMode: !0,
      initialSlide: e
    }),
    $(".magnific-iframe").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: !1,
      fixedContentPos: !0
    }),
    $(".open-popup-link").magnificPopup({
      type: "inline",
      midClick: !0,
      fixedContentPos: "false",
      closeOnBgClick: !1,
      callbacks: {
        beforeOpen: function() {
          var e = $(this.st.el).data("modal-class");
          e && (this.st.mainClass = this.st.mainClass + " " + e);
        }
      }
    }),
    $(".popup-player").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: !1,
      fixedContentPos: !1,
      iframe: {
        markup:
          '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>',
        srcAction: "iframe_src"
      }
    }),
    $(".hero-1 .hero-carousel").slick({
      dots: !1,
      infinite: !0,
      speed: 300,
      autoplay: !0,
      autoplaySpeed: 3e3,
      arrows: !0
    }),
    $(".career-videos .video-wrap").each(function() {
      var e = $(this);
      if (e.has("video").length) {
        var n = e.find("video")[0],
          i = e.find("video source"),
          o = i.attr("data-source");
        e.hover(
          function() {
            i.attr("src", o), n.load(), n.play();
          },
          function() {
            n.pause();
          }
        );
      }
    }),
    $(".hero-1 .play-btn").click(function() {
      $("#homepage-hero-video")[0].pause();
    }),
    $(".subscribe-form.collapsed").one("click", function(e) {
      $(".subscribe-form").removeClass("collapsed"),
        $(".subscribe-form input[type=email]").focus(),
        $(".subscribe-form-submit").bind("click", function() {
          $(".subscribe-form input[type=submit]").click();
        });
    }),
    $(".nav-mobile-list a")
      .not("#login")
      .mouseenter(function() {
        $(".mobile-menu .menu-img#" + $(this).data("bg") + "Bg").css(
          "opacity",
          ".25"
        );
      })
      .mouseleave(function() {
        $(".mobile-menu .menu-img").css("opacity", "0");
      });
  var n = 0,
    i = $(window);
  i.on("scroll", function() {
    var e = i.scrollTop();
    $(".header-hide").toggleClass("move-up", n < e && 0 < e),
      "contact" == pagename &&
        $(".btn-contact.contact-scrolled").toggleClass(
          "top-100",
          e < n && 0 < e
        ),
      ("products" != pagename && "wasatch" != sub_page) ||
        $(".sticky-subnav").toggleClass("top-0", n < e && 0 < e),
      "lincoln-exclusive-essentials" == pagename &&
        $(".essentials-nav.scrolled ul").toggleClass(
          "margin-top-100",
          e < n && 0 < e
        ),
      (n = e);
  }),
    $("a", "li.buttons").on("click touchend", function(e) {
      var n = $(this).attr("href");
      window.location = n;
    }),
    AOS.refresh();
}),
  $(function() {
    $(".mobile-menu-1 .mobile-toggle").click(function(e) {
      e.preventDefault(), $("html").toggleClass("mobile-menu-1-on");
    }),
      $(".mobile-menu-1 .nav-mobile-list a").click(function() {
        $("html").removeClass("mobile-menu-1-on");
      });
  });
var controller = new ScrollMagic.Controller();
function pathPrepare(e) {
  (lineLength = e[0].getTotalLength()),
    e.css("stroke-dasharray", lineLength),
    e.css("stroke-dashoffset", lineLength);
}
new ScrollMagic.Scene({
  triggerElement: ".wrapper",
  triggerHook: "onLeave",
  offset: 50
})
  .setClassToggle(".head-wrap", "header-scrolled")
  .addTo(controller),
  new ScrollMagic.Scene({
    triggerElement: ".subnav-container",
    triggerHook: "onLeave"
  })
    .setClassToggle(".sticky-subnav", "subnav-scrolled")
    .addTo(controller),
  new ScrollMagic.Scene({
    triggerElement: ".contact-cards",
    triggerHook: "onLeave",
    offset: -25
  })
    .setClassToggle(".btn-contact", "contact-scrolled")
    .addTo(controller),
  $(".img-grow").each(function() {
    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: "onEnter",
      offset: 25
    })
      .setClassToggle(this, "activated")
      .reverse(!1)
      .addTo(controller);
  }),
  $(".screen-parallax").each(function() {
    var e = $(this).find(".screen"),
      n = new TimelineMax().add(
        TweenMax.to(e, 0.9, { y: "-25%", ease: Linear.easeNone })
      );
    new ScrollMagic.Scene({
      triggerElement: this,
      duration: "200%",
      tweenChanges: !0
    })
      .setTween(n)
      .addTo(controller);
  }),
  $(".line-chart-box").each(function() {
    var e = $(this).find($(".chart-data")),
      n = $(this).find($(".cs-stat .inner-wrap")),
      i = new TimelineMax().from(e, 1.5, { css: { width: "0%" } });
    n.each(function(e) {
      var n = e / 4;
      i.add(TweenMax.from(this, 0.5, { opacity: 0, scale: 0.5 }), n);
    }),
      new ScrollMagic.Scene({ triggerElement: this })
        .setTween(i)
        .reverse(!1)
        .addTo(controller);
  }),
  $(".draw").each(function() {
    var e = $(this).find("path"),
      i = new TimelineMax();
    e.each(function() {
      var e = $(this),
        n = e[0].getTotalLength();
      TweenMax.set(this, {
        strokeDashoffset: n,
        strokeDasharray: n,
        fill: "none",
        stroke: "#00a8e1"
      }),
        i.add(
          TweenMax.to(e, 0.4, { strokeDashoffset: 0, ease: Linear.easeNone })
        );
    }),
      new ScrollMagic.Scene({
        triggerElement: this,
        duration: "15%",
        tweenChanges: !0
      })
        .setTween(i)
        .reverse(!1)
        .addTo(controller);
  });
//# sourceMappingURL=sourcemaps/bundle-05180d60.min.js.map
