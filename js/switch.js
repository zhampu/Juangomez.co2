//Open the words


$(".abrir").click(function() {
    $(this).next(".contenu").toggle("slow");
    $(this).toggleClass("inline");
    setTimeout(function() {
        mover();
    }, 500);
});


$( "span" ).click(function() {
  $( ".abrir" ).each(function() {
    $(this).toggleClass("inline");
    $(this).next(".contenu").toggle("slow");
    setTimeout(function() {
        mover();
    }, 500);
  });
});


//languages
function ES() {
  $('#french,#english,#german').css('font-family', 'IB');
  $('#espanol').css('font-family', 'IBH');
    $("#EN, #FR, #ES").hide();
    $("#ES").show();
}

function FR() {
  $('#espanol,#english,#german').css('font-family', 'IB');
  $('#french').css('font-family', 'IBH');
    $("#EN, #DE, #ES").hide();
    $("#FR").show();

}

function EN() {
  $('#espanol,#french,#german').css('font-family', 'IB');
  $('#english').css('font-family', 'IBH');
    $("#FR, #DE, #ES").hide();
    $("#EN").show();
}

function DE() {
  $('#espanol,#english,#french').css('font-family', 'IB');
  $('#german').css('font-family', 'IBH');
    $("#EN, #FR, #ES").hide();
    $("#DE").show();
}




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
};
