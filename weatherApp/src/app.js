import express from "express";
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import path from "path";
import require from 'require'
require('http').createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Reloading Page Automatically</h1>');
  }).listen(3000);
  
const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const pubPath = path.join(__dirname,'../public')
// app.use(express.static(pubPath))
app.set('view engine', 'hbs');
location.reload(true)
app.use('/weather',(req, res)=>{
    res.send({
     city: 'Rasht',
     temp:26   
    })
})

app.listen(5000, ()=>{
    console.log('server is up on port 5000');
})
