import { createMuiTheme } from 'material-ui/styles';

import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import grey from 'material-ui/colors/grey';

export default function theme() {
  return createMuiTheme({
    palette: {
      primary: {
        ...purple,
        A400: '#d72756',
        A700: '#d72756',
        A200: '#d72756',
        500: '#d72756',
      },
      secondary: {
        ...green,
        A400: '#00e677',
      },
      error: red,
    },
    typography: {
      fontFamily: "'Montserrat', sans-serif",
    },
    overrides: {
      root: {
        margin: 10,
        flexGrow: 1,
      },
      MuiPaper: {
        root: {
          padding: 16,
          margin: 10,
          color: grey[900],
        },
      },
      MuiButton: {
        root: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
        },
        dense: {
          height: 'auto',
          minWidth: 64,
          minHeight: 32,
        },
      },
    },
  });
}
