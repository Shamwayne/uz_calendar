function ajax_post(){

var getday = document.getElementById("dateval");
var checkday = getday.value ;

switch (checkday){
  case "monday":
    schedule = MondayArry;
    break;

  case "tuesday":
    schedule = TuesdayArry;
    break;

  case "wednesday":
    schedule = WednesdayArry;
    break;

  case "thursday":
    schedule = ThursdayArry;
    break;

  case "friday":
    schedule = FridayArry;
    break;

  default:
    schedule = ExtrasArry;
}

myFunction(schedule);

  function myFunction(arr) {
    var out = "<ul class='subjects'>";
    var i;
    for(i = 0; i < arr.length; i++) {
      out += '<li><label class="time"> ' + arr[i].time + '</label> ' +
      arr[i].subname + ' </li><br>';
    }
    out += "</ul>"
    document.getElementById("schedule-display").innerHTML = out;
  }
}
