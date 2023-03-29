const form = document.querySelector("form");

form.onsubmit = function (event) {
  console.log("执行nosubmit")
  event.preventDefault();
};
