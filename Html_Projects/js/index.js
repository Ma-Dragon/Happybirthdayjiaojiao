/*
 * @Author: your name
 * @Date: 2022-04-27 19:07:37
 * @LastEditTime: 2022-04-27 19:12:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tiny-heart-master\birthday-mobile\js\index.js
 */
$("#login-button").click(function (event) {
    var userName = document.getElementById("userName").value;
    var pwd = document.getElementById("pwd").value;
    //设置用户名和密码
    if (userName == "彭梦娇" && pwd == "0410") {
      event.preventDefault();
      $("form").fadeOut(500);
      $(".wrapper").addClass("form-success");
      setTimeout(function () {
        this.location.href = "xihuan.html";
      }, 2000);
    } else {
      alert("Wrong Password!");
    }
  });