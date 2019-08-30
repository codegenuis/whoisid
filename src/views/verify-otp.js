import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { Link } from "react-router-dom"
import Typography from '@material-ui/core/Typography';

class VerifyOTP extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
        }
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <div className="wrapper">
                <div style={{display: 'flex'}}>
                    <div style={{flex: 1}}></div>
                    <Typography variant="h5" gutterBottom className="App-color" style={{fontWeight: 'bold'}}>
                        WhoIsID.Co
                    </Typography>
                </div>
                <div className="Signup-wrapper">
                    <Container maxWidth="sm" style={{ textAlign: 'center' }} >
                        <form className="App-form" noValidate autoComplete="off" style={{ backgroundColor: 'transparent' }}>
                            <h2 style={{color: 'white'}}>Enter OTP sent to your phone</h2>
                            <TextField
                                id="standard-dense"
                                label="Verification Code"
                                fullWidth
                                variant="outlined"
                                className="InputField"
                            />
                            <Link to="/verify"><Button className="App-primary-bg App-primary-button" variant="contained" color="primary" style={{ paddingRight: 30, paddingLeft: 30, paddingTop: 10, paddingBottom: 10 }}>
                                Submit
                            </Button></Link>
                        </form>
                    </Container>
                </div>
                </div>
            </React.Fragment>
        )
    }
}

export default VerifyOTP