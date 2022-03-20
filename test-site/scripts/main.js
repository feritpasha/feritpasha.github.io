//This chunk of code is for making image change on click

let myImage = document.querySelector('img');

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
 const list=document.createElement('ul')
 document.body.appendChild(list);
.addList.addEventListener('click',()=>{
  const listItem = document.createElement('li');
  const listContent = prompt('What content do you want the list item to have?');
  listItem.textContent = listContent;
  list.appendChild(listItem); 
})

                          



