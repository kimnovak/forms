var express = require('express');
var app = express();
var fs = require("fs");
var axios = require('axios');
var bodyParser = require('body-parser');

app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});


app.use(bodyParser.json());


let users = {
   metaData: {
      columns: [
         {
            label: 'First Name',
            accessor: 'firstName',

         }
      ]
   },
   results: [
      {
         id: 1,
         firstName: 'Example',
         lastName: 'User',
         email: 'example@euser.us',
         phoneNumber: '+3815555555',
      },
      {
         id: 2,
         firstName: 'Example 2',
         lastName: 'User 2',
         email: 'example2@euser2.us',
         phoneNumber: '+3812222222',
      }
   ]
}

app.get('/users', function (req, res) {
   data = JSON.stringify(users);
   res.send(data)
});

app.post('/users', function (req, res) {
   console.log(req.body.data);
   users.push(req.body.data);
   res.send(JSON.stringify(req.body.data));
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})