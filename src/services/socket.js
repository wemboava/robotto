import io from "socket.io-client";

export const useChat = () => {
  const socket = io("http://localhost:3336");

  // Emite mensagens para o bot
  function sendMessage(body) {
    socket.emit("message", body);
  }

  function listen(event, listenFunction) {
    socket.on("response", listenFunction);
  }

  socket.on("connect", () => {
    console.log("Usuário Conectado");
  });

  // Coloque aqui o evento;
  socket.on("testEvent", () => {
    console.log("Esse é um evento de teste");
  });

  return {
    sendMessage,
    listen,
  };
};
