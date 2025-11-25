function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const wrongDiv = document.querySelector(".wrong");
    const wrong = document.getElementById("wrong");
    
    if (username === "admin" && password === "123") {
        alert("Login Successfully");
        wrongDiv.style.display = "none";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    } else {
        wrong.textContent = "Invalid Username and/or Password";
        wrongDiv.style.display = "block";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
}