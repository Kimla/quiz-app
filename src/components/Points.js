/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Points = props => {
  const points = css`
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    padding: 15px;
    color: #fff;
    width: 100%;
    background-color: #2196f3;
  `;

  return <div css={points}>Points: {props.points}</div>;
};

export default Points;
