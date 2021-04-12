const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
app.use('/public',express.static(path.join(__dirname,'/public')))
const router1 = require('./apiRouter');

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/',(req, res, next) => {
    var duongdanfile = path.join(__dirname,'Home.html'); //join de noi duong dan
    res.sendFile(duongdanfile);
  })




app.use('/admin/api/', router1); //localhost:3000/api1/ la ra router1 va di theo duong cua no

app.listen(3000 , ()=>{
    console.log('Server start on port');
})