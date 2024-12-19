
require('dotenv').config();
const { config } = require('dotenv')
const express = require ('express')
    const app =express()
    const port = 5000

    app.get('/', (req,res) => {
        res.send('hello word')
    })

    app.get ('/login',(req,res)=>{
        res.send(content())
    })
app.listen( port,() =>{
    console.log('Example app listneing on port ${port}')
})

function content() {
    const heading = "<h1>this is the heading</h1>";
    const para = "<p>this is para</p>";
    
    return `<div>${heading}${para}</div>`;
}