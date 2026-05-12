// simple dark / light mode toggle
var btn = document.getElementById("themeBtn");

btn.addEventListener("click", function() {
  var html = document.documentElement;
  if (html.getAttribute("data-theme") === "dark") {
    html.setAttribute("data-theme", "light");
    btn.textContent = "☀️ Light";
  } else {
    html.setAttribute("data-theme", "dark");
    btn.textContent = "🌙 Dark";
  }
});

// show how long the internship has been running
var start = new Date("2023-06-01");
var now   = new Date();
var months = Math.floor((now - start) / (1000 * 60 * 60 * 24 * 30));
var years  = Math.floor(months / 12);
var rem    = months % 12;

var dateEl = document.querySelector(".tl-date");
if (dateEl && dateEl.textContent.includes("Present")) {
  var dur = "";
  if (years > 0) dur += years + "y ";
  dur += rem + "mo";
  dateEl.textContent = "June 2023 – Present  (" + dur + ")";
}
