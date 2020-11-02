var day1 = "Saturday";

function today(day){
  if (day == "Saturday"){
    console.log("Yup")
  } else if (day == "Sunday"){
    console.log("Close enough")
  } else if (day == "Friday"){
    console.log("Close enough")
  } else{
    console.log("Nope");
  }
}

today(day1);
