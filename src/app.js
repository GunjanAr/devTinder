const express = require('express');
const app = express();

app.use('/user',(req,res) => {
    res.send("HAHAHAHAH")
})

//This will match only GET requests to the 
// /user route
app.get("/user",(req,res)=>{
    res.send({firstName: 'Gunjan',
        lastName: 'Arora'
    })
})

app.post("/user",(req,res)=>{
    //Saving Data to the database
    res.send('Data has been saved to the database');

})

app.delete("/user",(req,res)=>{
    //Deleting the user from the database
    res.send('User has been deleted from the database');
})

//this will match all the HTTP methods 
// (GET, POST, PUT, DELETE, etc.) for the 
// /test route
app.use("/test",(req,res)=>{
     res.send('Hello from the express server');
})

app.listen(7777,()=>{
    console.log('Server is sucessfully running on port 7777');
})