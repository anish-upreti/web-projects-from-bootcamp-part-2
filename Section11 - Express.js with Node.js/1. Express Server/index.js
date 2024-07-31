import express from 'express';
const app = express();
const port = 3000;


app.get("/", (req,res) => {
    res.send("<h1>Namaste from the Express and Node!</h1>");
});

app.get("/contact", (req,res) => {
    res.send("<h1>Contact Us </h1> ");
});

app.get("/about", (req,res) => {
    res.send("<h1> About Us </h1>");
});

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});