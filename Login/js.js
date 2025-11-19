function login() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const wrong = document.getElementById("wrong");

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === "admin" && password === "123") {
        alert("Login Successfully");
        wrong.textContent = "";
        let username = document.getElementById("username").value = "";
        let password = document.getElementById("password").value = "";
    } 
    if (username !== "admin" || password !== "123") {
        wrong.textContent = "Invalid Username and/or Password";
        let username = document.getElementById("username").value = "";
        let password = document.getElementById("password").value = "";
    }
}