let fname = document.getElementById("fname");

console.log(fname);

let pname = document.getElementById("pname");
let lname = document.getElementById("lname");

let correctFname = fname.substr(0, 1).toUpperCase() + fname.substr(1).toLowerCase();
let correctPname = pname.substr(0, 1).toUpperCase() + pname.substr(1).toLowerCase();
let correctLname = lname.substr(0, 1).toUpperCase() + lname.substr(1).toLowerCase();

//console.log(correctFname);