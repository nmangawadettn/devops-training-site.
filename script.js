document.addEventListener("DOMContentLoaded", function () {
  var el = document.getElementById("version");
  if (el) {
    el.setAttribute("data-source", "github-actions");
  }
});
