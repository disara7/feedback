import React from 'react';
import './firstform.css';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';



const Firstform = () => {
 
    const [value, setValue] = React.useState('Bug');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  return (
    <div className='formone'>
      <FormControl component="fieldset">
      <FormLabel component="legend">Feedback Type</FormLabel>
      <RadioGroup
        aria-label="gender"
        defaultValue="Bug"
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="Bug" control={<Radio />} label="Bug" />
        <FormControlLabel value="Feature" control={<Radio />} label="Feature" />
        <FormControlLabel value="Request" control={<Radio />} label="Request" />
      </RadioGroup>
    </FormControl>

<FormControl>

  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">
    We'll never share your email.
  </FormHelperText>
</FormControl>

      <form>
        <h1>Feedback</h1>
        <h2>Feedback Type: </h2>
        <ul>
            <li>
              <input type="radio" id="f-option" name="selector"/>
              <label for="f-option">Bug</label>
              
              <div class="check"></div>
            </li>
            
            <li>
              <input type="radio" id="s-option" name="selector"/>
              <label for="s-option">Feature</label>
              
              <div class="check"><div class="inside"></div></div>
            </li>
            
            <li>
              <input type="radio" id="t-option" name="selector"/>
              <label for="t-option">Request</label>
              
              <div class="check"><div class="inside"></div></div>
            </li>
          </ul>
                

      </form>
      
    </div>
  )
}

export default Firstform