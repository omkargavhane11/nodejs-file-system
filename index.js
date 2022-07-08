const fs = require("fs");

// creating .txt file with current date-time stamp.
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let month = months[d.getMonth()];
let day = weekday[d.getDay()];
let date = d.getDate();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();

let dateTime = `${date}${month}-${hours}hrs${minutes}mins${seconds}sec`;
let currentTime = `${hours}hrs-${minutes}mins-${seconds}sec`

fs.writeFile(`./textfolder/${dateTime}.txt`, `${currentTime}`, (err) => {
    console.log(`${dateTime} file created`);
})


// Reading files
fs.readdir("./textfolder", (err, files) => {
    files.forEach((fileName) => {
        console.log("file ➡  " + fileName)
    });
});