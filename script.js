var lnkLogOut = document.querySelector("#lnkLogOut");
var lnkLogIn = document.querySelector("#lnkLogIn");

lnkLogIn.addEventListener("click", function() {
    clearSections();
    sectionLogIn.style.display = "block";
});

lnkLogOut.addEventListener("click", function() {
    firebase.auth().signOut();
    activateLoggedOut();
});

var sectionLogIn  = document.querySelector("#login"); 

var btnLogIn = document.querySelector("#btnLogIn");

btnLogIn.addEventListener("click", function() {
    var email = document.querySelector("#emailLogin").value;
    var pass = document.querySelector("#passLogin").value;
    if (email.length<6 || pass.length <3) {
        alert("Invalid login data");
    } else {
        // We are ok to login the user
        loading(true);
        firebase.auth().signInWithEmailAndPassword(email, pass).then(function(){
            clearSections();
            activateLoggedIn();
            loading(false);
        })
        .catch(function(error){
            alert(error.message);
            loading(false);
        })
    }
});

function clearSections(){
    var sections = document.querySelectorAll("main>section");
    for(var section of sections){
        section.style.display = "none"
    }
}

function activateLoggedIn() {
    document.querySelector("#loggedIn").style.display = "block";
    document.querySelector("#loggedOut").style.display = "none";
 }

 function activateLoggedOut() {
    document.querySelector("#loggedIn").style.display = "none";
    document.querySelector(".loggedOut").style.display = "block"; 
 }

 function loading(on) {
    var loading = document.querySelector("#loading");
    if (on) {
        loading.style.display = "block";
    } else {
        loading.style.display = "none";
    }
}

