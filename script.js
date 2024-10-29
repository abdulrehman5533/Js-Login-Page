function batman() {
var user = document.getElementByI("username").value;
var pass = document.getElementByI("password").value;

var validusername = "Rehman5533"
var validpassword = "Sicl@3241"
 var resultdiv = document.getElementById("msg");

 if (user === validusername && pass === validpassword){
    resultdiv.innerHTML = "<span class = 'text-success'>Login Successfull"
 } else {
    alert('Password is Incorrect Please FuckOff');
 }



}