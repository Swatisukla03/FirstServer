//server creation
const http=require("http");

const port=8081;
http
.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h4>Hello,this the fresh is from my new Server</h4>");
    res.end();
})

.listen(port,()=>{
    console.log(`My NodeJs server started on port ${port}`);
});