/*
* @Author: Marte
* @Date:   2018-02-04 18:47:39
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-07 08:12:08
*/

'use strict';
var re_username = /^[1][3,4,5,7,8][0-9]{9}$/;
// var re_password = ;

$("#username").blur(function (){

    var username = $("#username").val();

    if (username==="") {
        document.querySelector('.men_err_msg').innerHTML = "用户名不能为空";
    }else if( re_username.test(username)){
        document.querySelector('.men_err_msg').innerHTML = "";
    }else{
        document.querySelector('.men_err_msg').innerHTML = "用户名必须为手机号";
    }
})
$("#password").blur(function(){
    var password = $("#password").val();
    // var val = document.querySelector('.men_err_msg').innerHTML;
    if (password==="") {
        document.querySelector('.men_err_msg').innerHTML = "请输入密码";
    }else if( password.length<6){
        document.querySelector('.men_err_msg').innerHTML = "用户名或密码错误";
    }

})
