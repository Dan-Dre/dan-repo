window.addEventListener("load", function(){

var btnLogIn = document.querySelector("#btnLogIn");
var loggedIn = document.querySelector("#loggedIn");
var sectionMain = document.querySelector("#sectionMain");


btnLogIn.addEventListener("click", function(){
    var email = document.querySelector("#emailLogin").value;
    var pass = document.querySelector("#passLogin").value;
    if (email.length<6 || pass.length <3) {
        alert("Invalid login data");
    } else{
        firebase.auth().signInWithEmailAndPassword(email, pass).then(function(){
        
            loggedIn.style.display = "block";
            sectionMain.style.display = "none";
            alert("logIn Successful");
            displayName();
        })
        .catch(function(error){
            alert("There is no user with that information");
        })
    }
})

});

var footer = document.querySelector("footer");
document.querySelector("#lnkNav").addEventListener("click", function(){
    footer.className = "visible";
})
document.querySelector("#close").addEventListener("click", function(){
    footer.className = "hidden"
})

function displayName(){
    var email = document.querySelector("#emailLogin").value;
    var span = document.querySelector("article span");
    span.innerHTML = email;
}