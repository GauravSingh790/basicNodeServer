import express from 'express';
const app = express();

app.get('/', (req,res)=>{
    res.send("Hey User, how are you doing");
});

app.get('/contact', (req,res)=>{
    res.send("Contact me on 9115511909");
});

app.get('/about', (req,res)=>{
    res.send("I am a good Computer Science Engineer");
});



const port = 3000;
app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});