var displayDate = function() {
    var date = moment().format("dddd, MMMM Do");

    var display = $("#currentDay")
      .text(date);
};
displayDate();

var setTime = function() {
    
}