<?php
    $username = $_POST['username'];
    $password = $_POST['password'];

    //连接数据库
    $con = mysqli_connect('localhost','root','','login');
    if ($con->connect_error) {
        die('连接数据库失败');
    }
    $sql = "SELECT `username`, `password` FROM `user`";
    $result = mysqli_query($con, $sql);
    header("Content-Type:text/html; charset=utf-8");
    $ec = array ("result"=>false,"reason"=>"登录失败");

    if($result->num_rows > 0) {
        //得到一个关联数组fetch_assoc();
        //每次调用$result->fetch_assoc()都会返回一条数据行
        //可以循环遍历当所有数据都被提取完就会返回空
        while ($ret = $result->fetch_assoc()) {
                if(($password == $ret["password"]) && ($user == $ret["user"])) {
                    $ec["result"] = true;
                    $ec["reason"] = "登录成功";
                    echo json_encode($ec);
                    return;
                }

        }
        echo json_encode($ec);


    }

?>
