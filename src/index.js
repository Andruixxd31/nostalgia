const app = require('./server');
const { connectToDb, getDb } = require('./db');

// Connect DB
let db
connectToDb((err) => {
  if (err) {
    return;
  }

  app.listen(app.get('port'), () => {
    console.log("listening on port ", app.get('port'));
  });
  db = getDb();
});

