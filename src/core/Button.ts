import { Button } from 'rebass/styled-components';
import styled, { css } from 'styled-components';

interface ButtonProps {
  zheight?: number;
  zapp?: string;
  zintent?: string;
}

const applyHeight = (zheight: number | undefined) => {
  switch (zheight) {
    case 24:
      return css`
        height: 24px;
        font-size: 14px;
        font-weight: 600;
        padding-top: 1px;
        padding-bottom: 2px;
        padding-left: 12px;
        padding-right: 12px;
      `;
    case 32:
      return css`
        height: 32px;
        font-size: 16px;
        font-weight: 600;
        padding-top: 2px;
        padding-bottom: 4px;
        padding-left: 14px;
        padding-right: 14px;
      `;
    case 40:
      return css`
        height: 40px;
        font-size: 16px;
        font-weight: 600;
        padding-top: 2px;
        padding-bottom: 4px;
        padding-left: 16px;
        padding-right: 16px;
      `;
    default:
      return css`
        height: 32px;
        font-size: 16px;
        font-weight: 600;
        padding-top: 4px;
        padding-bottom: 4px;
        padding-left: 12px;
        padding-right: 12px;
      `;
  }
};

const applyAppearance = (zapp: string | undefined) => {
  switch (zapp) {
    case 'success':
      return css`
        color: var(--c-gray-7);
        background: var(--c-lemon);
      `;
    case 'warning':
      return css`
        background: var(--c-sky);
      `;
    case 'danger':
      return css`
        background: var(--c-plum);
      `;
    case 'stale':
      return css`
        color: var(--c-gray-7);
        background: var(--c-gray-3);
      `;
    default:
      return css`
        background: var(--c-purple);
      `;
  }
};

const MyButton = styled(Button)<ButtonProps>`
  border-radius: 99px;
  :focus {
    outline: none;
  }
  :hover {
    transition: all 0.2s ease;
    opacity: 0.9;
    transform: translateY(-1px);
  }
  ${(props) => applyHeight(props.zheight)}
  ${(props) => applyAppearance(props.zapp)}
`;

export default MyButton;
