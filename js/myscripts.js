var slideIndex = 1;
var slideIndexMobile = 1;
var loginForm = document.getElementById('loginPopup');

window.onload = function () {
  init ();
}

function init() {
  console.log("Loaded");
}

//If user cicks outside of login box, the box will close.
window.onclick = function(event) {
  if (event.target == loginForm) {
    loginForm.style.display = "none";
  }
}

showDivs(slideIndex);
autoscroll();

showDivsMobile(slideIndexMobile);
autoscroll2();

function dropDown() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n)
{

  var i;
  var x = document.getElementsByClassName("mySlides");

    if (n > x.length)
    {
      slideIndex = 1;
    }

    if (n < 1)
    {
      slideIndex = x.length;
    }

    for (i = 0; i < x.length; i++)
    {
      x[i].style.display = "none";
    }

    x[slideIndex - 1].style.display = "block";
}

function showDivsMobile(n)
{
console.log("show slides mobile working");
  var i;
  var x = document.getElementsByClassName("mobileSlides");

    if (n > x.length)
    {
      slideIndexMobile = 1;
    }

    if (n < 1)
    {
      slideIndexMobile = x.length;
    }

    for (i = 0; i < x.length; i++)
    {
      x[i].style.display = "none";
    }

    x[slideIndexMobile - 1].style.display = "block";
}

function autoscroll()
{
  var i;
  var x = document.getElementsByClassName("mySlides");

  for(i = 0; i < x.length; i++)
  {
    x[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex >  x.length)
  {
    slideIndex = 1;
  }

  x[slideIndex - 1].style.display = "block"
  setTimeout(autoscroll, 3000);
}

function autoscroll2()
{
  console.log("autoscrollMobile working");
  var i;
  var x = document.getElementsByClassName("mobileSlides");

  for(i = 0; i < x.length; i++)
  {
    x[i].style.display = "none";
  }

  slideIndexMobile++;
  if (slideIndexMobile >  x.length)
  {
    slideIndexMobile = 1;
  }

  x[slideIndexMobile - 1].style.display = "block"
  setTimeout(autoscroll2, 3000);
}
