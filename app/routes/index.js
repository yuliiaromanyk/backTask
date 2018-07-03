const noteRoutes = require('./note').default;
const db         = require('./config/db.js');


module.exports = function(app, db) {
  noteRoutes(app, db);
 
};