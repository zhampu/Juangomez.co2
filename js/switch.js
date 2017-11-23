//
// $(document).ready(function() {
//   function e() {
//   }
//
//
//  $(window).width() > 1024 && (screenshotPreview(), $(".abrir").hover(function() {
//     $(this).addClass("active-screen")
//   }, function() {
//     $(this).removeClass("active-screen")
//   }));
//
//
// });
// this.screenshotPreview = function() {
//     xOffset = 200, yOffset = -150, $("span.screenshot").hover(function(e) {
//       $("body").append("<div id='screenshot'><img src='" + this.rel + "' alt='' /></div>"),
//       $("#screenshot").css("top", e.pageY - xOffset + "px").css("left", e.pageX + yOffset + "px").fadeIn("300")
//     }, function() {
//      $("#screenshot").remove()
//     }), $("span.screenshot").mousemove(function(e) {
//       $("#screenshot").css("top", e.pageY - xOffset + "px").css("left", e.pageX + yOffset + "px")
//     })
//   };

//languages
function ES() {
  var showme = document.getElementById("ES");
  showme.style.display = "block";
  var hideme = document.getElementById("EN");
  hideme.style.display = "none";
  var hideme = document.getElementById("FR");
  hideme.style.display = "none";
  var hideme = document.getElementById("DE");
  hideme.style.display = "none";
}

function FR() {

  var showme = document.getElementById("FR");
  showme.style.display = "block";
  var hideme = document.getElementById("EN");
  hideme.style.display = "none";
  var hideme = document.getElementById("ES");
  hideme.style.display = "none";
  var hideme = document.getElementById("DE");
  hideme.style.display = "none";
}

function EN() {
  var showme = document.getElementById("EN");
  showme.style.display = "block";
  var hideme = document.getElementById("FR");
  hideme.style.display = "none";
  var hideme = document.getElementById("ES");
  hideme.style.display = "none";
  var hideme = document.getElementById("DE");
  hideme.style.display = "none";
}

function DE() {
  var showme = document.getElementById("DE");
  showme.style.display = "block";
  var hideme = document.getElementById("FR");
  hideme.style.display = "none";
  var hideme = document.getElementById("ES");
  hideme.style.display = "none";
  var hideme = document.getElementById("EN");
  hideme.style.display = "none";

}
//Open the words
$(".abrir").click(function() {
  $(this).next(".contenu").toggle("slow");
  $(this).toggleClass("inline");


})

// $( '.c' ).each(function( index ) {
//   $(this).css({
//     left : ((Math.floor(Math.random() * ($('.carre').width()-400))+20)),
//        top : ((Math.floor(Math.random() * ($('.carre').height()-200))+20)),
//
//
//    //  Math.floor( Math.random() * max_width );
//    //            var y = Math.floor( Math.random() * max_height );
//
//  });
// });
//
// $(".butonsito").click(function() {
//  $( '.c' ).each(function( index ) {
//    $(this).css({
//      left : ((Math.floor(Math.random() * ($('.carre').width()-400))+20)),
//         top : ((Math.floor(Math.random() * ($('.carre').height()-200))+20)),
//
//
//     //  Math.floor( Math.random() * max_width );
//     //            var y = Math.floor( Math.random() * max_height );
//
//   });
// });
// });



$( '.c' ).each(function( index ) {
  $(this).css({
    left : ((Math.floor(Math.random() * ($('.carre').width()))/3)),
       top : ((Math.floor(Math.random() * ($('.carre').height()))/4)),


   //  Math.floor( Math.random() * max_width );
   //            var y = Math.floor( Math.random() * max_height );

 });
});


$(".butonsito").click(function() {
 $( ".c" ).each(function( index ) {
   $(this).css({
     left : ((Math.floor(Math.random() * ($('.carre').width()))/3)),
        top : ((Math.floor(Math.random() * ($('.carre').height()))/4)),


    //  Math.floor( Math.random() * max_width );
    //            var y = Math.floor( Math.random() * max_height );

  });
});
});
$(".c").draggable();
