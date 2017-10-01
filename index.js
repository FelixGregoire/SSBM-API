const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const fs = require('fs');
var cors = require('cors')

app.use(cors())

app.get('/falco', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(
        {
             a: 1 
        }
    ));
  });
  