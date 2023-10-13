
// 信息验证
var getCode = document.querySelector('#code');
// console.log(getCode);
// 数字验证码

var timer;
getCode.onclick = function () {
    var index = 60;
    clearInterval(timer);
    timer = setInterval(function () {
        index--;
        var countdown = `${index}秒后重新发送`;
        getCode.innerHTML = countdown;
        if (index <= 0) {
            clearInterval(timer);
            getCode.innerHTML = '重新获取验证码';
        }
    }, 1000)
    alert('231011');
}

function form() {
    var number = document.querySelector('#number').value;
    var numCode = document.querySelector('#numCode').value;
    var password = document.getElementById("password").value;

    var repassword = document.getElementById("repassword").value;

    var numberRegex = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/;
    var codeText = ['231011', '3fv8'];
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,20}$/;

    if (!numberRegex.test(number)) {
        alert("请输入正确的手机号！");
        return false;
    }

    if (numCode != codeText[0]) {
        alert("请输入正确的验证码！");
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert("请输入正确的密码！至少一个小写字母、一个大写字母和一个数字的字符串，且长度在6到20之间（包含6和20）");
        return false;
    }

    if (password != repassword) {
        alert("两次密码不相同！");
        return false;
    }
    else {
        alert('提交成功！')
    }
}