import React from 'react';

import { Flex, Heading, Text, Card, Wrapper } from '~core';

const Expense: React.FC = () => (
  <Wrapper>
    <Flex>
      <Card width={1 / 2} px={4} pb={5} mb={3}>
        <Heading zsize={500}>New Customers 123456</Heading>
        <Text zsize={500}>
          Reading is something that demands your full attention. Use the
          immersive full screen mode to bring the content you care about front
          and center. It is what it is from the beginning.
        </Text>
      </Card>
    </Flex>
  </Wrapper>
);

export default Expense;
