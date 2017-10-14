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

function openModalGal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModalGal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlidesGal(slideIndex);

function plusSlidesGal(n) {
  showSlidesGal(slideIndex += n);
}

function currentSlideGal(n) {
  showSlidesGal(slideIndex = n);
}

function showSlidesGal(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}