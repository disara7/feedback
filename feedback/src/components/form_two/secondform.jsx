import React from 'react';
import './secondform.css';
import { Accordion, AccordionSummary, AccordionDetails, FormControlLabel, FormControl, FormLabel, TextField, Button, IconButton, Checkbox, Slider, Typography } from '@mui/material';
import { ExpandMore, CloudDownload } from '@mui/icons-material'; // Import the necessary icons
import DeleteIcon from '@mui/icons-material/Delete';

const Secondform = () => {

    const [value, setValue] = React.useState('Bug');
    const [checked, setChecked] = React.useState(false);
    const [recommendation, setRecommendation] = React.useState(3);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleRecommendationChange = (event, newValue) => {
        setRecommendation(newValue);
    };

    return (
        <div className='formtwo'>
            <h1>Feedback</h1>
            <br />
            <FormControl component="fieldset">

                <FormLabel component="legend">Count: 3</FormLabel>
                <br />
                <div className='options'>
                    <Accordion className='accordion-style'>
                        <AccordionSummary className='accordion-summary'
                            expandIcon={<ExpandMore />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <h3 >CANVAS chart-line chart-canvas</h3>
                        </AccordionSummary>
                        <AccordionDetails className='details-align-right'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <IconButton className='icon-style'><DeleteIcon /></IconButton>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='accordion-style'>
                        <AccordionSummary className='accordion-summary'
                            expandIcon={<ExpandMore />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <h3 >DIV container-fluid py-4</h3>
                        </AccordionSummary>
                        <AccordionDetails className='details-align-right'>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <IconButton className='icon-style'><DeleteIcon /></IconButton>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='accordion-style'>
                        <AccordionSummary className='accordion-summary'
                            expandIcon={<ExpandMore />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <h3 >DIV container-fluid py-4</h3>
                        </AccordionSummary>
                        <AccordionDetails className='details-align-right'>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <IconButton className='icon-style'><DeleteIcon /></IconButton>
                        </AccordionDetails>
                    </Accordion>
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
            <br /><br />
            
            <Typography id="recommendation-slider" gutterBottom>
                How likely are you to recommend?
            </Typography>
            <br />
            <Slider
                value={recommendation}
                onChange={handleRecommendationChange}
                aria-labelledby="recommendation-slider"
                step={1}
                marks
                min={1}
                max={5}
            />
            <div className='numbers'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                
            </div>
            <div className="scale">
            <p>Not very likely</p>
                <p>Very likely</p>
            </div>
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
                
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default Secondform;
