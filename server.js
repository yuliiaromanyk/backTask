const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
//const db             = require('./config/db');
const Note =           require('./config/Schema');
const mongoose       = require('mongoose');
const app            = express();

const port = 8000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//MongoClient.connect(db.url, { useNewUrlParser:true }, (err, database)  => {
 // if (err) return console.log(err) 
 var db = 'mongodb://yuliia:80975109374j@ds155699.mlab.com:55699/julia' 
 mongoose.connect(db);


 
  /* start rest*/           
 
app.get('/note', (req, res, next) => next(),
(req, res) => {
  Note.find(function (err, item) {
    if (err) {
        return next(new Error(err))
    }
    res.send(item) 
    })
}
)


app.post('/note', (req, res, next) => next(),
(req, res) => {
     res.send('a new Todo')
    const item = new Note({
        body: req.body.body,
        state: req.body.state
    })
    Note.create(item,
        function (error, item) {
            if (error) {
              res.send({ 'error': 'An error has occurred' }); 
            }
            res.status(200).json(item)
        }
    )
}
)


app.delete('/note/:id', (req, res, next) => next(),
(req, res) => {
    var id = req.params.id
    Todo.findByIdAndRemove(id, function (err, item) {
        if (err) {
          res.send({'error':'An error has occurred'});
        }
        res.send('Note ' + id + ' deleted!')
    })
}
)



app.put('/note/:id', (req, res, next) => next(),
(req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body, function (err, item) {
        if (err) return next(err);
        res.send(item);
      })
}
)

app.put('/todo/done/:id', (req, res, next) => next(),
(req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body, function (err, item) {
        if (err) return next(err);
        item.done = true;
        res.send(item);
      })
}
)

app.put('/todo/undone/:id', (req, res, next) => next(),
(req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body, function (err, item) {
        if (err) return next(err);
        item.done = false;
        res.send(item);
      })
}
)








//mongoose.Promise = global.Promise;
const DB = mongoose.connection;

//require('./app/routes').default(app, db);
app.listen(port, () => {
  console.log('We are live on ' + port);
});  