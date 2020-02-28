/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function Menu(props) {
  const styling = css`
    @import url('https://fonts.googleapis.com/css?family=Spartan&display=swap');
    font-family: 'Spartan', sans-serif;
    -webkit-font-smoothing: antialiased;

    position: absolute;
    z-index: 1;
    opacity: 0%;
    background-color: rgb(230, 230, 230);
    text-align: center;
    margin: 0;

    ${'' /* top: 0;
    left: 0;
    width: 0;
    height: 0; */}
    top: -100%;
    left: -100%;
    width: 100%;
    height: 100%;

    ${'' /* border-radius: 100%; */}
    border-radius: 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    transition: 0.8s ease-in-out 0.2s;

    &.open {
      opacity: 100%;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;

      transition: 0.8s ease-in-out;

      ${'' /* border-radius: 0; */}
      ${'' /* animation-name: test;
      animation-duration: 1.5s;
      animation-timing-function: cubic-bezier(.35,0,0,.92);
      animation-delay: 0s;
      animation-iteration-count: 1;
      animation-direction: ${props.click ? "normal" : "reverse"};
      animation-fill-mode: both; */}
    }

    .menu {
      ${'' /* border: 1px solid red; */}

      border-radius: 10px;
      background-color: rgb(22, 200, 125);
      width: 50%;
      height: 50%;
      margin-bottom: 200%;

      box-shadow: 10px 10px 8px 0px rgba(0,0,0,0.75);

      transition: 0.8s ease-in-out 0s;

      ${'' /* position: absolute;
      width: 100%;
      height: 100%; */}
    }

    .menu.open {
      margin-bottom: 0;

      transition: 0.8s ease-in-out 0.3s;
    }

    .item {
      ${'' /* border: 1px solid blue; */}

      font-size: 32px;

      margin: 10px;
      ${'' /* text-shadow: 3px 2px 0px rgba(0,0,0,0.75); */}
    }

    .item.link {
      font-size: 28px;
    }

    .item:nth-child(1) {
      margin-top: 20px;
      margin-bottom: 20px;
      padding-bottom: 3px;
      border-bottom: 3px solid black;
    }

    a {
      text-decoration: none;
      position: relative;
      display: inline-block;
      ${'' /* font-size: 20px; */}
      ${'' /* font-weight: 300; */}
      color: rgb(108, 108, 108);
      transition: color .4s ease;
      padding: 3px 0;
      margin-bottom: 7px;

      &:hover {
        color: rgb(0, 0, 0);

        &::after,
        &::before {
          width: 100%;
          left: 0;
        }

      }

      &::after,
      &::before {
        content: '';
        position: absolute;
        top: calc(85%);
        width: 0;
        right: 0;
        height: 4px;
      }

      &::before {
        transition: width .4s cubic-bezier(0.51, 0.18, 0, 0.88) .1s;
        background: rgb(136, 136, 136);
      }

      &::after {
        transition: width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
        background: rgb(0, 0, 0);
      }
    }
  `;
  return (
    <div css={styling} className={props.click === true ? "open" : ""}>
      <div className={props.click === true ? "menu open" : "menu"}>
        <div className="item">
          Adam Barton
        </div>
        <div className="item link">
          <a href="https://github.com/Stygain">
            Github
          </a>
        </div>
        <div className="item link">
          <a href="https://stygain.github.io/northwestvision/">
            Photography
          </a>
        </div>
      </div>
  	</div>

  );
}

export default Menu;
