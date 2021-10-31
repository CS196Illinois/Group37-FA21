import React, { Component } from 'react';
import { TextField, Container } from '@material-ui/core';

class Feedback extends Component{
    render() {
        return (
            <div>
                <h1> Feedback </h1>
                <p> Have any comments, questions, or concerns about our website? </p>
                <p> Feel free to submit feedback to us here. We would love to hear it! </p>
                <Container maxWidth="md">
                    <TextField
                        label="Enter Feedback"
                        variant="filled"
                        color="#13294B"
                        width="500 px"
                        margin="normal"
                        rows={8}
                        multiline
                        focused
                        fullWidth
                    />
                </Container>
            </div>
        );
    }
}

export default Feedback;