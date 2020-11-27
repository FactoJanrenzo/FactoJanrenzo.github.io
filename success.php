<?php
	$error_message="";
	
$link=mysqli_connect("localhost","root","","sample");
if($link==false){
	die("ERROR: Could not connect." .mysqli_connect_error());
}
$name=mysqli_real_escape_string($link,$_POST['fullname']);
$addr=mysqli_real_escape_string($link,$_POST['address']);
$no=mysqli_real_escape_string($link,$_POST['contact']);
$emailadd=mysqli_real_escape_string($link,$_POST['email']);
$username=mysqli_real_escape_string($link,$_POST['usern']);
$password=mysqli_real_escape_string($link,$_POST['pass']);

$sql="INSERT INTO registration(fullname,address,contact,email,username,password)
	VALUES('$name','$addr','$no','$emailadd','$username','$password')";
	if(mysqli_query($link,$sql)){
		echo "Your data is successfully added!";
	}
	else{
		echo "ERROR: Could not able to execute $sql." .mysqli_error($link);
	}
	mysqli_close($link);
?>