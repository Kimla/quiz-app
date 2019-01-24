/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Header = props => {
  const header = css`
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    background-color: #2196f3;
    padding: 15px;
    color: #fff;
  `;

  return <header css={header}>Quiz App</header>;
};

export default Header;
