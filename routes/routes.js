var fs = require('fs');
const exec   = require('child_process');
var watch = require('node-watch');
var value="0";
watch('C:\\batch\\pass.txt', { recursive: true }, function(evt, name) {
    fs.readFile("C:\\batch\\pass.txt", "utf-8", (err, data) => {
       // console.log("here.....",data.length);
        if(data.length===0){
           // console.log("coming if")
            value="1000000000000000";
        }else{
           // console.log("not  if")
            value=data;
        }
       
      });
  });
  watch('C:\\batch\\gross.txt', { recursive: true }, function(evt, name) {
    fs.readFile("C:\\batch\\gross.txt", "utf-8", (err, data) => {
        value=data;
      });
  });
var appRouter = function(app){
   app.get("/",function(req,res){
    var ls=exec.spawn("C:\\batch\\test.bat");
    res.send("coming");
      
   });
   app.get("/getweight",function(req,res){
       fs.readFile("C:\\batch\\pass.txt", "utf-8", (err, data) => {
        console.log(data + 'HIII');
        res.send(data); 
      });
   });
   app.get("/getgrossweight",function(req,res){
    fs.readFile("C:\\batch\\gross.txt", "utf-8", (err, data) => {
     console.log(data);
     res.send(data);
   });
});
   app.get("/setCookie",function(req,res){
      res.send(value);
        
   });
    app.get("/resetCookie",function(req,res){
        value="0";
        res.send(value); 
    });
   app.get('/getuser', (req, res)=>{ 
    res.send(req.cookies);  
    });
}

module.exports = appRouter;