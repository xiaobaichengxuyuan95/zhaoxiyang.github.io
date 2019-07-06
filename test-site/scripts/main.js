let myImage = document.querySelector('img');

myImage.onclick = function(){
    let myArc = myImage.getAttribute('src');
    if(myArc ==='images/firefox-icon.png'){
        myImage.setAttribute('src','images/firefox2.png');
    }else{
        myImage.setAttribute('src','images/firefox-icon.png');
    }
}

function setHeading(name){
    let myHeadimg = document.querySelector('h1');
    myHeadimg.textContent = 'Mozilla 酷毙了，'+name+'!';

}
function setUserName(){
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name',myName);
    setHeading(myName);
}

let storedName = localStorage.getItem(name);
if (!storedName) {
    setUserName();
}else{
    setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;