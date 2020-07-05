import React from 'react';
import ReactDOM from 'react-dom';
import { SWRConfig } from 'swr';
import { ThemeProvider } from 'styled-components';

import Router from './router';
import { theme } from './styles';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const App: React.FC = () => {
  return (
    <React.Fragment>
      <SWRConfig value={{ revalidateOnFocus: false, fetcher }}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </SWRConfig>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
