/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Clock = props => {
  const clock = css`
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    background-color: #4caf50;
    color: #fff;
    border-radius: 100%;
    box-shadow: 0 2px 4px rgba(50, 50, 93, 0.1);
    width: 60px;
    height: 60px;
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props.time < 20 ? "#FF9800" : ""};
    background-color: ${props.time < 10 ? "#F44336" : ""};
  `;

  return <div css={clock}>{props.time}</div>;
};

export default Clock;
