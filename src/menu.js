/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { NavLink } from 'react-router-dom';

function Menu(props) {
  const styling = css`
    position: absolute;
    top: 20px;
    left: 20px;
    width: 47px;
    height: 44px;
    z-index: 1;
    opacity: 0%;
    background-color: #ABABAB;
    text-align: center;
    margin: 0;

    transition: border-radius 0.5s ease,
                width 0.8s ease,
                height 0.8s ease,
                top 0.8s ease,
                left 0.8s ease,
                transform 1.2s ease,
                opacity 0.8s ease;

    &.open {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 100%;
      transition: border-radius 0.5s ease 0.8s,
                  width 0.8s ease,
                  height 0.8s ease,
                  top 0.8s ease,
                  left 0.8s ease,
                  transform 1.2s ease,
                  opacity 0.8s ease ease 0.5s;
    }
  `;
  const menuItemStyling = css`
    position: relative;
    margin: 0 auto;
    width: 0;
    height: 0;
    opacity: 0%;
    background-color: #EEE;

    transition: border-radius 0.5s ease,
                width 0.8s ease,
                height 0.8s ease,
                margin 0.8s ease,
                top 0.8s ease,
                left 0.8s ease,
                transform 1.2s ease,
                opacity 0.8s ease;

    &.open {
      margin-top: 10%;
      width: 50%;
      height: 60%;
      opacity: 100%;

      transition: border-radius 0.5s ease 0.35s,
                  width 0.8s ease 0.35s,
                  height 0.8s ease 0.35s,
                  margin 0.8s ease 0.35s,
                  top 0.8s ease 0.35s,
                  left 0.8s ease 0.35s,
                  transform 1.2s ease 0.35s,
                  opacity 0.8s ease 0.35s;
    }
  `;
  const navStyling = css`
    border: 2px solid yellow;

    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 100%;
    @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
    font-family: 'Poppins', sans-serif;
  `;
  return (
    <div css={styling} className={props.click ? "open" : ""}>
      <div css={menuItemStyling} className={props.click ? "open" : ""}>
        <nav css={navStyling}>
          <div className="linkitem">
            <NavLink exact to="/">
              Home
            </NavLink>
          </div>
          <div className="linkitem">
            <NavLink exact to="/">
              Other Link
            </NavLink>
          </div>
        </nav>
      </div>
  	</div>
  );
}

export default Menu;
