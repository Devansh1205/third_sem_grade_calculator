import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    res.render("home.ejs");
})

app.post("/", (req, res)=>{
    let java = parseInt(req.body["java_marks"], 10);
    let DAA = parseInt(req.body["DAA_marks"], 10);
    let COA = parseInt(req.body["COA_marks"], 10);
    let maths = parseInt(req.body["maths_marks"], 10);
    let SE = parseInt(req.body["SE_marks"], 10);
    let grade = ((java*4)+(DAA*4)+(COA*3)+(maths*4)+(SE*4))/21;
    res.render("home.ejs", {
        final_grade : grade,
    })
})


app.listen(port, ()=>{
    console.log(`Server is running on port number ${port}`);
})
