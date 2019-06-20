var userid=null;
var getting = browser.cookies.get({
  url: "http://www.passvault.com",
    name: "pv-user-id"
});
getting.then(update);

function addUser(){
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
function savepass(){
  var url = document.getElementById("url").value;
  var id = userid;
  var pass = document.getElementById("pass").value;
  var props = "url="+url+"&id="+id+"&pass="+pass;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.response);
      
    }
  };
  xhttp.open("POST", "http://ishu.890m.com/myvaultextn/savepass.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(props);
}

function update(cookie){
  if (cookie) {
    userid=cookie.value;
      document.getElementById("change").innerHTML='<input id="pass" class="controls" type="password" placeholder="Enter Password"  required ><br><input id="url" class="controls" type="text" placeholder="Set Intent ( Eg: Amazon )"  required > <br><button id="add" class="buttonadd">Add Credential</button>';
      document.getElementById("add").onclick = savepass;
  }else{
    document.getElementById("submit").onclick = addUser;
  }
}