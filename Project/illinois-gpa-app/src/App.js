import './App.css';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import { Typography } from '@mui/material'

function App() {
  return (
    <body>
      <div className="App">
        <AppBar position="sticky">
          <Toolbar>
            <IconButton aria-label="app" color="inherit">
            </IconButton>
            <Typography variant="h6"> Illinois GPA Wiki </Typography>
          </Toolbar>
        </AppBar>
        <h1> Insert Graph Here? </h1>
        <h2> Description? </h2>
      </div>
    </body>
  );
}

export default App;