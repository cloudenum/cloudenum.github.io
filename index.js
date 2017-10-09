var myTopNav = document.getElementById("myTopNav");
var navigasi = document.getElementById("navigasi");


//slideshow

var jumlahSlide = 1;
showSlides(jumlahSlide);

function plusSlides(n) {
  showSlides(jumlahSlide += n);
}

function currentSlide(n) {
  showSlides(jumlahSlide = n);
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

// side navigation 
// nggo layar sing cilik

function sideNav() {
    if (myTopNav.className === "topnav" && navigasi.className === "navigasi") {
        myTopNav.className += ' responsive';
        navigasi.className += ' responsive';
    } else {
        myTopNav.className = "topnav";
        navigasi.className = "navigasi";
    }
}
