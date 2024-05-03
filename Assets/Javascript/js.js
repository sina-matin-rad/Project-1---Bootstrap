/**
 * @description      :
 * @author           : sina matin rad
 * @group            :
 * @created          : 12/11/2022 - 12:13:24
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 12/11/2022
 * - Author          : sina matin rad
 * - Modification    :
 **/

var days_active1 = document.querySelector(".day1");
var days_active2 = document.querySelector(".day2");
var days_active3 = document.querySelector(".day3");
var days_active4 = document.querySelector(".day4");

days_active1.addEventListener("click", days_shadow1);
days_active2.addEventListener("click", days_shadow2);
days_active3.addEventListener("click", days_shadow3);
days_active4.addEventListener("click", days_shadow4);

let i = 0;

function days_shadow1() {
  days_active1.setAttribute("id", "days-active");
  days_active2.setAttribute("id", "");
  days_active3.setAttribute("id", "");
  days_active4.setAttribute("id", "");
}
function days_shadow2() {
  days_active2.setAttribute("id", "days-active");
  days_active1.setAttribute("id", "");
  days_active3.setAttribute("id", "");
  days_active4.setAttribute("id", "");
}
function days_shadow3() {
  days_active3.setAttribute("id", "days-active");
  days_active1.setAttribute("id", "");
  days_active2.setAttribute("id", "");
  days_active4.setAttribute("id", "");
}
function days_shadow4() {
  days_active4.setAttribute("id", "days-active");
  days_active1.setAttribute("id", "");
  days_active2.setAttribute("id", "");
  days_active3.setAttribute("id", "");
}

let modal = document.querySelector(".search-container");

let b = document.documentElement.scrollTop;

window.onscroll = function () {
  let pl = (document.documentElement.scrollTop * 100) / 5621.60009765625;

  document.querySelector(".page-loader").style.width = pl + "%";

  modal.style.marginTop = b + "px";
};

document.querySelector("#gotop").addEventListener("click", scrolltop);

function scrolltop() {
  scrollTo(0, 0);
}

document.querySelector(".search-btn-sd").addEventListener("click", search);

function search() {
  modal.style.display = "flex";
  modal.style.marginTop = b + "px";
  document.querySelector("#input").focus();
}

document.querySelector(".cross").addEventListener("click", close);

function close() {
  modal.style.display = "none";
}
