
const db   = require('./config/database');
const Note = require('./config/Schema');

module.exports = function(app, db) {
 const note = new Note({

 })

 
  app.get('/notes', (req, res) => {
    db.collection('notes').find((err, item) => {
        if (err) return err;
        res.send(item);
    });
});
 
 
  app.post('/notes', (req, res) => {
    const note = { text: req.body.body };
    db.collection('notes').insert(note, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });


  app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Note ' + id + ' deleted!');
      } 
    });
  });


  app.put('notes/:id/:done', (req, res) => {
    db.collection('notes').findByIdAndUpdate(req.params.id, {state: true}, (err, item) => {
            if (err) return err;
            res.send(item);
        });
      
      
      });
  


  app.put('notes/:id/:undone', (req, res) => { 
    db.collection('notes').findByIdAndUpdate(req.params.id, {state: false}, (err,item) => {
            if (err) return err;
            res.send(item);
        });
    });


};