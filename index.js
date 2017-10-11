
$(document).ready(function(){
  
  //--------------//
 // smoothscroll //
//--------------//

  $("a").on('click', function(event) {

    // this.hash nggo jikot hash id
    if (this.hash !== "") {

      // ben ora balik default
      event.preventDefault();

      // simpen hash
      var hash = this.hash;

      // nganggo jQuery animate() men smooth le nyekrol
      // 800 kue waktu animasi arep pirang ms
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // hash gari ditambahna maring URL nek animasine wis rampung dadi ora callback error
        window.location.hash = hash;
      });
    } // END_IF
  });
/*end smoothscroll*/

  //------------//
 // scrollspy  //
//------------//
  $(window).scroll(function() {

    var bodyOffset = $("#body").offset().top;
    var eventTrigger = bodyOffset-120;

    if ($(document).scrollTop() > eventTrigger) {
      $('.navigasi').addClass('scrolled');
      $('.topnav').children().css('color', 'black');

      // $('.navigasi').animate({background: '#f7faff', filter: 'unset'}, 800);
    } else {
      $('.navigasi').removeClass("scrolled");
      $('.topnav').children().css('color', '#f7faff');
    }
  });
/*end scrollspy*/

});



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
    else
    {
        myTopNav.className = "topnav";
        navigasi.className = "navigasi";
    }
}

