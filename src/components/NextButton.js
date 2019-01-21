/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default function NextButton(props) {
  const button = css`
    background: #2196f3;
    color: #fff;
    padding: 12px 30px;
    display: block;
    margin: 0 auto;
    min-width: 120px;
  `;

  return (
    <button css={button} onClick={props.onClick}>
      Next!
    </button>
  );
}
