



document.getElementById("submit").onclick = function(){
  var mail = document.getElementById("mailid").value;
  var number = document.getElementById("mobile").value;
  var pin = document.getElementById("pin").value;
  var props = "mailid="+mail+"&mobile="+number+"&pin="+pin;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data=JSON.parse(this.response);
        browser.cookies.set({
    url: "http://www.passvault.com",
    name: "pv-user-id",
    value: data.userid
  });
        console.log(decodeURIComponent(data.ui));
        document.getElementById("change").innerHTML=decodeURIComponent(data.ui);
    }
  };
  xhttp.open("POST", "http://ishu.890m.com/myvaultextn/connection.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(props);
}