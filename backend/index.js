const express = require("express");
const cors = require("cors");
const axios = require("axios");

const PROJECT_KEY = "c6367a47-a722-40e5-9e7f-f277ba7b1b51"
const PRIVATE_KEY = "daaf37c4-36cf-4879-8e06-fb6d0be474de"
const app = express();
app.use(express.json())
app.use(cors({origin:true}))

app.post("/authenticate", async(req,res) => {
    const {username} = req.body;

    try {
        const response = await axios.put("https://api.chatengine.io/users/",
        {username:username, secret:username, first_name:username},
        { headers : {"Private-Key":PRIVATE_KEY}}
        );
        return res.status(response.status).json(response.data);
    }catch (error) {
        console.log(error);
        return res.status(error.response.status).json(error.response.data);
}
})

app.listen(3001);