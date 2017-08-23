<?php
       include_once('db.php');
	   
	   $username = mysql_real_escape_string($_POST["username"] );
       $password = mysql_real_escape_string( md5($_POST["pass"]) );
       $fname = mysql_real_escape_string($_POST["fname"] );
       $lname = mysql_real_escape_string($_POST["lname"] );
       
   if( empty($username) || empty($password) )
	  {
	  	echo "Username and Password are Required";
		exit();
	  }
 
 
 $res = mysql_query("SELECT username FROM users WHERE username='$username'");
	  $row = mysql_fetch_row($res);
 
	  if( $row > 0 )
	    echo "Username $username has already been taken";
	  else
	  {
   
   
    $sql = "INSERT INTO users VALUE('', '$username', '$password', '$fname', '$lname')";
	  if(mysql_query($sql)) 
       echo "Inserted Succesffully";
	   else
	     echo"Inserted fail";
	}
?>