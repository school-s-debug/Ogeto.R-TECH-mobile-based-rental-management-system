
//passwordreset
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("resetform");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
const id = document.getElementById("id").value.trim();
const email = document.getElementById("email").value.trim();
const error=document.getElementById("error")

if(email==="" || id==="'"){
    alert("all filleds must be filled!")
    return;
}

 if (!email.includes("@") || !email.includes(".")) {
           alert("Enter valid email ")
            return;
        }


 if (id.length < 6) {
            alert("Enter valid ID number ")
            return;
        }

  document.getElementById("popup2").style.display = "flex";

  
         });
});

function closep() {
    document.getElementById("popup2").style.display = "none";
    document.getElementById("response").innerText = "";
}

function verify() {
    let code = document.getElementById("code").value;
   
    let error = document.getElementById("error");

    if (code === "" ) {
        alert("OTP code is required!");
    } else if (code.length < 5) {
         alert(" Invalid OTP code!");
    } else {
       
         alert  ( "Verification successful! You can proceed to update your new password.");
         window.location.href="newpassword.html"
    }
}




document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("newpasswordform");
    const error = document.getElementById("error");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const pass1 = document.getElementById("pass1").value.trim();
        const pass2 = document.getElementById("pass2").value.trim();

        if (pass1 === "" || pass2 === "") {
            alert("All fields must be filled!");
            return;
        }

        if (pass1.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        if (pass1 !== pass2) {
            alert("Passwords do not match!");
            return;
        }

        alert("Password updated successfully");
    });
});

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("commentform");
    const error = document.getElementById("error");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const comments = document.getElementById("comments").value.trim();
        const email = document.getElementById("email").value.trim();
         const number = document.getElementById("number").value.trim();
 if (comments=== "") {
            alert("You have not filled any comment!");
            return;
        }

 if ((emailfilled && number) || (!emailfilled && !numberfilled)){
     e.preventDefault();
            alert("please fill in either your email or password!");
            return;
        }
        alert("Thanks for your feedback.we will respond within 24hrs via your email or phone number")
// if email=== "") {
            //alert("Either your email or phone number is required! it will be used to give you response");
            //return;
        //}


