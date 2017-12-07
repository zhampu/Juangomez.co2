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
  setTimeout(function() {
    mover();
  }, 500);
})
$(".c").draggable();
$('.swipebox').swipebox();
//randomize the images on load
function mover() {
  $(".c").each(function(index) {
    $(this).css({
      left: ((Math.floor(Math.random() * ($('.carre').width())) / 4)),
      top: ((Math.floor(Math.random() * ($('.carre').height())) / 5)),


    });
  });
}

// window.onload = function(){
//    setTimeout(function(){
//        mover();
//    }, 2000);
// };
// $(function() {
//     mover()
// });




// setTimeout(function () {
//     mover();
// }, 2000);


// window.setTimeout(function()
// {
//   mover();
// }, 1000);
