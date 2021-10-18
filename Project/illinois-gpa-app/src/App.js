import React from 'react';
import './App.css';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import MainMenu from'./components/Menu.js';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d84315',
    },
    secondary: {
      main: '#002171',
    },
  }
})

function App() {
  return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Container>
            <AppBar color="primary">
              <Toolbar>
                <MainMenu />
                <Typography variant="h6">
                  Illinois GPA Wiki
                </Typography>
              </Toolbar>
            </AppBar>
          </Container>
        </ThemeProvider>
      </div>
  );
}

export default App;