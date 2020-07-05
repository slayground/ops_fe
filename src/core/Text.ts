import { Text } from 'rebass/styled-components';
import styled, { css } from 'styled-components';

interface TextProps {
  zsize?: number;
}

const applySize = (zsize: number | undefined) => {
  switch (zsize) {
    case 300:
      return css`
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0;
        margin-top: 12px;
      `;
    case 400:
      return css`
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: -0.05px;
        margin-top: 12px;
      `;
    case 500:
      return css`
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: -0.05px;
        margin-top: 16px;
      `;
    case 600:
      return css`
        font-size: 18px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: -0.07px;
        margin-top: 24px;
      `;
    case 700:
      return css`
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: -0.07px;
        margin-top: 28px;
      `;
    default:
      return css`
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: -0.05px;
        margin-top: 16px;
      `;
  }
};

const MyText = styled(Text)<TextProps>`
  color: var(--c-gray-7);
  ${(props) => applySize(props.zsize)}
`;

export default MyText;
