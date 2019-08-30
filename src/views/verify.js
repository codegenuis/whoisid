import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Header from '../components/header'
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

class Verify extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            image: ''
        }
    }

    changeState = () => {
        this.setState({ show: true })
    }

    onTakePhoto = (dataUri) => {
        // Do stuff with the dataUri photo...
        this.setState({ image: dataUri, show: false })
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Header title="Verify - AA12" />
                <div className="Card-header">
                    <Container maxWidth="sm" style={{ textAlign: 'center' }} >
                        <form className="App-form" noValidate autoComplete="off">
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                                <TextField
                                    id="standard-dense"
                                    label="Kkan Muhammed"
                                    fullWidth
                                    variant="outlined"
                                    className="InputField"
                                />
                                <TextField
                                    id="standard-dense"
                                    label="08034712261"
                                    fullWidth
                                    variant="outlined"
                                    className="InputField"
                                />
                                <TextField
                                    id="standard-dense"
                                    label="Enter OTP"
                                    fullWidth
                                    variant="outlined"
                                    className="InputField"
                                />
                                <TextField
                                    id="standard-dense"
                                    label="103 ibidun Street off"
                                    fullWidth
                                    variant="outlined"
                                    className="InputField"
                                />
                                <div
                                    onClick={this.changeState}
                                    style={{ PaddingTop: 30, paddingBottom: 10, backgroundColor: '#E6E7E9' }}
                                    className={this.state.image !== '' ? 'hide' : 'show'}
                                >
                                    <div style={{ fontSize: 70, }}>
                                        <FontAwesomeIcon icon={faCamera} />
                                    </div>
                                    <p>Take Picture</p>
                                </div>
                                <div className={this.state.show ? "show" : "hide"} >
                                    <Camera onTakePhoto={(dataUri) => { this.onTakePhoto(dataUri); }} />
                                </div>
                                <div className={this.state.image !=='' ? "show":"hide"}>
                                    <img src={this.state.image} alt="verification" style={{maxWidth: "100%"}} />
                                </div>
                                <TextField
                                    id="standard-dense"
                                    label="Western Avenue, ojulegba"
                                    fullWidth
                                    variant="outlined"
                                    className="InputField"
                                />
                            </div>
                            <Button className="App-primary-bg App-primary-button" variant="contained" color="primary" style={{ paddingRight: 30, paddingLeft: 30, paddingTop: 10, paddingBottom: 10 }}>
                                Done
                            </Button>
                        </form>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}

export default Verify