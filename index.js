const app = require('./app')
const { connectToDb, getDb } = require('./db');

// Connect DB
let db
connectToDb((err) => {
  if (err) {
    return;
  }

  app.listen(3001, () => {
    console.log("listening on port 3001");
  });
  db = getDb();
});

