import React, { useState } from "react";

import { Container, Answer } from "./styles";

const QuestionBubble = ({ question }) => {
  const [selectedAnswer, setSelectedAnswer] = useState();

  function handleAnswer() {
    if (selectedAnswer === question.answer) {
      console.log("Questão certa!");
    }
  }

  return (
    <Container>
      <h4 className="title" role="img">
        Pergunta de {question.subject} <span>📜</span>
      </h4>
      <p className="question">{question.question}</p>
      <ul>
        {question.alternatives.map((alternative, key) => {
          return (
            <Answer>
              <input
                type="radio"
                name="question"
                onClick={() => setSelectedAnswer(key)}
                id={key}
                value={key}
              />
              <label htmlFor={key}>{alternative}</label>
            </Answer>
          );
        })}
      </ul>
      <div className="actions">
        <button onClick={() => handleAnswer()} type="button">
          Responder
        </button>
      </div>
    </Container>
  );
};

export default QuestionBubble;
