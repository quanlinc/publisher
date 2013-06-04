var app_name = process.env.OPENSHIFT_APP_NAME || 'local_development',
    host_url = process.env.OPENSHIFT_APP_DNS  || 'localhost',
    gear_id = process.env.OPENSHIFT_GEAR_UUID || 1,
    options = {};
 
require('nodefly').profile(
  '634c9e9a25d71c02a011e5abe272c30f', // <-- enter your nodefly dev key
  [ app_name,                                  // See http://nodefly.com/#howto 
    host_url,
    gear_id], // to identify multiple gears or processes (for scaled apps)
  options // optional
);


var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.write("test");
    res.end();
}).listen(8090);
console.log('Server running at http://127.0.0.1:8090/');
