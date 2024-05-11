import React from 'react';
import './secondform.css';
import { Card, CardContent, FormControlLabel, FormControl, FormLabel, TextField, Button, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material'; // Import the Delete icon
import DeleteIcon from '@mui/icons-material/Delete';

const Secondform = () => {
 
    const [value, setValue] = React.useState('Bug');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };



    return (
        <div className='formtwo'>
            <h1>Feedback</h1>
            <br />
            <FormControl component="fieldset">
                
                <FormLabel component="legend">Count: </FormLabel>
                <div className='options'>
                <Card variant="outlined" className='card-style'>
                    <CardContent className='option-card'>
                        <h3 >CANVAS chart-line chart-canvas</h3>
                        <IconButton className='icon-style'><DeleteIcon/></IconButton>
                    </CardContent>
                </Card>
                <Card variant="outlined" className='card-style'>
                    <CardContent className='option-card'>
                        <h3 >DIV container-fluid py-4</h3>
                        <IconButton className='icon-style'><DeleteIcon/></IconButton>
                    </CardContent>
                </Card>
                <Card variant="outlined" className='card-style'>
                    <CardContent className='option-card'>
                        <h3 >DIV container-fluid py-4</h3>
                        <IconButton className='icon-style'><DeleteIcon/></IconButton>
                    </CardContent>
                </Card>
                </div>
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

export default Secondform;
