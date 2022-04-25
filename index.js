const app = require('./loader/server');
const { httpServer } = require('./config');



app.listen(httpServer.port, () => {
  return console.log(`server running on http://127.0.0.1:${httpServer.port}`);
});