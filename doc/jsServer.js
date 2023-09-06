// Para hacer debuggin
// process.env.DEBUG = "socket.io:socket";

// require("dotenv").config();
// const { Socket } = require("dgram");
// const { createServer } = require("http");
// const { instrument } = require("@socket.io/admin-ui");
// const { Server } = require("socket.io");

// const express = require("express");
// const path = require("path");
// const PORT = process.env.PORT || 3000;
// const app = express();
// const httpServer = createServer(app);
// const io = new Server(httpServer, {
//   cors: {
//     origin: ["https://admin.socket.io"],
//     credentials: true,
//   },
// });

// instrument(io, {
//   auth: false})

// // const socketsOnline = [];

// app.use(express.static(path.join(__dirname, "views")));

// app.get("/", (res, req) => {
//   req.sendFile(__dirname + "/views/index.html");
// });

// io.use((socket, next) => {
//   const username = socket.handshake.auth.username;
//   if (username !== "admin") {
//     return next(new Error("invalid username"));
//   }
//   socket.username = username;
//   next();
// });

// io.on("connection", (socket) => {
//   console.log("Usuario conectado");
// });

// const profesores = io.of("/profesores");
// const alumnos = io.of("/alumnos");

// profesores.on("connection", (socket) => {
//   console.log("Profesor conectado");

//   socket.on("message", (message) => {
//     profesores.emit("message", message);
//   });
// });

// alumnos.on("connection", (socket) => {
//   console.log("Alumno conectado");

//   socket.on("message", (message) => {
//     alumnos.emit("message", message);
//   });
// });

// io.on("connection", (socket) => {
//   socket.connectedRoom = "";

//   socket.on("connectRoom", (room) => {
//     socket.leave(socket.connectedRoom);
//     switch (room) {
//       case "room1":
//         socket.join("room1");
//         socket.connectedRoom = "room1";
//         break;
//       case "room2":
//         socket.join("room2");
//         socket.connectedRoom = "room2";
//         break;
//       case "room3":
//         socket.join("room3");
//         socket.connectedRoom = "room3";
//         break;
//       // default:
//       //     socket.join("room1");
//       //     break;
//     }
//   });

//   socket.on("message", (message) => {
//     const room = socket.connectedRoom;
//     io.to(room).emit("message", {
//       message,
//       room,
//     });
//   });

//   console.log(`Server websocket up`);
//   socket.on("circle_position", (data) => {
//     socket.broadcast.emit("circle_position", data);
//   });

//   socketsOnline.push(socket.id);
//   //Emisión básica
//   socket.emit("welcomeToClient", "Bienvenido al servidor 👋");
//   socket.on("messageToServer", (data) => {
//     console.log(data);
//   });
//   //Emision a todos los clientes
//   io.emit("everyone", "Hola a todos los clientes 👋");
//   //Emisión a un cliente en particular (ultimo conectado)
//   socket.on("sayHelloLastPerson", (data) => {
//     const lastSocket = socketsOnline.at(-1);
//     io.to(lastSocket).emit("sayHello", data);
//   });
//   socket.emit("on", "Mensaje emitido varias veces");
//   socket.emit("on", "Mensaje emitido varias veces");
//   socket.emit("once", "Mensaje una sola vez");
//   socket.emit("once", "Mensaje una sola vez");
//   socket.emit("off", "Mensaje apagado");
//Ejemplos de eventos
//   console.log(`Socket up, clientes conectados ${io.engine.clientsCount}`);
//   socket.on("disconnect", () => {
//     console.log(
//       `Se a desconectado un cliente, quedán ${io.engine.clientsCount}`
//     );
//   });
//   socket.conn.once("upgrade", () => {
//     console.log(
//       "Hemos pasado de HTTP Long-polling a WebSockets ->",
//       socket.conn.transport.name
//     );
//   });
// });

httpServer.listen(PORT, () => {
  // console.log(`Server is running on port ${PORT} !`);
});
