/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Points = props => {
  const points = css`
    text-align: center;
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 500;
  `;

  return <div css={points}>Points: {props.points}</div>;
};

export default Points;
