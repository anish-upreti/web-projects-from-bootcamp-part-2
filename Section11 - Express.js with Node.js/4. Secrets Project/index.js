
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userAutherized = false;

app.use(bodyParser.urlencoded({extended:true}));

function passwordCheck(req,res,next){
    const password = req.body["password"];
    if (password === "NoPassword"){
        userAutherized = true;
    }
    next();
}
app.use(passwordCheck);

app.post("/check", (req,res) => {
  if (userAutherized){
    res.sendFile(__dirname + "/public/secret.html");
  }
  else{
    res.redirect("/");
  }
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
