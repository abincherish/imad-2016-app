console.log('Loaded!');

var element=document.getElementById("main-text");
element.innerHTML="new value";

var img=document.getElementById('photo');
img.onClick = function () {
    img.style.marginLeft = '100px';
};