const noteRoutes = require('./note');
const db         = require('./config/database');


module.exports = function(app, db) {
  noteRoutes(app, db);
 
};