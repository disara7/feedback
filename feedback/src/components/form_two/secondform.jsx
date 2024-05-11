import React from 'react';
import './secondform.css';
import { Card, CardContent, FormControlLabel, FormControl, FormLabel, TextField, Button, IconButton, Checkbox } from '@mui/material';
import { Delete, CloudDownload } from '@mui/icons-material'; // Import the necessary icons
import DeleteIcon from '@mui/icons-material/Delete';

const Secondform = () => {
 
    const [value, setValue] = React.useState('Bug');
    const [checked, setChecked] = React.useState(false);
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const handleCheckboxChange = (event) => {
      setChecked(event.target.checked);
    };

    return (
        <div className='formtwo'>
            <h1>Feedback</h1>
            <br />
            <FormControl component="fieldset">
                
                <FormLabel component="legend">Count: </FormLabel>
                <br />
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
            <br /> <br />
            <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue="Default Value"
                value="Enter your feedback here..."
                onChange={handleChange}
            />
            <br />
            <br />
            <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleCheckboxChange} />}
                label={<span style={{ color: 'grey' }}>Include Screenshot</span>}
            />
            <br />
            <div className='buttons'>
            <Button
                variant="contained"
                color="primary"
                startIcon={<CloudDownload />}
                onClick={() => {
                    // Handle download functionality here
                }}
            >
                Download
            </Button>
            <br />
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
            </div>
        </div>
    )
}

export default Secondform;
