<?php
//当前php页面的编码
header('Content-Type:text/html; charset=utf-8');
//链接数据库
$con = mysqli_connect('localhost','root','','login');
//指定往数据库添加数据的编码
mysqli_query($con,'set names utf8');

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "select * from user where username = '$username'";
$query = mysqli_query($con,$sql);

if($query && mysqli_num_rows($query)  ){
  echo '已经有人注册了';
}
else{
  $sql = "insert into user(username,password) values('$username','$password')";
  $query = mysqli_query($con,$sql);
  if($query){
    echo '注册成功！！！';
  }

}


?>
