import styled from "styled-components";

export const Container = styled.div`
  padding: 15px 15px 30px 15px;
  .title {
    margin-bottom: 15px;
  }
  .actions {
    display: flex;
    margin-top: 20px;
    justify-content: center;
    button {
      border: none;
      color: #fff;
      background: linear-gradient(167deg, #8f4bd0, #ae57ff);
      padding: 8px 20px;
      border-radius: 5px;
    }
  }
`;

export const Answer = styled.li`
  display: flex;
  align-items: center;
  margin: 15px 0;
  & input {
    display: none;
    width: 17px;
    height: 17px;

    margin-right: 10px;

    transition: 0.3s;
    appearance: none;
    background: #ddd;
    box-shadow: inset 0 0 0 0.3em #fff, 0 0 0 0.1em #ddd;
    border-radius: 50%;
    cursor: pointer;
    color: #ccc;

    &:hover {
      background: linear-gradient(167deg, #8f4bd0, #ae57ff);
      box-shadow: inset 0 0 0 0.3em #fff, 0 0 0 2px #ddd;
    }

    &:checked {
      background: linear-gradient(167deg, #8f4bd0, #ae57ff);
      box-shadow: inset 0 0 0 0.2em #fff, 0 0 0 2px #ddd;
    }

    &:checked + label {
      font-weight: bold;
      text-decoration: underline;
      color: black;
    }

    &:focus {
      outline: 0;
    }
  }
  & > label {
    cursor: pointer;
    transition: 0.3s;
  }
`;
