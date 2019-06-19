var x = document.getElementsByTagName("form");
console.log("i startted");
for(tags in x){
    tags.addEventListener("submit",function(){
        console.log("wow");
        alert("Success");
    });
}