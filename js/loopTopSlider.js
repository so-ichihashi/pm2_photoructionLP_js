function loopTopSlider() {
  var sliderSize = $(".loopSlider .loopslider_wrap ul").width();
  $(".loopSlider .loopslider_wrap").css({ width: sliderSize * 2 + "px" });
  $(".loopSlider .loopslider_wrap").find("ul").clone().appendTo(".loopSlider .loopslider_wrap");
}
function loopsliderPosition() {
  var sliderSize = $(".loopSlider .loopslider_wrap ul:first-of-type").width();
  $(".loopslider_wrap").css({ left: "0" });
  $(".loopslider_wrap")
    .stop()
    .animate({ left: "-" + sliderSize + "px" }, 60000, "linear");
  setTimeout(function () {
    loopsliderPosition();
  }, 60000);
}
