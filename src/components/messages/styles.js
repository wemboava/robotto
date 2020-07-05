import styled from "styled-components";

import bg from "../../assets/images/bg.png";

const ChatContainer = styled.div`
  position: relative;
  background: #fff url(${bg});
  @media (min-width: 768px) {
    max-width: 768px;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  }
`;

const ChatHeader = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 10px 15px;
  background: #ae57ff;
  color: #fff;
  border-bottom: 1px solid rgba(160, 160, 160, 0.2);
  border-top: 1px solid rgba(160, 160, 160, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  @media (min-width: 768px) {
    position: absolute;
    border-radius: 10px 10px 0 0;
  }
  .user {
    display: flex;
    align-items: center;
    & img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__text {
      font-weight: 300;
      font-size: 0.8em;
      text-decoration-line: underline;
    }
  }
`;

const ChatMessages = styled.div`
  height: calc(100vh - 75px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 75px 20px 15px 20px;
  overflow-y: auto;
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0.1) 6.1%,
    rgba(196, 196, 196, 0) 88.98%
  );
  @media (min-width: 768px) {
    padding: 75px 20px 75px 20px;
  }
`;

const MessageBubble = styled.div`
  min-width: 100px;
  max-width: 85%;
  border-radius: ${(props) =>
    props.yourself ? "15px 15px 0 15px" : "15px 15px 15px 0"};
  margin: ${(props) =>
    props.yourself ? "10px 0 10px auto" : "10px auto 10px 0"};
  background: ${(props) => (props.yourself ? "#f1f1f1" : "#78f3e4")};

  & .message {
    padding: 10px;
    color: #555;
    text-align: left;
    padding: 15px 15px 30px 15px;
  }
`;

const ChatFooter = styled.div`
  height: 75px;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.1);
  background: #fff;
  @media (min-width: 768px) {
    position: absolute;
    border-radius: 0 0 10px 10px;
  }
  & .message {
    width: calc(100% - 80px);
    border: none;
  }
  & .button {
    width: 45px;
    height: 45px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background: #3ac1b7;
    box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;

export { ChatContainer, ChatHeader, ChatMessages, MessageBubble, ChatFooter };
