var MenuItems = document.getElementById("MenuItems");
var productImg = document.getElementById("product_img");
var smallImg = document.getElementsByClassName("small-img");
var loginForm = document.getElementById("loginForm");
var regForm = document.getElementById("registerForm");
var indicator = document.getElementById("indicator");

MenuItems.style.maxHeight = "0px";
function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

smallImg[0].onclick = function () {
  productImg.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
  productImg.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
  productImg.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
  productImg.src = smallImg[3].src;
};

function register() {
  regForm.style.transform="translateX(0px)";
  loginForm.style.transform="translateX(0px)";
  indicator.style.transform="translateX(100px)";

}

function login() {
  regForm.style.transform="translateX(300px)";
  loginForm.style.transform="translateX(300px)";
  indicator.style.transform="translateX(0px)";

}
