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

// // Get the modal
// var modal = document.getElementById('myModal');

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
