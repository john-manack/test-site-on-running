let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/female-runners-racing.jpg') {
        myImage.setAttribute('src','images/female-legs-running.jpg');
    } else {
        myImage.setAttribute('src','images/female-runners-racing.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Running is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Running is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}