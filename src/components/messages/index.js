import React, { useState, useCallback, useEffect } from "react";
import { ReactMic } from "react-mic";
import { FaMicrophone } from "react-icons/fa";

import {
  ChatContainer,
  ChatFooter,
  ChatHeader,
  ChatMessages,
  MessageBubble,
  MicButton,
} from "./styles";

import QuestionBubble from "../questionBubble";

import { useChat } from "../../services/socket";

import SendIcon from "../../assets/images/send-icon.svg";
import UserImage from "../../assets/images/otto.jpeg";

const Chat = () => {
  const chat = useChat();

  const [record, setRecord] = useState(false);
  const [audio, setAudio] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    chat.listen("response", (message) => {
      // setMessages(message);
      console.log(message);
    });
  }, [chat]);

  const handleRecording = () => {
    setRecord(!record);
  };

  const onData = (recordedBlob) => {
    console.log("chunk of real-time data is: ", recordedBlob);
  };

  const onStop = (recordedBlob) => {
    const url = URL.createObjectURL(recordedBlob.blob);

    setAudio(url);
    console.log("recordedBlob is: ", recordedBlob);
  };

  const sendMessage = useCallback(() => {
    chat.sendMessage({
      text: newMessage,
      media: [
        "https://images.unsplash.com/photo-1593753063521-afa3771f2c81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      ],
    });
  }, [chat, newMessage]);

  return (
    <ChatContainer>
      <ChatHeader>
        <div className="user">
          <img src={UserImage} alt="user" />
          <h4>Robotto</h4>
        </div>
        <div className="actions">
          <svg
            width="15"
            height="20"
            viewBox="0 0 10 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.88636 10.5V3.43182H9.75V10.5C9.75 11.3632 9.25037 12.1697 8.39135 12.7706C7.53312 13.371 6.33456 13.75 5 13.75C3.66544 13.75 2.46688 13.371 1.60865 12.7706C0.749635 12.1697 0.25 11.3632 0.25 10.5V2.54545C0.25 1.94618 0.596353 1.3784 1.20814 0.950149C1.81917 0.522429 2.67678 0.25 3.63636 0.25C4.59595 0.25 5.45356 0.522429 6.06459 0.950149C6.67637 1.3784 7.02273 1.94618 7.02273 2.54545V9.22727C7.02273 9.56231 6.82879 9.8915 6.46345 10.1472C6.09894 10.4024 5.58221 10.5682 5 10.5682C4.41779 10.5682 3.90106 10.4024 3.53655 10.1472C3.17121 9.8915 2.97727 9.56231 2.97727 9.22727V3.43182H3.84091V9.22727C3.84091 9.50587 4.00218 9.73351 4.21255 9.88128C4.42375 10.0296 4.70264 10.1136 5 10.1136C5.29736 10.1136 5.57625 10.0296 5.78745 9.88128C5.99782 9.73351 6.15909 9.50587 6.15909 9.22727V2.54545C6.15909 2.00231 5.84393 1.53604 5.38655 1.21587C4.92833 0.895121 4.30869 0.704545 3.63636 0.704545C2.96403 0.704545 2.3444 0.895121 1.88618 1.21587C1.42879 1.53604 1.11364 2.00231 1.11364 2.54545V10.5C1.11364 11.3071 1.58092 12.012 2.28504 12.5049C2.98992 12.9983 3.95049 13.2955 5 13.2955C6.04951 13.2955 7.01008 12.9983 7.71496 12.5049C8.41908 12.012 8.88636 11.3071 8.88636 10.5Z"
              stroke="#fff"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </ChatHeader>
      <ChatMessages>
        <MessageBubble yourself>
          <p className="message">Olá</p>
        </MessageBubble>
        <MessageBubble>
          <p className="message">
            Meu nome é Robotto, sou um robô explorador, desculpa, hoje é dia do
            laser aqui no meu planeta! 🌍Você não é um robô!
            <br /> Qual o seu nome? 🤔
          </p>
        </MessageBubble>
        <MessageBubble yourself>
          <p className="message">Sebastião</p>
        </MessageBubble>
        <MessageBubble>
          <QuestionBubble />
        </MessageBubble>
        <MessageBubble yourself>
          <audio controls src={audio} />
        </MessageBubble>
      </ChatMessages>

      <ChatFooter>
        <textarea
          rows="3"
          placeholder="Escreva uma mensagem..."
          className="message"
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
        />
        <MicButton type="button" onClick={handleRecording} isRecording={record}>
          <FaMicrophone size={20} />
        </MicButton>
      </ChatFooter>
      <div style={{ display: "none" }}>
        <ReactMic record={record} onStop={onStop} onData={onData} />
      </div>
    </ChatContainer>
  );
};

export default Chat;
