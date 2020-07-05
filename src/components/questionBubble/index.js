import React, { useState } from "react";

import { Container, Answer } from "./styles";

const QuestionBubble = () => {
  const [selectedAnswer, setSelectedAnswer] = useState();

  return (
    <Container>
      <h4 className="title" role="img">
        Pergunta de História <span>📜</span>
      </h4>
      <p className="question">Quem foi que descobriu o Brasil?</p>
      <ul>
        <Answer>
          <input type="radio" name="question" id="1" value="1" />
          <label htmlFor="1">a) Ela não estava coberta</label>
        </Answer>
        <Answer>
          <input type="radio" name="question" id="2" value="2" />
          <label htmlFor="2">b) Pedro Álvares Cabral</label>
        </Answer>
        <Answer>
          <input type="radio" name="question" id="3" value="3" />
          <label htmlFor="3">c) Bruno e Marrone</label>
        </Answer>
      </ul>
      <div className="actions">
        <button type="button">Responder</button>
      </div>
    </Container>
  );
};

export default QuestionBubble;
