// $(document).ready(function() {
//     // Optimalisation: Store the references outside the event handler:
//     var $window = $(window);
//
//     function checkWidth() {
//         var windowsize = $window.width();
//         if (windowsize > 440) {
//           $(".abrir").click(function() {
//               $(this).next(".contenu").toggle("slow");
//               $(this).toggleClass("inline");
//               setTimeout(function() {
//                   mover();
//               }, 500);
//           });
//         }
//         else if (windowsize < 440) {
//           $(".abrir").click(function() {
//               $(this).next(".contenu").toggle("slow");
//               $(this).toggleClass("inline");
//
//           });
//         } {
//
//         }
//     }
//     // Execute on load
//     checkWidth();
//     // Bind event listener
//     $(window).resize(checkWidth);
// });


$(".abrir").click(function() {
    $(this).next(".contenu").toggle("slow");
    $(this).toggleClass("inline");
    setTimeout(function() {
        mover();
    }, 500);
});
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
