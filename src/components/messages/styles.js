import styled, { css } from "styled-components";

import bg from "../../assets/images/bg.svg";

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
  padding: 40px 20px 50px 20px;
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
  background: ${(props) => (props.yourself ? "#f1f1f1" : "#b6fff6")};

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

    border: none;
    border-radius: 50%;
    background: #3ac1b7;
    box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;

const MicButton = styled.button`
  transition: background 0.4s ease-in-out, color 0.4s ease-in-out;

  position: relative;

  display: inline-block;

  width: 45px;
  height: 45px;
  min-width: 45px;
  min-height: 45px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #fff;

  border-radius: 50%;
  border: none;
  outline: none;

  color: rgba(1, 1, 1, 0.5);

  cursor: pointer;

  &::before {
    animation: spin 4s linear infinite;
    transition: opacity 0.4s ease-in-out;

    content: "";

    position: absolute;
    top: 0;
    left: 0;

    width: 46px;
    height: 46px;
    min-width: 46px;
    min-height: 46px;
    margin: -0.4rem;
    padding: -0.4rem;

    background: transparent;
    opacity: 0;

    border-radius: 50%;
    border: 0.4rem solid #2e748f;
    border-top-color: transparent;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  ${(props) =>
    props.isRecording &&
    css`
      background: #ed6a5f;
      color: #fff;

      &::before {
        opacity: 1;
      }
    `}
`;

export {
  ChatContainer,
  ChatHeader,
  ChatMessages,
  MessageBubble,
  ChatFooter,
  MicButton,
};
