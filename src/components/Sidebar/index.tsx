import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Flex, Box, Icon } from '~core';

interface TabProps {
  current?: boolean;
}

const Tab = styled(Flex)<TabProps>`
  border-radius: 8px;
  font-weight: 600;
  color: ${(props) => (props.current ? 'var(--c-gray-7)' : 'var(--c-gray-5)')};
  align-items: center;
  :hover {
    text-decoration: underline;
    color: var(--c-gray-7);
  }
`;
Tab.defaultProps = {
  px: 3,
  py: 2
};

const Sidebar: React.FC = ({ ...props }) => {
  const { pathname } = useLocation();
  const getPathFill = (path: string): string =>
    path === pathname ? 'var(--c-gray-7)' : 'var(--c-gray-5)';

  return (
    <Box
      p={3}
      width="220px"
      height="100vh"
      bg="var(--c-gray-1)"
      sx={{
        borderRight: '1px solid var(--c-gray-3)'
      }}
      {...props}
    >
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <Link to="/">
          <Tab current={pathname === '/'}>
            <Icon name="home" fill={getPathFill('/')} />
            <Box ml={2}>Home</Box>
          </Tab>
        </Link>

        <Link to="/bubblegum">
          <Tab current={pathname === '/bubblegum'}>
            <Icon name="home" fill={getPathFill('/bubblegum')} />
            <Box ml={2}>Bubblegum</Box>
          </Tab>
        </Link>

        <Link to="/expense">
          <Tab current={pathname === '/expense'}>
            <Icon name="home" fill={getPathFill('/expense')} />
            <Box ml={2}>Expense</Box>
          </Tab>
        </Link>

        <Link to="/crimes">
          <Tab current={pathname === '/crimes'}>
            <Icon name="home" fill={getPathFill('/crimes')} />
            <Box ml={2}>Crimes</Box>
          </Tab>
        </Link>

        <Link to="/pokemon">
          <Tab current={pathname === '/pokemon'}>
            <Icon name="home" fill={getPathFill('/pokemon')} />
            <Box ml={2}>Pokemon</Box>
          </Tab>
        </Link>

        <Link to="/design">
          <Tab current={pathname === '/design'}>
            <Icon name="home" fill={getPathFill('/design')} />
            <Box ml={2}>Design</Box>
          </Tab>
        </Link>
      </ul>
    </Box>
  );
};

export default Sidebar;
