var myTopNav = document.getElementById("myTopNav");
var navigasi = document.getElementById("navigasi");


//slideshow

var jumlahSlide = 1;
showSlides(jumlahSlide);
showSdf(jumlahSlide);

function plusSlides(n) {
  showSlides(jumlahSlide += n);
  showSdf(jumlahSlide += n);
}

function currentSlide(n) {
  showSlides(jumlahSlide = n);
  showSdf(jumlahSlide = n);
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

function showSdf(n) {
  var i;
  var sdf = document.getElementsByClassName("sdf");
  var dots = document.getElementsByClassName("dot");

  if (n > sdf.length)
  {
    jumlahSlide = 1
  } 

  if (n < 1) 
  {
    jumlahSlide = sdf.length
  }

  for (i = 0; i < sdf.length; i++) 
  {
      sdf[i].style.display = "none"; 
  }

  for (i = 0; i < dots.length; i++) 
  {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  sdf[jumlahSlide-1].style.display = "block"; 
  dots[jumlahSlide-1].className += " active";
}

