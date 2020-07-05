import { css } from 'styled-components';

export const tooltip = css`
  .tippy-tooltip[data-animation='fade'][data-state='hidden'] {
    background-color: yellow;
    opacity: 0;
  }
  .tippy-iOS {
    cursor: pointer !important;
    -webkit-tap-highlight-color: transparent;
  }
  .tippy-popper {
    pointer-events: none;
    max-width: calc(100vw - 10px);
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    transition-property: transform;
  }
  .tippy-tooltip {
    position: relative;
    color: #fff;
    border-radius: 4px;
    font-size: 14px;
    line-height: 1.4;
    background-color: #333;
    transition-property: visibility, opacity, transform;
    outline: 0;
  }
  .tippy-tooltip[data-placement^='top'] > .tippy-arrow {
    border-width: 8px 8px 0;
    border-top-color: #333;
    margin: 0 3px;
    transform-origin: 50% 0;
    bottom: -7px;
  }
  .tippy-tooltip[data-placement^='bottom'] > .tippy-arrow {
    border-width: 0 8px 8px;
    border-bottom-color: #333;
    margin: 0 3px;
    transform-origin: 50% 7px;
    top: -7px;
  }
  .tippy-tooltip[data-placement^='left'] > .tippy-arrow {
    border-width: 8px 0 8px 8px;
    border-left-color: #333;
    margin: 3px 0;
    transform-origin: 0 50%;
    right: -7px;
  }
  .tippy-tooltip[data-placement^='right'] > .tippy-arrow {
    border-width: 8px 8px 8px 0;
    border-right-color: #333;
    margin: 3px 0;
    transform-origin: 7px 50%;
    left: -7px;
  }
  .tippy-tooltip[data-interactive][data-state='visible'] {
    pointer-events: auto;
  }
  .tippy-tooltip[data-inertia][data-state='visible'] {
    transition-timing-function: cubic-bezier(0.54, 1.5, 0.38, 1.11);
  }
  .tippy-arrow {
    position: absolute;
    border-color: transparent;
    border-style: solid;
  }
  .tippy-content {
    padding: 5px 9px;
  }
  .tippy-tooltip[data-animation='scale-subtle'][data-placement^='top'] {
    transform-origin: bottom;
  }
  .tippy-tooltip[data-animation='scale-subtle'][data-placement^='bottom'] {
    transform-origin: top;
  }
  .tippy-tooltip[data-animation='scale-subtle'][data-placement^='left'] {
    transform-origin: right;
  }
  .tippy-tooltip[data-animation='scale-subtle'][data-placement^='right'] {
    transform-origin: left;
  }
  .tippy-tooltip[data-animation='scale-subtle'][data-state='hidden'] {
    transform: scale(0.8);
    opacity: 0;
  }
`;

export const materialTheme = css`
  .tippy-tooltip.material-theme {
    background-color: #505355;
    ${'' /* font-family: Source Sans Variable; */}
    font-size: 13px;
    font-weight: 700;
  }
  .tippy-tooltip.material-theme[data-placement^='top'] > .tippy-arrow {
    border-width: 8px 8px 0;
    border-top-color: #505355;
  }
  .tippy-tooltip.material-theme[data-placement^='bottom'] > .tippy-arrow {
    border-width: 0 8px 8px;
    border-bottom-color: #505355;
  }
  .tippy-tooltip.material-theme[data-placement^='left'] > .tippy-arrow {
    border-width: 8px 0 8px 8px;
    border-left-color: #505355;
  }
  .tippy-tooltip.material-theme[data-placement^='right'] > .tippy-arrow {
    border-width: 8px 8px 8px 0;
    border-right-color: #505355;
  }
  .tippy-tooltip.material-theme > .tippy-content {
    padding: 4px 7px;
  }
  .tippy-tooltip.material-theme > .tippy-backdrop {
    background-color: #505355;
  }
  .tippy-tooltip.material-theme > .tippy-svg-arrow {
    fill: #505355;
  }
`;

export const lightTheme = css`
  .tippy-tooltip.light-theme {
    border-radius: 6px;
    color: #26323d;
    ${'' /* box-shadow: 0 0 20px 4px rgba(154, 161, 177, 0.15),
      0 4px 80px -8px rgba(36, 40, 47, 0.25),
      0 4px 4px -2px rgba(91, 94, 105, 0.15); */}
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.01), 0 3px 24px rgba(48, 51, 51, 0.07);
    background-color: #fff;
  }
  .tippy-tooltip.light-theme[data-placement^='top'] > .tippy-arrow {
    border-width: 8px 8px 0;
    border-top-color: #fff;
  }
  .tippy-tooltip.light-theme[data-placement^='bottom'] > .tippy-arrow {
    border-width: 0 8px 8px;
    border-bottom-color: #fff;
  }
  .tippy-tooltip.light-theme[data-placement^='left'] > .tippy-arrow {
    border-width: 8px 0 8px 8px;
    border-left-color: #fff;
  }
  .tippy-tooltip.light-theme[data-placement^='right'] > .tippy-arrow {
    border-width: 8px 8px 8px 0;
    border-right-color: #fff;
  }
  .tippy-tooltip.light-theme > .tippy-backdrop {
    background-color: #fff;
  }
  .tippy-tooltip.light-theme > .tippy-svg-arrow {
    fill: #fff;
  }
`;

export const scaleSubtleAnimation = css`
  .tippy-tooltip[data-animation='scale-subtle'][data-placement^='top'] {
    transform-origin: bottom;
  }
  .tippy-tooltip[data-animation='scale-subtle'][data-placement^='bottom'] {
    transform-origin: top;
  }
  .tippy-tooltip[data-animation='scale-subtle'][data-placement^='left'] {
    transform-origin: right;
  }
  .tippy-tooltip[data-animation='scale-subtle'][data-placement^='right'] {
    transform-origin: left;
  }
  .tippy-tooltip[data-animation='scale-subtle'][data-state='hidden'] {
    transform: scale(0.8);
    opacity: 0;
  }
`;
