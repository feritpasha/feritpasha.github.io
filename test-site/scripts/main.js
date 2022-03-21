//This chunk of code is for making image change on click

let myImage = document.querySelector('logo');

myImage.addEventListener('click',()=> {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-logo.png') {
      myImage.setAttribute('src','images/firefox.png');
    } else {
      myImage.setAttribute('src','images/firefox-logo.png');
    }
})

                         
//And this code is for changing h1 with change user button
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.addEventListener('click',()=> {
  setUserName();
})
   
                          
 //This will help us to add lists                        
 const list=document.querySelector('.xususiyyet')
 const addMore=document.querySelector('.addList')
addMore.addEventListener('click',()=>{
  const listItem = document.createElement('li');
  const listContent = prompt('What else can be added to my list?');
  listItem.textContent = listContent;
  list.appendChild(listItem); 
})

/*Note to me from past. Lists that I add should appear after this sentence : 'Click on add more for adding your reasons.'
 Instead they go to the end of the page. This was working normal(the way i wanted) before i added 'add more' feature.
 It has something to do with javascript. I'm writing this to make my page better by finding what isn't working the way i wanted to*/



