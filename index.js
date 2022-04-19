const serverInit = require('./loader/server');

require('./db/_connection');


(async()=> {
  await serverInit();
})();