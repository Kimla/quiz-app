/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default function Answer(props) {
  const isCorrect = props.answered && props.correctAnswer === props.answer;
  const isWrong =
    !props.answeredCorrect && props.answered && props.answered === props.answer;

  const answer = css`
    text-align: center;
    padding: 14px 10px;
    background-color: #fff;
    background-color: ${isCorrect ? "#4CAF50" : ""};
    background-color: ${isWrong ? "#F44336" : ""};
    color: ${isCorrect || isWrong ? "#fff" : ""};
    width: calc(50% - 10px);
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.4;
    font-size: 14px;
    font-weight: 500;
    border-radius: 2px;
    box-shadow: 0 2px 4px rgba(50, 50, 93, 0.1);
  `;

  return (
    <button
      css={answer}
      onClick={props.onClick}
      dangerouslySetInnerHTML={{ __html: props.answer }}
    />
  );
}
