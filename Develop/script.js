var displayDate = function() {
    var date = moment().format("dddd, MMMM Do");

    var display = $("#currentDay")
      .text(date);
};
displayDate();

var nine = document.getElementsByClassName("9");
var ten = document.getElementsByClassName("10"); 
var eleven = document.getElementsByClassName("11");
var twelve = document.getElementsByClassName("12");
var one = document.getElementsByClassName("13");
var two = document.getElementsByClassName("14");
var three = document.getElementsByClassName("15");
var four = document.getElementsByClassName("16");
var five = document.getElementsByClassName("17");

var setTime = function() {
    var time = moment().hour();

    switch(time) {
        case 1, 2, 3, 4, 5, 6, 7, 8:
          $(nine).addClass("future");
          $(ten).addClass("future");
          $(eleven).addClass("future");
          $(twelve).addClass("future");
          $(one).addClass("future");
          $(two).addClass("future");
          $(three).addClass("future");
          $(four).addClass("future");
          $(five).addClass("future");
        break;
        case 9:
          $(nine).addClass("present");
          $(ten).addClass("future");
          $(eleven).addClass("future");
          $(twelve).addClass("future");
          $(one).addClass("future");
          $(two).addClass("future");
          $(three).addClass("future");
          $(four).addClass("future");
          $(five).addClass("future");
        break;
        case 10:
          $(nine).addClass("past");
          $(ten).addClass("present");
          $(eleven).addClass("future");
          $(twelve).addClass("future");
          $(one).addClass("future");
          $(two).addClass("future");
          $(three).addClass("future");
          $(four).addClass("future");
          $(five).addClass("future");
        break;
        case 11:
          $(nine).addClass("past");
          $(ten).addClass("past");
          $(eleven).addClass("present");
          $(twelve).addClass("future");
          $(one).addClass("future");
          $(two).addClass("future");
          $(three).addClass("future");
          $(four).addClass("future");
          $(five).addClass("future");
        break;
        case 12:
          $(nine).addClass("past");
          $(ten).addClass("past");
          $(eleven).addClass("past");
          $(twelve).addClass("present");
          $(one).addClass("future");
          $(two).addClass("future");
          $(three).addClass("future");
          $(four).addClass("future");
          $(five).addClass("future");
        break;
        case 13:
          $(nine).addClass("past");
          $(ten).addClass("past");
          $(eleven).addClass("past");
          $(twelve).addClass("past");
          $(one).addClass("present");
          $(two).addClass("future");
          $(three).addClass("future");
          $(four).addClass("future");
          $(five).addClass("future");
        break;
        case 14:
          $(nine).addClass("past");
          $(ten).addClass("past");
          $(eleven).addClass("past");
          $(twelve).addClass("past");
          $(one).addClass("past");
          $(two).addClass("present");
          $(three).addClass("future");
          $(four).addClass("future");
          $(five).addClass("future");
        break;
        case 15:
          $(nine).addClass("past");
          $(ten).addClass("past");
          $(eleven).addClass("past");
          $(twelve).addClass("past");
          $(one).addClass("past");
          $(two).addClass("past");
          $(three).addClass("present");
          $(four).addClass("future");
          $(five).addClass("future");
        break;
        case 16:
          $(nine).addClass("past");
          $(ten).addClass("past");
          $(eleven).addClass("past");
          $(twelve).addClass("past");
          $(one).addClass("past");
          $(two).addClass("past");
          $(three).addClass("past");
          $(four).addClass("present");
          $(five).addClass("future");
        break;
        case 16:
          $(nine).addClass("past");
          $(ten).addClass("past");
          $(eleven).addClass("past");
          $(twelve).addClass("past");
          $(one).addClass("past");
          $(two).addClass("past");
          $(three).addClass("past");
          $(four).addClass("past");
          $(five).addClass("present");
        break;
        default:
          $(nine).addClass("past");
          $(ten).addClass("past");
          $(eleven).addClass("past");
          $(twelve).addClass("past");
          $(one).addClass("past");
          $(two).addClass("past");
          $(three).addClass("past");
          $(four).addClass("past");
          $(five).addClass("past");
        break;
    }
}

setTime();

$(".saveBtn").on("click", function() {
    var text = $(this).siblings('.textarea')[0].textContent;
    var key = $(this).attr("id");
    localStorage.setItem(key, text);
});



