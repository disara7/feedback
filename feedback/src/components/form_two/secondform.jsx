import React from 'react';
import './secondform.css';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, TextField, Button } from '@mui/material';




const Secondform = () => {
 
    const [value, setValue] = React.useState('Bug');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  return (
    <div className='formone'>
      <h1>Feedback</h1>
      <FormControl component="fieldset">
      <FormLabel component="legend">Feedback Type</FormLabel>
      <RadioGroup
        aria-label="gender"
        defaultValue="Bug"
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <div className='radio'>
        <FormControlLabel value="Bug" control={<Radio />} label="Bug" />
        <FormControlLabel value="Feature" control={<Radio />} label="Feature" />
        <FormControlLabel value="Request" control={<Radio />} label="Request" />
        </div>
      </RadioGroup>
    </FormControl>
<br />
<TextField
        id="outlined-multiline-static"
        multiline
        rows={4}
        defaultValue="Default Value"
        value="Enter your feedback here..."
        onChange={handleChange}
      />
      <br />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>

    
      
    </div>
  )
}

export default Secondform