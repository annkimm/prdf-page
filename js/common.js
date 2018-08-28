var header = document.getElementById("header");
var header_height = header.offsetHeight;
var addClass = header.classList.add("on");
var removeClass = header.classList.remove("on");

function scrollHeader() {
  if (header_height < $(window).scrollTop()) {
    addClass;
  } else {
    removeClass;
  }
}

scrollHeader();

$(document).ready(function() {});
