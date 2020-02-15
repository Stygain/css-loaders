/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function HamburgerX(props) {
  const styling = css`
    width: 35px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 8px;

    &:hover {
      cursor: pointer;
    }

    div {
      width: 35px;
      height: 6px;
      background-color: #000;
      transition: 0.3s cubic-bezier(.69,-0.36,.32,1.35);
    }

    div:nth-child(1).change {
      transform: translateY(12px) scale(1.2) rotate(-135deg);
      background-color: #000;
    }
    div:nth-child(2).change {
      opacity: 0;
    }
    div:nth-child(3).change {
      transform: translateY(-12px) scale(1.2) rotate(135deg);
      background-color: #000;
    }
  `;
  return (
    <div css={styling} onClick={
        () => {
          props.clickhandler(!props.click)
        }
      }>
  	  <div className={props.click ? "change" : ""}></div>
  	  <div className={props.click ? "change" : ""}></div>
  	  <div className={props.click ? "change" : ""}></div>
  	</div>
  );
}

export default HamburgerX;
