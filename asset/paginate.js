
var pageList = new Array();
var currentPage = 1;
var numberPerPage = 1;
var asd = 1;
var events = Array.prototype.slice.call(document.querySelectorAll(".events-section__main-event"));
var page_span = document.getElementById('page_num');

function getNumberOfPages() {
  return Math.ceil(events.length / numberPerPage);
}


function nextPage() {
  currentPage += 1;
  loadList();
}

function previousPage() {
  currentPage -= 1;
  loadList();
}

function firstPage() {
  currentPage = 1;
  loadList();
}

function lastPage() {
  currentPage = numberOfPages;
  loadList();
}

function loadList() {
  var begin = ((currentPage - 1) * numberPerPage);
  var end = begin + numberPerPage;
  for (i = 0; i < pageList.length; i++) {
    pageList[i].classList.add("not-visible"); // make the old list invisible
  }
  pageList = events.slice(begin, end);
  var pagesheet = begin +1;
  page_span.innerHTML =  pagesheet + "/" + events.length;
  drawList();
  check();
}

function drawList() {
  for (i = 0; i < pageList.length; i++) {
    pageList[i].classList.remove("not-visible");
  }
}

function check() {
  document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
  document.getElementById("previous").disabled = currentPage == 1 ? true : false;
  document.getElementById("first").disabled = currentPage == 1 ? true : false;
  document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
}

function load() {
  loadList();
}

var numberOfPages = getNumberOfPages();

window.onload = load();

