const app = require('./app')
const port = process.env.PORT
app.listen(port, () => {
  console.log("server is running on port " + port);
});
// close a port in command line: sudo kill $(sudo lsof -t -i:3000)