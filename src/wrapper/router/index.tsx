/* eslint-disable react/display-name */
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Crimes, Pokemon, Design, Navbar, Sidebar, Expense } from '~components';

import { Flex, Box } from '~core';
import { useWindowSize } from '~utils/hooks';

import { GlobalStyles } from '../styles';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <h2>Home</h2>
  },
  {
    path: '/bubblegum',
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: '/expense',
    main: () => <Expense />
  },
  {
    path: '/crimes',
    main: () => <Crimes />
  },
  {
    path: '/design',
    main: () => <Design />
  }
];

const Router: React.FC = () => {
  const size = useWindowSize();

  return (
    <BrowserRouter>
      <GlobalStyles />
      {size.width && size.width < 800 && <Navbar />}
      <Flex minHeight="100vh">
        {size.width && size.width >= 800 && (
          <Box sx={{ position: 'fixed' }}>
            <Sidebar />
          </Box>
        )}
        <Box
          sx={{ flex: 1, padding: '10px' }}
          ml={size.width && size.width >= 800 ? '220px' : 0}
        >
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route key={index} path={route.path} exact={route.exact}>
                <route.main />
              </Route>
            ))}
            <Route path="/pokemon/:id">
              <Pokemon />
            </Route>
            <Route path="/pokemon">
              <Redirect
                to={{ pathname: `/pokemon/${Math.floor(Math.random() * 10)}` }}
              />
            </Route>
          </Switch>
        </Box>
      </Flex>
    </BrowserRouter>
  );
};

export default Router;
