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
