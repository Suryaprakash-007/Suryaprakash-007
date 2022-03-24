
const http = require ('http')

const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end('hello welcome to our page')
    }
    if(req.url ==='/about'){
        res.end('here is our short history') 
    }
    res.end(
        '<h1>OOps!</h1><p>We cant help u</p><a href="/">back to home page</a>'
       
    )
})


server.listen(5000)