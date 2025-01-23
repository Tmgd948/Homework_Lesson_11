
const newDiv = document.createElement("div")
document.body.appendChild(newDiv)

const newH1 = document.createElement("h1")
newDiv.appendChild(newH1)

axios.get("http://localhost:3000/home")
    .then((response) => {
        newH1.innerText = "Hello, " + response.data.Fullname + "!"
    })
    .catch((error) => {
        newH1.innerText = "Something Went Wrong..."
        console.log(error)
    });

