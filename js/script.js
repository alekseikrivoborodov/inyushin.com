$(window).on("load", function () {
  $("#pageloader").delay(0).fadeOut("slow");
});

$(function () {
  $("img").on("mousedown", function (e) {
    e.preventDefault();
    // Do something
  });
});

$(function () {
  $(".smooth-scroll a, a.smooth-scroll").on("click", function (e) { });
});

$(document).ready(function () {
  $(".flexslider").flexslider({
    animation: "fade",
    controlsContainer: ".flexslider",
    touch: true,
    controlNav: false,
    slideshowSpeed: 7000,
  });

  $("#form_contact").submit(function () {
    var url = location.hostname;
    var hostname = url.replace(/^www\./, "");

    var at = "@";
    var login = "info";

    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();

    var content = $("#content").val();

    content = "Поздравление: " + content + "\n";
    content = "Телефон: " + phone + "\n" + content;
    content = "Имя: " + name + "\n" + content;

    window.location.href =
      "mailto:" +
      login +
      at +
      hostname +
      "?cc=" + //+ email
      "&subject=" +
      encodeURIComponent("Email с сайта") +
      "&body=" +
      encodeURIComponent(content);
    console.log(window.location.href);

    return false;
  });

  $("video-carousel").click(function () {
    iframe = $(this).closest(".item").find("iframe");
    iframe_source = iframe.attr("src");
    iframe_source = iframe_source + "?autoplay=1";
    iframe.attr("src", iframe_source);
    // hide the mask
    $(this).toggle();
    // stop the slideshow
    $(".projectOverviewCarousel").carousel("pause");
  });

  $(".menu-button").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("menu-button-active");
    $('.dropdown-mobile').toggleClass("dropdown-mobile-active");
  });

  $(function () {
    $("header").hover(function () {
      $('.important').addClass("active")
      $('.navbar').addClass("active")
      $(this).addClass("active")
      $('.footer').addClass("active")
    })
  })

  // $('.card').on('click', function() {
  //   $('.container-katalog').toggleClass('container-origin')
  // })

});



