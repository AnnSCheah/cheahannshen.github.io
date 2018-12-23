window.onload = function () {
  init ();
}

function init() {
  console.log("Loaded");
}

var slideIndex = 1;
var slideIndexMobile = 1;
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

  slideIndex++;
  if (slideIndex >  x.length)
  {
    slideIndex = 1;
  }

  x[slideIndex - 1].style.display = "block"
  setTimeout(autoscroll, 3000);
}
