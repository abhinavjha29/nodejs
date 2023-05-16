//new file
const http = require("http") ;
const server = http.createServer((req , res)=>{
     res.write("<html>") ;
     res.write("<head><title>My first join</title></head>") ;
     res.write("<body>Hello to my node world</body>") ;
     res.write("</html>") ;
     res.end() ;
}) ;
server.listen(4000) ;

