document.addEventListener("DOMContentLoaded", function () {
  let checkbox = document.getElementById("myCheckbox");
  let navBtns = document.querySelectorAll(".nav_btn");

  navBtns.forEach(function (navBtn) {
    navBtn.addEventListener("click", function () {
      checkbox.checked = false;
    });  
  })
});