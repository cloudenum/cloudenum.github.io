
$(document).ready(function(){
  
//   var myTopNav = $('#myTopNav');
//   var navigasi = $('#navigasi');

//   $('.topnav').children().on('click', function(event) {
    
//     // event.preventDefault();
  
//     if (!myTopNav.hasClass('responsive') && !navigasi.hasClass('scrolled responsive')) 
//     {
//       console.log('1 true')
//         myTopNav.addClass('responsive');
//         navigasi.addClass('responsive');
//     }
//     else if (!myTopNav.hasClass('responsive') && !navigasi.hasClass('scrolled')) 
//     {
//       console.log('2 true')
//         myTopNav.addClass('responsive');
//         navigasi.addClass('responsive');
//     } 
//     else if (myTopNav.hasClass('responsive') && navigasi.hasClass('responsive'))
//     {
//       console.log('3 true')
//         myTopNav.removeClass('responsive');
//         navigasi.removeClass('responsive');
//     }
//     else
//     {
//         myTopNav.removeClass('responsive');
//         navigasi.removeClass('responsive');
//     }
// });

$('#Sidenav').children().on('click', function(event) {
  
  event.preventDefault();

  $("#Sidenav").css('width', '0');
  //$("#container").css('margin-right', '0');
});

$('.icon').on('click', function(event) {
  
  event.preventDefault();

  $("#Sidenav").css('width', '100%');
  //$("#container").css('margin-right', '100%');
});

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("container").style.marginRight = "0";
}
  
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
