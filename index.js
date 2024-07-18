import express from "express";
const app = express();
const port = 3000;
app.use(express.static("public"));
app.get("/", (req , res)=>{
    res.render('home.ejs')
})
app.get("/about" , (req, res)=>{
    res.render("about.ejs")
})
app.get("/services" , (req, res)=>{
    res.render("services.ejs")
})
app.get("/contact" , (req, res)=>{
    res.render("contact.ejs")
})
app.listen(port , ()=>{
    console.log(`Server started at port ${port}`);
})