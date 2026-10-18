 // these file used to start the server  ( server.js start the server)
 const app = require("./src/app") //importing or aquireing the app.js using this code ( src is  folder in src inside  present the app.js file )
 

 app.listen(3000, ()=>{  // callback besouse when sever is start then autometicaly callback strat 
    console.log("server is runnning on port 3000");
 })