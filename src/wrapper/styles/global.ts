import { createGlobalStyle } from 'styled-components';

import theme from './theme';
import { fadeIn, fadeOut } from './animation';

import {
  tooltip,
  materialTheme,
  lightTheme,
  scaleSubtleAnimation
} from './tippy';

export default createGlobalStyle`
  /* https://github.com/styled-components/styled-components/issues/2911 */
  /* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'); */

  * {
    box-sizing: border-box;
    font-family: 'Inter', system-ui, sans-serif;
    padding: 0;
    margin: 0;
  }
  ::selection {
    background: #dbdbdb; /* WebKit/Blink Browsers */
  }
  
  ::-moz-selection {
    background: #dbdbdb; /* Gecko Browsers */
  }
  html {
    font-size: 16px;
    overflow-wrap: break-word;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    /* overflow-y: scroll;
    overflow-x: hidden;
    height: 101%; */

    --c-gray-1: rgb(255, 255, 255);
    --c-gray-2: rgb(245,245,247);
    --c-gray-3: rgb(233, 232, 235);
    --c-gray-4: rgb(189, 191, 195);
    --c-gray-5: rgb(145, 149, 155);
    --c-gray-6: rgb(101, 106, 115);
    --c-gray-7: rgb(57, 64, 75);
    --c-gray-8: rgb(13, 22, 35);

    --c-purple: rgb(84, 102, 249);
    --c-plum: rgb(131,74,125);
    --c-sky: rgb(29, 161, 242);
    --c-lemon: rgb(251, 225, 0);
  }
  
  p {
    margin: 0;
  }
  a, button {
    text-decoration: none;
    cursor: pointer;
  }
  code {
    background: ${theme.ui.wash};
    border-radius: 2px;
    border: 1px solid ${theme.ui.border};
    padding: 2px 4px;
  }
  .markdown {
    p {
      margin-top: 8px;
    }
    p:first-of-type {
      margin-top: 0;
    }
    p:not(:last-of-type):not(:first-of-type) {
      margin-top: 12px;
    }
    a {
      color: ${theme.brand.primary};
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .ReactModalPortal > * {
    opacity: 0;
  }
  .ReactModal__Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    &.ReactModal__Overlay--after-open{
      opacity: 1;
      animation: ${fadeIn} 200ms ease-in
    }
    &.ReactModal__Overlay--before-close{
      opacity: 0;
      animation: ${fadeOut} 200ms ease-out
    }
  }
  .ReactModal__Content {
    width: 50rem;
    ${'' /* height: 40rem; */}
    max-width: calc(100vw - 2rem);
    max-height: calc(100vh - 2rem);
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.25);
    &.ReactModal__Content--after-open {
      opacity: 1;
      animation: ${fadeIn} 200ms ease-in
    }
    &.ReactModal__Content--before-close {
      opacity: 0;
      animation: ${fadeOut} 200ms ease-in
    }
  }

  /* @.tippy.js/react */
  ${tooltip}
  ${materialTheme}
  ${lightTheme}
  ${scaleSubtleAnimation}
`;
