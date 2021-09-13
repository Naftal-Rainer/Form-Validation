function validateForm(){
    var x = document.forms['myForm']['name'].value;
    var m = document.forms['myForm']['mail'].value;
    var d = document.forms['myForm']['passw'].value;
    if(x == null || x == ""){
        alert("Name must be filled out");
        return false;
    }
    else if(m == null || m == ""){
        alert("Email must be provided");
        return false;
    }
    else if(d.length < 6 || d == ""){
        alert("Password too short");
        return false;
    }
}



function myFunction() {
    var x = document.getElementById("fnames");
    x.value = x.value.toUpperCase();
  }

  c = document.getElementById('terms').value
  console.log(c)