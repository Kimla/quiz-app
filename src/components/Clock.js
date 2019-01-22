/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const clock = props => {
  const clock = css`
    text-align: center;
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 500;
  `;

  return <div css={clock}>{props.time}</div>;
};

export default clock;
