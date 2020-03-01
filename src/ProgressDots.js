/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function ProgressDots(props) {
  const styling = css`
    ${'' /* border: 1px solid blue; */}

    width: 100%;
    position: absolute;
    bottom: 10px;
    height: 40px;
    z-index: 3;

    .dot-container {
      ${'' /* border: 1px solid green; */}

      margin: 0 auto;
      width: 270px;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }

    .dot-container .outer-dot {
      ${'' /* border: 1px solid red; */}

      padding: 5px;
      cursor: pointer;
      transition: transform 0.3s;
    }

    .dot-container .dot {
      border-radius: 100%;
      background-color: rgb(42, 42, 42);
      width: 10px;
      height: 10px;
    }

    .outer-dot:hover {
      transform: scale(1.3);
    }

    .outer-dot:nth-child(${props.current + 1}) {
      ${'' /* border: 4px solid orange; */}

      transform: scale(1.7);
    }

    .outer-dot:nth-child(${props.current + 1}) .dot {
      ${'' /* border: 4px solid orange; */}

      background-color: #000;
    }
  `;
  return (
    <div css={styling}>
      <div className="dot-container">
        {props.data.map((data, index) => {
          return (
            <div className="outer-dot" onClick={() => {
              props.setCurrent(index)
            }}>
              <div className="dot" key={index}></div>
            </div>);
        })}
      </div>
    </div>
  );
}

export default ProgressDots;
