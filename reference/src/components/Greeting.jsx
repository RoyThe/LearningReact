import React from "react";

var today = new Date();
var time = today.getHours();

let greeting;
if (time < 18){
greeting = "Good day";
}
else {
greeting = "Good evening"
}


function Greeting() {
     return <p> {greeting} It is currently {time}:00 hours </p>;

}

export default Greeting