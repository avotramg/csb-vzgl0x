$(document).ready(function () {
  $("#menuResponsive").click(function () {
    $(".menu").toggleClass("show");
  });

  $(".menu a").click(function () {
    $(".menu").removeClass("show");
  });
});
