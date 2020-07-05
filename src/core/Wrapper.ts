import styled from 'styled-components';
import Box from './Box';

const Wrapper = styled(Box)`
  max-width: 992px;
  margin: 0 auto;
`;
Wrapper.defaultProps = {
  p: [2, 3, 4]
};

export default Wrapper;
