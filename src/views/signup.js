import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { Link } from "react-router-dom"
import Typography from '@material-ui/core/Typography';
import logo from '../assets/logo.png'

class Signup extends Component {
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
                    <img src={logo} alt="whois"/>
                </div>
                <div className="Signup-wrapper">
                    <Container maxWidth="md" style={{ textAlign: 'center' }} >
                        <form className="App-form" noValidate autoComplete="off" style={{ backgroundColor: 'transparent' }}>
                            <h2 style={{color: 'white'}}>Be in control of your privacy</h2>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <TextField
                                    id="standard-dense"
                                    label="First name"
                                    fullWidth
                                    variant="outlined"
                                    className="InputField"
                                    style={{ marginRight: 20 }}
                                />
                                <TextField
                                    id="standard-dense"
                                    label="Last name"
                                    fullWidth
                                    variant="outlined"
                                    className="InputField"
                                />
                            </div>
                            <TextField
                                id="standard-dense"
                                label="Phone number"
                                fullWidth
                                variant="outlined"
                                className="InputField"
                            />
                            <Link to="/verify-otp"><Button className="App-primary-bg App-primary-button" variant="contained" color="primary" style={{ paddingRight: 30, paddingLeft: 30, paddingTop: 10, paddingBottom: 10 }}>
                                Next
                            </Button></Link>
                        </form>
                    </Container>
                </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Signup