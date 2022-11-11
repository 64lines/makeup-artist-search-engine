import './App.css';
import { Button, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { generateQuery, searchInGoogle } from './utils';

function App() {
  const [value, setValue] = useState('agencies');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = (event) => {
    
    console.log('Value Selected', value)
    searchInGoogle({ query: generateQuery({ value }) })
  }

  return (
    <div className="App">
      <Box sx={{ alignItems: 'center', width: '100%', maxWidth: 800, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h3" gutterBottom>
          Buscador del Makeup Artist
        </Typography>

        <RadioGroup onChange={handleChange} defaultValue="agencies">
          <FormControlLabel value="agencies" control={<Radio />} label="Agencias" />
          <FormControlLabel value="runways" control={<Radio />} label="Pasarelas" />
          <FormControlLabel value="catalogs" control={<Radio />} label="Catalogos" />
          <FormControlLabel value="events" control={<Radio />} label="Eventos" />
          <FormControlLabel value="productions" control={<Radio />} label="Producciones" />
          <FormControlLabel value="academies" control={<Radio />} label="Academias" />
        </RadioGroup>

        <Button variant="contained" onClick={handleClick}>Buscar</Button>

      </Box>

    </div>
  );
}

export default App;
