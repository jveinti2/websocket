// Servidor http
const express = require("express");
const { createServer } = require("http");
const path = require("path");
const app = express();
const httpServer = createServer(app);
const realTimeServer = require("./realTimeServer");

//Settings
app.set("port", process.env.PORT || 5000);
app.set("views", path.join(__dirname, "views"));
// Routes
app.use(require("./routes"));

// Public
app.use(express.static(path.join(__dirname, "public")));

// Server up
httpServer.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});

//Call realTimeServer
realTimeServer(httpServer);
