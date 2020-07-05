import { Heading } from 'rebass/styled-components';
import styled, { css } from 'styled-components';

interface HeadingProps {
  zsize?: number;
}

const applySize = (zsize: number | undefined) => {
  switch (zsize) {
    case 100:
      return css`
        font-size: 11px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0.6px;
        margin-top: 16px;
      `;
    case 200:
      return css`
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
        letter-spacing: 0;
        margin-top: 16px;
      `;
    case 300:
      return css`
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
        letter-spacing: 0;
        margin-top: 16px;
      `;
    case 400:
      return css`
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: -0.05px;
        margin-top: 16px;
      `;
    case 500:
      return css`
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: -0.05px;
        margin-top: 24px;
      `;
    case 600:
      return css`
        font-size: 20px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: -0.07px;
        margin-top: 28px;
      `;
    case 700:
      return css`
        font-size: 24px;
        font-weight: 500;
        line-height: 28px;
        letter-spacing: -0.07px;
        margin-top: 40px;
      `;
    case 800:
      return css`
        font-size: 30px;
        font-weight: 500;
        line-height: 32px;
        letter-spacing: -0.2px;
        margin-top: 40px;
      `;
    case 900:
      return css`
        font-size: 36px;
        font-weight: 500;
        line-height: 40px;
        letter-spacing: -0.2px;
        margin-top: 52px;
      `;
    default:
      return css`
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: -0.05px;
        margin-top: 24px;
      `;
  }
};

const MyHeading = styled(Heading)<HeadingProps>`
  color: var(--c-gray-8);
  ${(props) => applySize(props.zsize)}
`;

export default MyHeading;
