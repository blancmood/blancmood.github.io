// 햄버거 메뉴
$(".iconWrap").click(function () {
  $(".icon1").toggleClass("animation");
  $(".icon2").toggleClass("animation");
  $(".icon3").toggleClass("animation");
  $("body").toggleClass("open");
  $("body").toggleClass("over");
});
