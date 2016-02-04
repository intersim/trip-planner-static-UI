var hotelChoice;
var dayChoice;
var activityChoice;
var removeBtn = "<button class='btn btn-danger rm-btn' type='submit'>x</button>";

function hotelSelectFunc() {
    hotelChoice = $("#hotel-select").val();
    //Print to console log to check...
    console.log(hotelChoice);
    $("#hotel-list").append("<li>" + hotelChoice + removeBtn + "</li>");
}

function restSelectFunc() {
    restChoice = $("#rest-select").val();
    //Print to console log to check...
    console.log(restChoice);
    $("#rest-list").append("<li>" + restChoice + removeBtn + "</li>");
}

function activitySelectFunc() {
    activityChoice = $("#activity-select").val();
    //Print to console log to check...
    console.log(activityChoice);
    $("#activity-list").append("<li>" + activityChoice + removeBtn + "</li>");
}

function daySelectFunc() {
    dayChoice = $(this).text();
    console.log(dayChoice);
}

function daySubmitFunc() {
    $("#day-header").empty().append("<h1>Day " + dayChoice + removeBtn + "</h1>");
    console.log(dayChoice);
}

function removeFunc () {
  $(this).parent().remove();
  console.log("clicked remove!");
}

$("#hotel-submit").on("click", hotelSelectFunc);
$("#rest-submit").on("click", restSelectFunc);
$("#activity-submit").on("click", activitySelectFunc);


$(".day-btn").on("click", daySelectFunc);
$("#day-submit").on("click", daySubmitFunc);

$("#hotel-list").on("click", ".rm-btn", removeFunc);
$("#rest-list").on("click", ".rm-btn", removeFunc);
$("#activity-list").on("click", ".rm-btn", removeFunc);

$("#day-header").on("click", ".rm-btn", removeFunc);