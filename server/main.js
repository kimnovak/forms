var express = require('express');
var app = express();
var fs = require("fs");
var axios = require('axios');
var bodyParser = require('body-parser');

app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
   next();
});


app.use(bodyParser.json());


let users = {
   metaData: {
      columns: [
         {
            label: 'First Name',
            accessor: 'firstName',

         },
         {
            label: 'Last Name',
            accessor: 'lastName',
         },
         {
            label: 'Email',
            accessor: 'email',
         },
         {
            label: 'Phone Number',
            accessor: 'phoneNumber',
         },
         {
            label: 'Address',
            accessor: 'address',
         }
      ]
   },
   results: [
      {
         id: 1,
         firstName: 'Petar',
         lastName: 'Petrovic',
         email: 'petrovic@petar.pt',
         phoneNumber: '+381210525',
         address: 'Simple Street 1'
      },
      {
         id: 2,
         firstName: 'Jovan',
         lastName: 'Jovanovic',
         email: 'test@example.ex',
         phoneNumber: '+3812225227',
         address: 'Avenue 2'
      },
      {
         id: 3,
         firstName: 'Marko',
         lastName: 'Jovanovic',
         email: 'test@example.ex',
         phoneNumber: '+3812225227',
         address: 'Avenue 3'
      },
      {
         id: 4,
         firstName: 'Gorana',
         lastName: 'Filipovic',
         email: 'gorana@filipovic.ex',
         phoneNumber: '+3814242583',
         address: 'Example Street 5'
      }
   ]
}

app.get('/users', function (req, res) {
   data = JSON.stringify(users);
   res.send(data)
});

app.post('/users', function (req, res) {
   users.results.push({...req.body.data, id: users.results.length + 1});
   res.send(JSON.stringify(req.body.data));
});

app.put('/users', function (req, res) {
   const targetIndex = users.results.findIndex((item) => item.id === req.body.data.id)
   users.results.splice(targetIndex, 1, req.body.data);
   res.send(JSON.stringify(req.body.data));
});

app.delete('/users', function (req, res) {
   const newUsers = users.results.filter((item) => item.id !== parseInt(req.query.id))
   users.results = newUsers
   res.send();
});


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})