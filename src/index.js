import app from "./server.js";
import "./db.js";

app.listen(app.get('port'), () => {
  console.log("listening on port ", app.get('port'));
});
