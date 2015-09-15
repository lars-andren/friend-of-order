//Initialize dialog
$("#dialog").dialog({
  autoOpen: false,
  show: {
    effect: "blind",
    duration: 1000
  },
  hide: {
    effect: "explode",
    duration: 1000
  }
});

$(document).ready(function(){
//  $("#dalog").hide();

    $("#opener").click(function () {
      alert("stuff");
      $("#dialog").dialog("open");
    });
});

//
//function getSelectionText() {
//  var text = "";
//  if (window.getSelection) {
//    text = window.getSelection().toString();
//  } else if (document.selection && document.selection.type != "Control") {
//    text = document.selection.createRange().text;
//  }
//  alert(text);
//  return text;
//}

//When the button in the form is clicked, take the input value and set that as the value of `.myTarget`
$('.formSaver').on('click', function () {
  $('.myTarget').text($('.myInput').val());
  $("#dialog").dialog('close');
});

