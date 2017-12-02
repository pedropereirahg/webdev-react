import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import App from '../App';
import theme from './theme';

const WebDevApp = () => (
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
);

export default WebDevApp;
