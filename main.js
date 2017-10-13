
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

    if ($(document).scrollTop()) {
      $('.navigasi').addClass('scrolled');
      $('.topnav').children().css('color', 'black');

      // $('.navigasi').animate({background: '#f7faff', filter: 'unset'}, 800);
    } else {
      $('.navigasi').removeClass("scrolled");
      $('.topnav').children().css('color', '#f7faff');
    }
  });
/*end scrollspy*/
// Get the modal
 //var modal = $('#modal-motor');
// Get the button that opens the modal
//  var btn = $("#btn-modal");
//  // Get the <span> element that closes the modal
// var span = $(".close");

// // When the user clicks on the button, open the modal 
//  btn.on('click', function(event) {
//    event.preventDefault();

//    modal.css('display', 'block');
//  });

//  // When the user clicks on <span> (x), close the modal
//  span.on('click', function(event) {
//    event.preventDefault();

//    // modal.animate({
//    //   top: "-=300px",
//    //   opacity: "0"},
//    //   400, function() {
//      modal.css('display', 'none')
//    //});
//  });
});

function openModal(modalName){
 // Get the modal
 var modal = document.getElementById(modalName);
 // Get the button that opens the modal
 var btn = document.getElementsByClassName("btn-modal");

// // Get the <span> element that closes the modal

 // When the user clicks the button, open the modal 
modal.style.display = "block";
}

function closeModal(modalName){
var modal = document.getElementById(modalName);

// When the user clicks on <span> (x), close the modal
     modal.style.display = "none";

window.onclick = function(event) {
    if (event.target == modal) {
         modal.style.display = "none";
     }
 }
}
