import React from "react";
import { useChat } from "../../services/socket";

const Dashboard = () => {
  const chat = useChat();

  chat.sendMessage({
    text: "Massa",
    media: [
      "https://images.unsplash.com/photo-1593753063521-afa3771f2c81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    ],
  });

  chat.listen("response", (message) => {
    console.log(message);
  });

  return <h1>Robotto</h1>;
};

export default Dashboard;
