const noteRoutes = require('./note').default;

module.exports = function(app, db) {
  noteRoutes(app, db);
 
};