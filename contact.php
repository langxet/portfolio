<?php

if(isset($_POST['submit'])){
  $name = $_POST['name'];
  $email = $_POST['email'];
  $comments = $_POST['comments'];
  
  $to = "YOUR EMAIL HERE";
  $subject = "New contact form message";
  $message = "A new message has been sent to you from $email \n
  Their message was $comments \n
  Their details: \n
  Name: $name \n
  Email: $email \n";
    if($name){
		if($email){
			if($comments){
				 mail($to, $subject, $message);
				 echo "Thanks, your email has been sent";
			}else{
				echo"You didn't fill out any comments";
			}
		}else{
			echo "<br />You didn't fill out any email<br />";
		}
		
		}else{
			echo"<br /> You didn't fill out your name<br />";
		}
		
		
		
	
	
	
	
}else{

?>
<form action="contact.php" method="POST">
Name:<br />
<input type="text" name="name" /><br /><br />
Email:<br />
<input type="text" name="email" /><br /><br />
Comments:<br />
<textarea cols="20" rows="10" name="comments"></textarea><br />
<input type="submit" value="Send Message" name="submit" />
</form>



<?php
}
?>