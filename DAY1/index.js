const http =require('http');

http.createServer((req,res)=>{
res.write("HELLO WORLD");
res.end();
}).listen(8000);