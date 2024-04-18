$(document).ready(function () {
  let path = window.location.pathname;
  let currentPage = path.split("/").pop();

  const allHeaderLinks = $("li.header__item a");

  allHeaderLinks.each(function () {
    const link = $(this);
    const elementHref = link.attr("href").split("./").pop();

    if (currentPage === elementHref) {
      link.addClass("active");
      return;
    } else {
      if (link.hasClass("active")) {
        link.removeClass("active");
      }
    }
  });
});
