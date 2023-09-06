const user = prompt("Ingrese su usuario");
const usuarioGrupo1 = ["usuario1", "usuario2", "usuario3"];

let socketNamespace, grupo;

const chat = document.getElementById("chat");
const namespace = document.getElementById("namespace");

if (usuarioGrupo1.includes(user)) {
  socketNamespace = io("/grupo1");
  grupo = "grupo1";
} else {
  socketNamespace = io("/grupo2");
  grupo = "grupo2";
}

socketNamespace.on("connect", () => {
  namespace.textContent = `Conectado al ${grupo}`;
});

sendMessage.addEventListener("click", () => {
  let messageTag = document.getElementById("message");
  message = messageTag.value;
  socketNamespace.emit("message", {
    message,
    user,
  });
  messageTag.value = "";
});

socketNamespace.on("message", (data) => {
  const { message, user } = data;
  const messageLists = document.getElementById("messageLists");
  const li = document.createElement("li");
  li.classList.add("list-group-item");
  li.textContent = `${user}: ${message}`;
  messageLists.append(li);
});
