import React, { useState } from 'react';
import './secondform.css';
import { TextField, Button, Card, CardContent, Typography, IconButton, ThemeProvider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { createTheme } from '@mui/material/styles';

const theme = createTheme(); // Create a theme instance

const Secondform = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    const handleAddFeedback = () => {
        setFeedbacks([...feedbacks, '']);
    };

    const handleDeleteFeedback = (index) => {
        const newFeedbacks = [...feedbacks];
        newFeedbacks.splice(index, 1);
        setFeedbacks(newFeedbacks);
    };

    const handleFeedbackChange = (event, index) => {
        const newFeedbacks = [...feedbacks];
        newFeedbacks[index] = event.target.value;
        setFeedbacks(newFeedbacks);
    };

    const [value, setValue] = useState('Bug');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <ThemeProvider theme={theme}> {/* Wrap your component tree with ThemeProvider */}
            <div className='formtwo'>
                <h1>Feedback</h1>
                <h2>Count: {feedbacks.length}</h2>
                {feedbacks.map((feedback, index) => (
                    <Card key={index} variant="outlined" style={{ marginBottom: '1rem' }}>
                        <CardContent>
                            <Typography variant="h5" component="h3">
                                Feedback {index + 1}
                            </Typography>
                            <TextField
                                id={`feedback-${index}`}
                                multiline
                                rows={4}
                                defaultValue={feedback}
                                onChange={(event) => handleFeedbackChange(event, index)}
                            />
                            <IconButton aria-label="delete" onClick={() => handleDeleteFeedback(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </CardContent>
                    </Card>
                ))}
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    value="Enter your feedback here..."
                    onChange={handleChange}
                />
                <br />
                <Button variant="contained" color="primary" onClick={handleAddFeedback}>
                    Download
                </Button>
                <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '1rem' }}>
                    Submit
                </Button>
            </div>
        </ThemeProvider>
    );
};

export default Secondform;
