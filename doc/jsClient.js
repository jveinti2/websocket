// const socket = io({
//   auth: {
//     username: "admin",
//   },
// });

// socket.on("connect_error", (err) => {
//   console.log("Error de conexion");
//   console.log(err.message);
// });

// const user = prompt("Ingrese su usuario");

// const profes = ["profesor1", "profesor2", "profesor3"];

// let socketNamespace, gruop;

// const chat = document.getElementById("chat");
// const namespace = document.getElementById("namespace");

// if (profes.includes(user)) {
//   socketNamespace = io("/profesores");
//   gruop = "profesores";
// } else {
//   socketNamespace = io("/alumnos");
//   gruop = "alumnos";
// }

// socketNamespace.on("connect", () => {
//   namespace.textContent = `Conectado al namespace ${gruop}`;
// });

// sendMessage.addEventListener("click", () => {
//   const message = prompt("Escribe un mensaje");
//   socketNamespace.emit("message", {
//     message,
//     user,
//   });
// });

// socketNamespace.on("message", (data) => {
//   const { message, user } = data;
//   const li = document.createElement("li");
//   li.textContent = `${user}: ${message}`;
//   chat.append(li);
// });

// const socket = io();

// const connectRoom1 = document.querySelector("#connectRoom1");
// const connectRoom2 = document.querySelector("#connectRoom2");
// const connectRoom3 = document.querySelector("#connectRoom3");

// connectRoom1.addEventListener("click", () => {
//   socket.emit("connectRoom", "room1");
// });
// connectRoom2.addEventListener("click", () => {
//   socket.emit("connectRoom", "room2");
// });
// connectRoom3.addEventListener("click", () => {
//   socket.emit("connectRoom", "room3");
// });

// const sendMessage = document.querySelector("#sendMessage");

// sendMessage.addEventListener("click", () => {
//   const message = prompt("Escribe un mensaje");
//   socket.emit("message", message);
// });

// socket.on("message", (data) => {
//   const { message } = data;
//   const { room } = data;
//   console.log("en el cliente");
//   console.log("message", message);
//   console.log("room", room);
//   const li = document.createElement("li");
//   const sala = document.getElementById(`${room}`);
//   console.log("sala", sala);
//   li.textContent = `${message}`;
//   sala.append(li);
// });

// const circle = document.getElementById("circle");

// const circlePosition = (e) => {
//   circle.style.top = e.top;
//   circle.style.left = e.left;
// };

// const drag = (e) => {
//   const position = {
//     top: `${e.clientY}px`,
//     left: `${e.clientX}px`,
//   };
//   circlePosition(position);
//   socket.emit("circle_position", position);
// };

// document.addEventListener("mousedown", (e) => {
//   document.addEventListener("mousemove", drag);
// });

// document.addEventListener("mouseup", (e) => {
//   document.removeEventListener("mousemove", drag);
// });

// socket.on("circle_position", (data) => {
//   circlePosition(data);
// });

// // Escuchar
// socket.on("welcomeToClient", (data) => {
//   text.textContent = data;
// });
// // Emitir
// emitToServer.addEventListener("click", () => {
//   socket.emit("messageToServer", "Hola servidor, soy el cliente");
// });

// // Escuchar
// socket.on("everyone", (data) => {
//   everyone.textContent = data;
// });
// // Emitir
// sayHelloLastPerson.addEventListener("click", () => {
//   socket.emit(
//     "sayHelloLastPerson",
//     "Hola, eres el ultimo en haberse conectado 👋"
//   );
// });

// socket.on("sayHello", (data) => {
//   lastSocket.textContent = data;
// });

// socket.on("on", () => {
//   console.log("Mensaje emitido varias veces");
// });
// socket.once("once", () => {
//   console.log("Mensaje una sola vez");
// });

// const listener = () => {
//   console.log(`Evento apagado`);
// };

// socket.on("off", listener);

// setTimeout(() => {
//   socket.off("off", listener);
// }, 2000);

//Ejemplos de eventos
// function checkSocketStatus() {
//   console.log(`El socket ${socket.connected} al servidor`);
// }

// socket.on("connect", () => {
//   console.log(`CLiente con id ${socket.id} conectado`);
//   checkSocketStatus();
// });

// socket.on("connect_error", () => {
//   console.log("Error al conectar con el servidor");
// });

// socket.on("disconnect", () => {
//   console.log(`Cliente con id ${socket.id} desconectado`);
// });

// socket.io.on("reconnect_attempt", () => {
//   console.log("Intentando reconectar...");
// });

// socket.on("reconnect", () => {
//   console.log("Reconectado");
// });
