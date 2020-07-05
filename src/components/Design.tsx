import React from 'react';

import { Flex, Box, Heading, Text, Button, Card } from '~core';

const Design: React.FC = () => (
  <Box>
    <Flex>
      <Box width={1 / 3}>
        <Text zsize={300}>TEXT 300</Text>
        <Text zsize={400}>Text 400</Text>
        <Text zsize={500}>Text 500</Text>
        <Text zsize={600}>Text 600</Text>
        <Text zsize={700}>Text 700</Text>
      </Box>
      <Box width={1 / 3}>
        <Heading zsize={100}>HEADING 100</Heading>
        <Heading zsize={200}>HEADING 200</Heading>
        <Heading zsize={300}>HEADING 300</Heading>
        <Heading zsize={400}>Heading 400</Heading>
        <Heading zsize={500}>Heading 500</Heading>
        <Heading zsize={600}>Heading 600</Heading>
        <Heading zsize={700}>Heading 700</Heading>
        <Heading zsize={800}>Heading 800</Heading>
        <Heading zsize={900}>Heading 900</Heading>
      </Box>
      <Box>
        <Button zheight={24} zapp="success">
          Small Button
        </Button>
        <Button zheight={32}>Start Now</Button>
        <Button zheight={40} zapp="danger">
          Big Boy
        </Button>
        <Button zheight={32} zapp="warning">
          Big Boy
        </Button>
        <Button zheight={32} zapp="stale">
          Stale
        </Button>
      </Box>
    </Flex>
    <Flex flexWrap="wrap">
      <Box width={1 / 3}>
        <Heading zsize={700}>Heading 700</Heading>
        <Text zsize={700}>
          Reading is something that demands your full attention. Use the
          immersive full screen mode to bring the content you care about front
          and center.
        </Text>
      </Box>
      <Box width={1 / 3}>
        <Heading zsize={600}>Heading 600</Heading>
        <Text zsize={600}>
          Reading is something that demands your full attention. Use the
          immersive full screen mode to bring the content you care about front
          and center.
        </Text>
      </Box>
      <Box width={1 / 3}>
        <Heading zsize={500}>Heading 500</Heading>
        <Text zsize={500}>
          Reading is something that demands your full attention. Use the
          immersive full screen mode to bring the content you care about front
          and center.
        </Text>
      </Box>
      <Card border width={1 / 2} px={4} pb={5} mb={3}>
        <Heading zsize={600}>New Customers</Heading>
        <Text zsize={600}>
          Reading is something that demands your full attention. Use the
          immersive full screen mode to bring the content you care about front
          and center. It is what it is from the beginning.
        </Text>
      </Card>
    </Flex>
  </Box>
);

export default Design;
