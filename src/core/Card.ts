import styled, { css } from 'styled-components';
import Box from './Box';

interface CardProps {
  border?: boolean;
}

const Card = styled(Box)<CardProps>`
  background: var(--c-gray-1);
  border-radius: 16px;
  ${(props) =>
    props.border &&
    css`
      border: 1px solid var(--c-gray-3);
    `}
`;

export default Card;
