var sys=require('util');
var http=require('http');
http.createServer(function(req,res){
    res.writeHeader(210,{"Content-Type":"Text/html"});
    res.write("Hello World") ;
    res.end();
}).listen(8080);
sys.puts("Server Running....");