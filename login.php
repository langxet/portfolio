<?php

$password="12345";
$username="ict4510";

$user=isset($_GET['username']) ? $_GET['username'] : $_POST['username'];
$pass=isset($_GET['password']) ? $_GET['password'] : $_POST['password'];

if ($user==$username && $pass==$password) {
  echo 'you have sucessful log on';
} else {
  echo 'incorrect information, please try again';
}



?>