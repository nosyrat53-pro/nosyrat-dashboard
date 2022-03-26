import React,{useEffect} from 'react';
import Grid from '@mui/material/Grid';
import './Register.css';
import { Paper, TextField } from '@mui/material';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import registerImage from '../../assets/illustration_register.png';
import Button from '@mui/material/Button';
import goicon from '../../assets/googleicon.svg';
import faceicon from '../../assets/FacebookIcon.svg';
import twittericon from '../../assets/twittericon.svg';
import { Box } from '@mui/system';

const Register = (props) => {
    useEffect(() => {
        document.getElementById('sidebarID').style.display = 'none';
    },[]);
    return (
        <Grid  item container spacing={3} className="register">
            <Grid item xs className="leftRegisterLoginSide">
                <Paper sx={{
                    padding: '32px',
                    marginLeft: '16px',
                    borderRadius: '16px',
                }}>
                    <Link to={'/dashboard/app'}>
                    <img src={logo} className="registerLogo" />
                    </Link>

                    <h1 className='registerTitle'>Manage the job more effectively with Minimal</h1>

                    <img src={registerImage} className="registerImageills" />
                </Paper>
            </Grid>

            <Grid item xs lg={7} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // justifyContent: 'center',
            }}>
                <div className='haveAccount'>Already have an account?  <Link to="/login" className='haveaccouuntlink'>Login</Link></div>
                <div className='registerFormContainer'>
                <h2 className='getstarted'>Get started absolutely free.</h2>
                <p className='nocredit'>Free forever. No credit card needed.</p>

                <div className="regButtons">
                    <Button variant="outlined"><img src={goicon} /></Button>
                    <Button variant="outlined"><img src={faceicon} /></Button>
                    <Button variant="outlined"><img src={twittericon} /></Button>
                </div>

                <div className='orContainer'>
                    <p className='orItself'>
                        OR
                    </p>
                </div>

                <Box
                component="form"
                sx={{
                    width: '100%',
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                
                autoComplete="off"
                >
                    <div className='flnameContainer'>
                    <TextField
                    id="outlined-password-input"
                    label="First Name"
                    type="text"
                    required
                    autoComplete="current-password"
                    />

                    <TextField
                    id="outlined-password-input"
                    label="Last Name"
                    type="text"
                    autoComplete="current-password"
                    required
                    className='lastname'
                    />

                    </div>

                    <div className='emailpassContainer'>
                        
                    <TextField
                    id="outlined-password-input"
                    label="Email"
                    type="email"
                    autoComplete="current-password"
                    required
                    className='empas'
                    />

                                        
                    <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className='empas'
                    />
                    
                    </div>

                    <Button variant="contained" color='success' sx={{
                        width: '100%',
                        backgroundColor: 'rgb(0, 171, 85)',
                        boxShadow: 'rgb(0 171 85 / 24%) 0px 8px 16px 0px',
                        height: '48px',
                        borderRadius: '8px'
                    }}>Register</Button>
                </Box>

                <div className='bottomTerms'>By registering, I agree to Minimal <Link to="/dashboard/app">Terms of Service</Link> and <Link to="/dashboard/app">Privacy Policy.</Link></div>
                </div>
            </Grid>
            
        </Grid>
    );
}

export default Register;