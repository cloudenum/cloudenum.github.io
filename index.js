var myTopNav = document.getElementById("myTopNav");
var navigasi = document.getElementById("navigasi");


//slideshow

var jumlahSlide = 1;
showSlides(jumlahSlide);
showSlideContent(jumlahSlide);

function plusSlides(n) {
  showSlides(jumlahSlide += n);
}

function currentSlide(n) {
  showSlides(jumlahSlide = n);

}

function firstSlideContent(n) {
  showSlideContent(jumlahSlide = n);

}

function lastSlideContent(n) {
  showSlideContent(jumlahSlide = n);
}

function plusSlidesContent(n)
{
  showSlideContent(jumlahSlide += n)
}

function currentSlideContent(n) {
  showSlideContent(jumlahSlide = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length)
  {
  	jumlahSlide = 1
  } 

  if (n < 1) 
  {
  	jumlahSlide = slides.length
  }

  for (i = 0; i < slides.length; i++) 
  {
      slides[i].style.display = "none"; 
  }

  for (i = 0; i < dots.length; i++) 
  {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[jumlahSlide-1].style.display = "block"; 
  dots[jumlahSlide-1].className += " active";
}

function showSlideContent(n) {
  var i;
  var slideContent = document.getElementsByClassName("slideContent");
  var pagenum = document.getElementsByClassName("page_num");

  if (n > slideContent.length)
  {
    jumlahSlide = 1
  }

  if (n < 1) 
  {
    jumlahSlide = slideContent.length
  }

  for (i = 0; i < slideContent.length; i++) 
  {
      slideContent[i].style.display = "none"; 
  }

  for (i = 0; i < pagenum.length; i++) 
  {
      pagenum[i].className = pagenum[i].className.replace(" active", "");
  }
  
  slideContent[jumlahSlide-1].style.display = "block"; 
  pagenum[jumlahSlide-1].className += " active";
}

// side navigation 
// nggo layar sing cilik

function sideNav() {
    if (myTopNav.className === "topnav" && navigasi.className === "navigasi") 
    {
        myTopNav.className += ' responsive';
        navigasi.className += ' responsive';
    }
    else if (myTopNav.className === "topnav" && navigasi.className === "navigasi scrolled") 
    {
        myTopNav.className += ' responsive';
        navigasi.className += ' responsive';
    } 
    else if (myTopNav.className === "topnav responsive" && navigasi.className === "navigasi scrolled responsive") 
    {
        myTopNav.className = ' topnav';
        navigasi.className = ' navigasi scrolled';
    }
    else
    {
        myTopNav.className = "topnav";
        navigasi.className = "navigasi";
    }
}

