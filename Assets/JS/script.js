var today = $("#currentDay");
var rows = $(".form-control");
var currentTime = parseInt(moment().format("H"));

Array.from(rows).forEach((formRow) => {
  var rowIdString = formRow.id,
    rowHour;
  // if (rowIdString) {
    rowHour = parseInt(rowIdString);
  // }
  var formRowEl = $(formRow)
  if(currentTime === rowHour){
  formRowEl.addClass("present");
  }
  if(currentTime > rowHour){
    formRowEl.addClass("past");
    formRowEl.prop("disabled", true);

  }
  else{
    formRowEl.addClass("future");
  }
});

// TODO add local storage to store stuff and add event listener to save

function noDelaySetInterval(func, interval) {
  func();
  return setInterval(func, interval);
}
function displayTime() {
  today.text(moment().format("dddd MMMM Do, YYYY,  h:mm a"));
}
noDelaySetInterval(displayTime, 1000);
