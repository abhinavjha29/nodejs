//new file
const http = require("http") ;
const server = http.createServer((req , res)=>{
    const url = req.url ;
    if(url==='/home') {
     res.write("<html>") ;
     res.write("<head><title>My first join</title></head>") ;
     res.write("<body>Welcome Home</body>") ;
     res.write("</html>") ;
     return res.end() ;
    }
    if(url==='/about') {
        res.write("<html>") ;
        res.write("<head><title>about us </title></head>") ;
        res.write("<body> welcome to about us page</body>") ;
        res.write("</html>") ;
        return res.end() ;
    }
    if(url==='/node') {
        res.write("<html>") ;
        res.write("<head><title>project </title></head>") ;
        res.write("<body> welcome to my node js project</body>") ;
        res.write("</html>") ;
        return res.end() ;
    }
}) ;
server.listen(4000) ;

