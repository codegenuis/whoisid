import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Header from '../components/header'
import { Link } from "react-router-dom"

class Login extends Component {
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
                 <Header title="Login" />
                <div className="Card-header">
                    <Container maxWidth="sm" style={{ textAlign: 'center' }} >
                        <form className="App-form" noValidate autoComplete="off">
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                                <TextField
                                    id="standard-dense"
                                    label="Enter Job ID"
                                    fullWidth
                                    variant="outlined"
                                    className="InputField"
                                />
                                <TextField
                                    id="standard-dense"
                                    label="Enter Pin"
                                    fullWidth
                                    variant="outlined"
                                    className="InputField"
                                />
                            </div>
                           <Link to="/verify"><Button className="App-primary-bg App-primary-button" variant="contained" color="primary" style={{ paddingRight: 30, paddingLeft: 30, paddingTop: 10, paddingBottom: 10 }}>
                                Done
                            </Button></Link>
                            <p>Don't have an account <Link to="/signup">Sign up</Link></p>
                        </form>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}

export default Login