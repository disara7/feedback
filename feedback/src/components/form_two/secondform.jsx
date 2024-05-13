import React from 'react';
import './secondform.css';
import { Accordion, AccordionSummary, AccordionDetails, FormControlLabel, FormControl, FormLabel, TextField, Button, IconButton, Checkbox, Slider, Typography, Popover } from '@mui/material';
import { ExpandMore, CloudDownload } from '@mui/icons-material'; // Import the necessary icons
import DeleteIcon from '@mui/icons-material/Delete';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import DataObjectRoundedIcon from '@mui/icons-material/DataObjectRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';

const Secondform = () => {

    const [value, setValue] = React.useState('Bug');
    const [htmlChecked, setHtmlChecked] = React.useState(false);
    const [pdfChecked, setPdfChecked] = React.useState(false);
    const [jsonChecked, setJsonChecked] = React.useState(false);
    const [recommendation, setRecommendation] = React.useState(3);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleHtmlCheckboxChange = (event) => {
        setHtmlChecked(event.target.checked);
    };

    const handlePdfCheckboxChange = (event) => {
        setPdfChecked(event.target.checked);
    };

    const handleJsonCheckboxChange = (event) => {
        setJsonChecked(event.target.checked);
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
                            <IconButton className='icon-style'><AttachFileIcon /></IconButton>
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

                        <IconButton className='icon-style'><AttachFileIcon /></IconButton>
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
                          <IconButton className='icon-style'><AttachFileIcon /></IconButton>
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
            <div className='buttons'>
                <div className="buttons-style">
                <Button 
                    variant="contained" 
                    color="primary"  
                    startIcon={<IosShareRoundedIcon />} 
                    onClick={handleClick}
                    anchorEl={document.querySelector('.formtwo')}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}>
                    EXPORT
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}
                >
                    <div className='popup'>
                        
                        <Typography variant="h6" gutterBottom>
                            Export Options
                        </Typography>
                        
                        <FormControlLabel
                            control={<Checkbox checked={htmlChecked} onChange={handleHtmlCheckboxChange} />}
                            label="HTML"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={pdfChecked} onChange={handlePdfCheckboxChange} />}
                            label="PDF"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={jsonChecked} onChange={handleJsonCheckboxChange} />}
                            label="JSON"
                        />
                        <br />
                        <Button variant="contained" color="primary"  startIcon={<CloudDownload />}>
                DOWNLOAD
            </Button>
                    </div>
                </Popover>
            

                </div>
            
                
               
                <Button className='buttons' type="submit" variant="contained" color="primary">
                    Submit
                </Button>

            </div>
        </div>
    )
}

export default Secondform;
