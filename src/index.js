require('dotenv').config();
const app = require('./server');
require('./db')


app.listen(app.get('port'), () => {
  console.log("listening on port ", app.get('port'));
});
