const http = require("http");
const app = require("./app");
const connectMongoDB = require("./mongo");

function start() {
  const httpServer = http.createServer(app);

  const port = 3001;
  httpServer.listen(port, () => {
    console.log("Server is listening on port: ", port);
  });

  connectMongoDB();
}
start();
