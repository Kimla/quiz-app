/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default function Answer(props) {
  const isCorrect = props.answered && props.correctAnswer === props.answer;
  const isWrong =
    !props.answeredCorrect && props.answered && props.answered === props.answer;

  const answer = css`
    text-align: center;
    padding: 12px 20px;
    border: 1px solid #ddd;
    background-color: #fff;
    background-color: ${isCorrect ? "#4CAF50" : ""};
    background-color: ${isWrong ? "#F44336" : ""};
    color: ${isCorrect || isWrong ? "#fff" : ""};
  `;

  return (
    <p
      css={answer}
      onClick={props.onClick}
      dangerouslySetInnerHTML={{ __html: props.answer }}
    />
  );
}
