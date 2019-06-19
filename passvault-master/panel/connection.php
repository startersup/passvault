 <?php


$conn=mysqli_connect('mysql.hostinger.in','u678426119_alexa','Password@123','u678426119_alexa');

// Create connection
// $conn = mysqli_connect($servername, $username, $password);
// Check connection
if ($conn) {
    
    $email=$_REQUEST["mailid"];
$number=$_REQUEST["mobile"];
$pin=$_REQUEST["pin"];
    
   $sql = "INSERT INTO `alexa_skill_user` (`e_mail`, `mobile`, `pin`) VALUES ('$email', '$number', '$pin')";
 $user= mysqli_query($conn,$sql);
 
 $result["status"]="success";
 
 echo json_encode($result);
 
}

else
{
    echo("fail");
}
/**
 * , $dbname
 * 
 *   http://ishu.890m.com/myvaultextn/connection.php
$email="sdf";
$number="1244";
$pin="1234";
$sql = "INSERT INTO `alexa_skill_user` (`e_mail`, `mobile`, `pin`) VALUES ('$email', '$number', '$pin')";
 $user= mysqli_query($conn,$sql);
if ($user) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


    
        function fetchdata(){
        
       var u='http://ishu.890m.com/myvaultextn/connection.php';
 $.ajax({
  url:u,
  type: 'post',
  dataType: 'json',
  success: function(response){
   
   
   
  }
 });
}

$(document).ready(function(){
 setInterval(fetchdata,1000);
});
<script>
    
    
        function fetchdata(){
        
       var u='http://ishu.890m.com/myvaultextn/connection.php';
 $.ajax({
  url:u,
  type: 'post',
  dataType: 'json',
  success: function(response){
   
   
   
  }
 });
}



    
</script>

**/


?> 





