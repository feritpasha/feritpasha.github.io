
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-logo.png') {
      myImage.setAttribute('src','images/firefox.png');
    } else {
      myImage.setAttribute('src','images/firefox-logo.png');
    }
}


let myVariable="BoB";
myVariable="Steven";
console.log(myVariable==="Bob");
console.log(myVariable);
console.log(!(myVariable==="Jake"));
console.log(myVariable!=="Chris");
let randomArray=["apple",17,true,8];
console.log(randomArray[1]);

//This is commen in single line
/*This is also comment written in
seperate lines*/

console.log("Elon"+"Musk");


function multiply (num1,num2){
let result=num1*num2;
return result; 

}

console.log(multiply(5,9));

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}


myButton.onclick = function() {
  setUserName();
}