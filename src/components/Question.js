/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default function Question(props) {
  const question = css`
    text-align: center;
    margin-bottom: 30px;
    font-size: 24px;
    font-weight: 500;
  `;

  return (
    <h1 css={question} dangerouslySetInnerHTML={{ __html: props.question }} />
  );
}
