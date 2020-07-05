import React from 'react';
import styled, { css } from 'styled-components';

import { Flex, Box, Button } from '~core';
import { useOnClickOutside } from '~utils/hooks';

import Sidebar from './Sidebar';

interface SidebarProps {
  expanded: boolean;
  setExpanded: (exp: boolean) => void;
}

interface ContainerProps {
  expanded: boolean;
}

const Container = styled(Box)<ContainerProps>`
  cursor: default;
  top: 0px;
  left: ${(props) => (props.expanded ? '0px' : '-220px')};
  bottom: 0px;
  right: 0px;
  height: unset;
  z-index: 5;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 0px
    ${(props) => (props.expanded ? '16px' : '0px')};
  position: fixed !important;
  transition: left 0.2s ease-out 0s, box-shadow 0.15s 0s;
`;

const Background = styled(Box)<ContainerProps>`
  ${(props) =>
    props.expanded &&
    css`
      cursor: pointer;
      position: fixed;
      height: 100%;
      width: 100%;
      margin: 0;
      background: rgb(0, 0, 0, 0.06);
      z-index: 3;
      transition: all 0.4s ease-in-out;
    `}
`;

const MobileSidebar: React.FC<SidebarProps> = ({
  expanded,
  setExpanded
}: SidebarProps) => {
  const ref = React.useRef<HTMLDivElement>();
  useOnClickOutside(ref, () => setExpanded(false));
  return (
    <Background expanded={expanded}>
      <Container ref={ref} expanded={expanded} height="100%" width="220px">
        <Sidebar />
      </Container>
    </Background>
  );
};

const Navbar__Container = styled(Box)`
  background: var(--c-gray-1);
  border-bottom: 1px solid var(--c-gray-3);
`;

const Navbar: React.FC = () => {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const toggleSidebar = (e: React.MouseEvent) => {
    e.preventDefault();
    setExpanded(!expanded);
  };
  return (
    <>
      <MobileSidebar expanded={expanded} setExpanded={setExpanded} />
      <Navbar__Container>
        <Flex p={3} alignItems="center">
          <Box flex="1 auto">
            <Button zheight={24} onClick={toggleSidebar}>
              +
            </Button>
          </Box>
        </Flex>
      </Navbar__Container>
    </>
  );
};

export default Navbar;
