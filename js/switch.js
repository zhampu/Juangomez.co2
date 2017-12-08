//languages
function ES() {
  $("#EN, #FR, #ES").hide();
  $("#ES").show();
}

function FR() {
  $("#EN, #DE, #ES").hide();
  $("#FR").show();
}

function EN() {
  $("#FR, #DE, #ES").hide();
  $("#EN").show();
}

function DE() {
  $("#EN, #FR, #ES").hide();
  $("#DE").show();
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
