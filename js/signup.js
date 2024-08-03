
function validate(){
    var user= document.getElementById('user').value;
    var mail= document.getElementById('mail').value;
    var pass= document.getElementById('pass').value;
    var confirm= document.getElementById('confirm').value;
    var result= document.getElementById('result');

    result.setAttribute('class', 'alert alert-danger text-center p-2');
    result.style.transition= 'all 1s linear';

    if (user == '' && mail == '' && pass == '' && confirm == ''){
        result.innerHTML= "Please enter valide data!";
        return false;
    }else if (user.length <5 || user.length > 15){
        result.innerHTML = "only from 5 characters to 15 characters";
        return false;
    }else if(user.charAt(0) === user.charAt(0).toUpperCase()){
        result.innerHTML= "please enter small character in the username"; //to test if the first character is capital or small.
        return false;
    }else if (mail.indexOf('@gmail.com') == -1){
        result.innerHTML= 'Please enter your Email Host';
        return false;
    }else if (pass.length < 8){
        result.innerHTML = "Password must be 8 characters at least!";
        return false;
    }else if (pass != confirm){
        result.innerHTML= "The password doesn't match";
        return false;
    }else {
       return true;
    }
}

