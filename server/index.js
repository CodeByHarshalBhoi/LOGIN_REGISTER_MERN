const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 3000;
const User = require("./models/user");
const app = express();

app.use(express.json());
app.use(cors());

main()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

  async function main(){
    mongoose.connect("mongodb://127.0.0.1:27017/loginregister")
  }


app.post("/login", (req, res)=>{
    const {email, password} = req.body
    User.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("Record not exits")
        }
    })
})

  app.post("/register", async (req, res)=>{
    let bodyData = req.body;
    console.log(bodyData)
    let data = new User(bodyData)
    const userData = await data.save();
    res.send(userData);
  })

app.get("/", (req, res)=>{
    res.send("Welcome")
})

app.listen(PORT, () => {
  console.log("Server start on 3000 port");
});
