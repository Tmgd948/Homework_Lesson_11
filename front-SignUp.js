
//SignUp Page Handling
const signUpButton = document.getElementById("SignUp");
signUpButton.addEventListener("click", signUp);


function signUp() {
    const userName = document.getElementById("userN").value;
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;
    const password2 = document.getElementById("Password2").value;


    if (userName.length < 4 || userName.length > 8) {
        alert("Username must be between 4 & 8 characters...");
        return;
    }
    if (!email.includes("@")) {
        alert("Email must include @ Character...");
        return;
    }
    if (password.length < 5 || password.length > 10 || !password.includes("$")) {
        alert("Password must be 5-10 characters and include $ Character...");
        return;
    }
    if (password !== password2) {
        alert("Passwords must match...");
        return;
    }

    axios.post("http://localhost:3000/signUp", {
        Username: userName,
        Email: email,
        Password: password
    })
        .then(() => {
            window.location.href = "/HomePage.html"
        })
        .catch((response) => {
            console.log(response.status + "front.js")
        })
};