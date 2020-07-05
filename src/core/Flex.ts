import { Flex } from 'rebass/styled-components';
import styled, { css } from 'styled-components';

interface FlexProps {
  readonly solid?: boolean;
}

const MyFlex = styled(Flex)<FlexProps>`
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
MyFlex.defaultProps = {
  solid: false
};

export default MyFlex;
