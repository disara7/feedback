import React from 'react';
import './firstform.css';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, TextField, Button, InputLabel, MenuItem, Select } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const Firstform = () => {
 
    const [value, setValue] = React.useState('Bug');
    const [rating, setRating] = React.useState(0);
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const handleRatingChange = (newValue) => {
      setRating(newValue);
    };

    return (
      <div className='formone'>
        <h1>Feedback</h1>
        <FormControl variant="outlined" fullWidth>
        <FormLabel component="legend">Feedback Type:</FormLabel> <br />
                <Select
                    
                    id="feedback-select"
                    value={value}
                    onChange={handleChange}
                    
                >
                    <MenuItem value="Bug">Bug</MenuItem>
                    <MenuItem value="Feature">Feature</MenuItem>
                    <MenuItem value="Request">Request</MenuItem>
                </Select>
            </FormControl>
        <br />
        
        <FormLabel component="legend">Summary:</FormLabel>
        <br />
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={1}
          defaultValue=""
          value=""
          // onChange={handleSummaryChange}
          // InputProps={{ // Customizing input props
          //   style: {
          //       borderBottom: '1px solid #000', // Adding only bottom border
          //   },
          // }}
        />
        <br /> 
        <FormLabel component="legend">Rating:</FormLabel>
        <br />
        <div className='emojis'>
          <SentimentVeryDissatisfiedIcon onClick={() => handleRatingChange(1)} />
          <SentimentDissatisfiedIcon onClick={() => handleRatingChange(2)} />
          <SentimentSatisfiedIcon onClick={() => handleRatingChange(3)} />
          <SentimentSatisfiedAltIcon onClick={() => handleRatingChange(4)} />
          <SentimentVerySatisfiedIcon onClick={() => handleRatingChange(5)} />
        </div>
        <br />
        <br />
        <FormLabel component="legend">Description:</FormLabel>
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

export default Firstform;
