
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
