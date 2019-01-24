/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default function NextButton(props) {
  const button = css`
    background: #2196f3;
    color: #fff;
    padding: 12px 30px;
    display: block;
    margin: 0 auto;
    margin-bottom: 30px;
    min-width: 120px;
    border-radius: 2px;
    box-shadow: 0 2px 4px rgba(50, 50, 93, 0.1);
  `;

  return (
    <button css={button} onClick={props.onClick}>
      {props.answeredCorrect ? "Next!" : "Restart"}
    </button>
  );
}
