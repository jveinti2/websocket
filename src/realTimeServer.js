module.exports = (httpServer) => {
  const { Server } = require("socket.io");
  const io = new Server(httpServer);

  const grupo1 = io.of("/grupo1");
  const grupo2 = io.of("/grupo2");

  grupo1.on("connection", (socket) => {
    console.log(`Usuario conectado en grupo1`);
    socket.on("message", (data) => {
      grupo1.emit("message", data);
    });
  });

  grupo2.on("connection", (socket) => {
    console.log(`Usuario conectado en grupo2`);
    socket.on("message", (data) => {
      grupo2.emit("message", data);
    });
  });
};
