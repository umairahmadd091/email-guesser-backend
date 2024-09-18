const app = require('./app.js');

const port = 8080;
app.listen(port, () => {
  console.log('server starting on port : ' + port);
});
