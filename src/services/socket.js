import io from "socket.io-client";

export const createChat = () => {
  const socket = io("http://localhost:3336");

  socket.on("connect", () => {
    console.log("Usuário Conectado");
  });

  // Coloque aqui o evento;
  socket.on("testEvent", () => {
    console.log("Esse é um evento de teste");
  });

  // Emite mensagens para o bot
  function sendMessage(body) {
    socket.emit("message", body);
  }

  function listen(event, listenFunction) {
    socket.on("response", listenFunction);
  }

  return {
    sendMessage,
    listen,
  };
};
