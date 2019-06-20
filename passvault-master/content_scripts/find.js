var imported = document.createElement('script');
imported.src = 'https://code.jquery.com/jquery-3.4.1.js';
document.head.appendChild(imported);

console.log("yes");
var x = document.getElementsByTagName("form");
x[0].addEventListener("submit",function(evt){
    confirm("sure?");
})
console.log(x);
console.log("success");
