import express from "express";
import cors from "cors";
import fs from "fs";
import { json } from "stream/consumers";

const app = express();
const port = 3000;
app.use(cors());

app.use(express.static('./')); // Serves files from current directory

app.use(express.json()); // Converts/Parses json object into JavaScript object

//Entry-Page
app.post("/Entry-Page", (req, res) => {
    const user = { Fullname: req.body.Fullname };

    fs.writeFileSync("./UserData.txt", JSON.stringify(user)); //+ ",\n");

    console.log(req.body.Fullname + " Saved!");

    res.send("OK");
});

//SignUp-page
app.post("/signUp", (req, res) => {
    const user = JSON.parse(fs.readFileSync("./UserData.txt", "utf-8"));

    Object.assign(user, req.body);

    fs.writeFileSync("./UserData.txt", JSON.stringify(user));

    console.log("Signup data saved!");

    res.send("OK");
});

//User info
app.get("/home", (req, res) => {
const userData = fs.readFileSync("./UserData.txt", "utf-8");

const user = JSON.parse(userData);

res.json(user);
});



app.listen(port, () => {
    console.log("Server is ready at http://localhost: " + port);
});