const express = require('express')
const app= express()
const port= 5555

app.get('/',(req,res) =>{
    res.send("Hello ini express")
})

app.post('/',(req,res) =>{
    res.send("Hello ini ilham anugrah")
})

app.get('/tehmanis',(req,res) =>{
    res.json({
        status: "OK",
        message: "Hallo ini ice tea",
    });
    // res.send('Hello ini teh manis biasa')
})

app.post('/tehmanis',(req,res) =>{
    res.send("Hello ini teh manis anget")
})

app.put('/tehmanis',(req,res) =>{
    res.send("Hello ini teh manis dingin")
})

app.delete('/tehmanis',(req,res) =>{
    res.send("Hello ini teh manis sudah habis")
})


app.listen(port,() => console.log(`Server running on port ${port}`))