
  $(document).ready(function() {
  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= 50) {
      $(".nav-on-scroll").addClass("compressed");
      $("#logo").addClass("compressed");
    } else {
      $(".nav-on-scroll").removeClass("compressed");
      $("#logo").removeClass("compressed");
    }
  });
});
