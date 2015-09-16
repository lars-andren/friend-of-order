
$(function() {

  // Allows user to click Enter key in text field and it will submit the dialog
  $('#reportDialog').keypress(function(e) {
    if (e.keyCode == $.ui.keyCode.ENTER) {
      getResponse();
    }
  });

  var cancel = function() {
    $("#reportDialog").dialog("close");
  }

  var reportMail = $("#reporteeMail").text();
  var getResponse = function() {

    var answer;
    answer = $("#correction").val();

    $("#result").text(answer);
    $("#reportDialog").dialog("close");
  }

  var dialogOpts = {
    dialogClass : "no-close",
    height : 400,
    width : 400,
    scrollable : true,
    modal : true,
    closeOnEscape : true,
    buttons : {
      "Done" : getResponse,
      "Cancel" : cancel
    },
    autoOpen : false,
    show: {
      effect: "explode",
      duration: 500
    },
      hide: {
        effect: "slide",
        duration: 300

      }
  };

  $("#reportDialog").dialog(dialogOpts);
  $("#report").click(function() {
    $("#correction").val("");
    $("#reportDialog").dialog("open");
    $("#marked").text(getSelectionText());
    $("#reportee").text(reportMail);
  });
});


function getSelectionText() {
  var text = "";
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
    text = document.selection.createRange().text;
  }
  return text;
}

