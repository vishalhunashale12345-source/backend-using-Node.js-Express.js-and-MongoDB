const express = require ('express'); //express package accure 

const app = express() //servir creating and store in app variable ( calling )

app.get("/", (req, res)=>{ // programing the machine when user give the request then it respond to user ("/"  whenn come any request slash api then give "hello word")
    res.send("hello word "); //it show in put put page or it show the respons in page 
})


app.get("/about", (req, res)=>{ // programing the machine when user give the request then it respond to user ("/about"  whenn come any request slash api then give "about page")
    res.send("about page");
})


app.listen(3000) //start the server ( 3000 is port number whn hit this server then it show out put "like hello word ")

//run this file using" node server.js" (server.js is file name) and  crome put localhost:3000 then it show in screen
//npm init -y  : node-js-package-installation , then above code works
//npm i express :install express package ( creating server express file helps)

//   notes
// GET = get method  used to bring data from server or fetch the data from serverPOSt
//POST = most method is used when send the data to server
//PATCH = data alredy there in server that data to update then use this method
//DELETE = data alredy there in server that data deleting then use this method