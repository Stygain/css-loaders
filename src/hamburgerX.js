/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';

function HamburgerX() {
  const [clicked, setClicked] = useState(false);
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
      background-color: #BBB;
      transition: 0.3s cubic-bezier(.69,-0.36,.32,1.35);
    }

    div:nth-child(1).change {
      transform: translateY(12px) scale(1.2) rotate(-135deg);
      background-color: #BBB;
    }
    div:nth-child(2).change {
      opacity: 0;
    }
    div:nth-child(3).change {
      transform: translateY(-12px) scale(1.2) rotate(135deg);
      background-color: #BBB;
    }
  `;
  return (
    <div css={styling} onClick={
        () => {
          setClicked(!clicked)
        }
      }>
  	  <div className={clicked ? "change" : ""}></div>
  	  <div className={clicked ? "change" : ""}></div>
  	  <div className={clicked ? "change" : ""}></div>
  	</div>
  );
}

export default HamburgerX;
