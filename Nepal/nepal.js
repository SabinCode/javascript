//Dom Document Object Model(API)
// An interface for changing the content of a page

// console.dir(document );
// console.log(document.title);
// console.log(document.URL);
// document.titile = "Dom manipulation again";
// document.location ="https://www.google.com"
// document.body.style.backgroundColor = "orange";
// document.getElementById("myDiv").innerHTML="Hello"

// Hexadecimal uses 16 digits: 0-9 and A-F, where A stands for 10, B for 11, up to F which stands for 15.
//This initializes a variable color with the string "#". This will be the beginning of our color code since all hex colors start with #
// The reason it runs 6 times is that a hex color code is 6 characters long after the #, with two characters each for red, green, and blue.

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    box.addEventListener('click', function(){
        box.style.backgroundColor  = getRandomColor();
    });
});