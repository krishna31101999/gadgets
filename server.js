const express = require('express')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var Mobile = require('./backend/models/mobiles');
var Laptop = require('./backend/models/laptops');
var Headphone = require('./backend/models/headphones');
var Camera = require('./backend/models/cameras');
var Tv = require('./backend/models/televisions');


/*
var dbOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    auto_reconnect: true
  };
  mongoose.connect("mongodb+srv://krishna31:krishna31@cluster0-dpmwc.mongodb.net/ecommerse?retryWrites=true&w=majority", dbOptions);
  
  mongoose.connection.on('connected', function () {
    console.log("Connected to DB");
  });
  mongoose.connection.on('error', function (err) {
    console.log("Error while connecting to DB: " + err);
  });

*/
  
  const app = express()
  app.use(express.static(__dirname + '/dist/gadgets'))

  app.use(bodyParser.urlencoded({
    extended: false
  }))
  app.use(bodyParser.json())
  app.use(cors());


app.get('/', (req, res) => res.sendFile(path.join(__dirname + 'dist/gadgets/index.html')))
app.get('/test', (req, res)=>{
  res.json({'status': 'Application is Up and Running'});
})
app.get('/api/mobile', (req, res) => {
    Mobile.find({}, null, {
      limit: 30
    }, (err, docs) => {
      if (err) {
        console.log('Error while getting movies from DB in /api/mobiles/display: ' + err);
        res.json({
          error: err
        });
      } else {
        res.json(docs);
      }
    });
  })

  app.get('/api/laptop', (req, res) => {
    Laptop.find({}, null, {
      limit: 30
    }, (err, docs) => {
      if (err) {
        console.log('Error while getting movies from DB in /api/mobiles: ' + err);
        res.json({
          error: err
        });
      } else {
        res.json(docs);
      }
    });
  })

  app.get('/api/headphone', (req, res) => {
    Headphone.find({}, null, {
      limit: 30
    }, (err, docs) => {
      if (err) {
        console.log('Error while getting movies from DB in /api/headphones: ' + err);
        res.json({
          error: err
        });
      } else {
        res.json(docs);
      }
    });
  })

  app.get('/api/camera', (req, res) => {
    Camera.find({}, null, {
      limit: 30
    }, (err, docs) => {
      if (err) {
        console.log('Error while getting movies from DB in /api/camera: ' + err);
        res.json({
          error: err
        });
      } else {
        res.json(docs);
      }
    });
  })

  app.get('/api/tv', (req, res) => {
    Tv.find({}, null, {
      limit: 30
    }, (err, docs) => {
      if (err) {
        console.log('Error while getting movies from DB in /api/tv: ' + err);
        res.json({
          error: err
        });
      } else {
        res.json(docs);
      }
    });
  })



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
