//Entry-Page Handling
const startButton = document.getElementById("Start")
startButton.addEventListener("click", start)


function start() {
    const Fullname = document.getElementById("FullName").value

    if (Fullname.length >= 2) {
        fetch("http://localhost:3000/Entry-Page", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ Fullname: Fullname })
        })
            .then((response) => {
                if (response.ok) {
                    window.location.href = "/SignUp.html"
                } else {
                    console.log(response.status + "front.js")
                }
            })
    } else {
        alert("Full name must consist of at least 2 characters..")
    }
}

