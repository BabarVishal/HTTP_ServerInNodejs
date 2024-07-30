const http = require("http");
const fs = require("fs");
const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: new req Receive!\n`
  fs.appendFile("log.txt", log, (err, data) => {
    switch(req.url){
        case "/":
            res.end("HomePage");
            break;
        case "/about": 
        res.end("Hii i Am about Page!");
        break;
        default:
            res.end("404 not Found!")
    }
  })
 
})

myServer.listen(3000, () => console.log("Server has stated!"));