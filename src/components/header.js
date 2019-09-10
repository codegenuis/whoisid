import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import logo from '../assets/logo.png'

const Header = (props) => (
    <React.Fragment>
        <CssBaseline />
        <Box component="div" m={1} className="App-primary-bg App-header">
            <Typography variant="h6" gutterBottom style={{ flex: 1,textAlign: 'left' }}>
                {props.title}
        </Typography>
        <img src={logo} alt="whois"/>
        </Box>
    </React.Fragment>
)

export default Header;