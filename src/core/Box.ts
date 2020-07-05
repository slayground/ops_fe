import { Box } from 'rebass/styled-components';
import styled, { css } from 'styled-components';

interface BoxProps {
  readonly solid?: boolean;
}

const MyBox = styled(Box)<BoxProps>`
  ${(props) =>
    props.solid &&
    css`
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    `}
`;
MyBox.defaultProps = {
  solid: false
};

export default MyBox;
