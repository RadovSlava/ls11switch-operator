var day = prompt("Please eneter youre day");

 if (day === "Monday") {
     alert("Working day");
 } else if (day === "Tusday") {
     alert("Working day");
 } else if (day === "Wednesday") {
     alert("Working day");
 } else if (day === "Thursday") {
     alert("Working day");
 } else if (day === "Friday") {
     alert("Working day");
 }

switch (day) {
    case "Saturday":
        alert("a working day for some people");
        break;

    case "Sunday":
        alert("Weekend");
        break;

    default:
        alert("Can not define, please try another value");
        break;
}