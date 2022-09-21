
var voteChosen = 0;
var classToRemove = "main-container container-fluid d-flex flex-column justify-content-center align-items-center rounded-4";
var btnPressed = true;

$(".btn").click(function () {
  $("#"+voteChosen).removeClass("active");
  btnPressed = true;
  console.log($(this).attr("id"));
  voteChosen = $(this).attr("id");
  if (btnPressed == true) {
    $("#"+voteChosen).addClass("active");
    btnPressed=false;
  }
});


$("#submit").click(function () {
console.log($(this).attr("id"));
$("#theOne").removeClass(classToRemove);
$("#theOne").addClass("disappear");
$("#thank-container").removeClass("disappear");
$("#thank-container").addClass(classToRemove);
$("#thanking").text(voteChosen);
});

$("#back").click(function () {
$("#theOne").addClass(classToRemove);
$("#theOne").removeClass("disappear");
$("#thank-container").addClass("disappear");
$("#thank-container").removeClass(classToRemove);

});
