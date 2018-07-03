const noteRoutes = require('./note').default;
const db         = require('./config/database.js');


module.exports = function(app, db) {
  noteRoutes(app, db);
 
};