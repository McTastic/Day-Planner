var today = $("#currentDay");
var rows = $(".form-control");
var currentTime = parseInt(moment().format("H"));
var saveBtn = $(".saveBtn");
var userInput1 = $(".9am");
var userInput2 = $(".10am");
var userInput3 = $(".11am");
var userInput4 = $(".12pm");
var userInput5 = $(".1pm");
var userInput6 = $(".2pm");
var userInput7 = $(".3pm");
var userInput8 = $(".4pm");
var userInput9 = $(".5pm");
var savedEvent;

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
  if (currentTime < rowHour){
    formRowEl.addClass("future");
  }
});

// TODO add local storage to store stuff and add event listener to save

function init(){
  userInput1.val(localStorage.getItem("SavedEvent1"));
  userInput2.val(localStorage.getItem("SavedEvent2"));
  userInput3.val(localStorage.getItem("SavedEvent3"));
  userInput4.val(localStorage.getItem("SavedEvent4"));
  userInput5.val(localStorage.getItem("SavedEvent5"));
  userInput6.val(localStorage.getItem("SavedEvent6"));
  userInput7.val(localStorage.getItem("SavedEvent7"));
  userInput8.val(localStorage.getItem("SavedEvent8"));
  userInput9.val(localStorage.getItem("SavedEvent9"));

}


saveBtn.on("click",function(){
  localStorage.setItem("SavedEvent1",userInput1.val());
  localStorage.setItem("SavedEvent2",userInput2.val());
  localStorage.setItem("SavedEvent3",userInput3.val());
  localStorage.setItem("SavedEvent4",userInput4.val());
  localStorage.setItem("SavedEvent5",userInput5.val());
  localStorage.setItem("SavedEvent6",userInput6.val());
  localStorage.setItem("SavedEvent7",userInput7.val());
  localStorage.setItem("SavedEvent8",userInput8.val());
  localStorage.setItem("SavedEvent9",userInput9.val());
});


function noDelaySetInterval(func, interval) {
  func();
  return setInterval(func, interval);
}
function displayTime() {
  today.text(moment().format("dddd MMMM Do, YYYY,  h:mm a"));
}
noDelaySetInterval(displayTime, 1000);

init();