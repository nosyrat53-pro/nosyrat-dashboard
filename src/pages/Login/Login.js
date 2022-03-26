import React,{useEffect} from 'react';
import Grid from '@mui/material/Grid';
import './Login.css';
import { Paper, TextField } from '@mui/material';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import loginImage from '../../assets/illustration_login.png';
import Button from '@mui/material/Button';
import goicon from '../../assets/googleicon.svg';
import faceicon from '../../assets/FacebookIcon.svg';
import twittericon from '../../assets/twittericon.svg';
import { Box } from '@mui/system';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Login = (props) => {
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

                    <h1 className='registerTitle'>Hi, Welcome Back</h1>

                    <img src={loginImage} className="registerImageills" />
                </Paper>
            </Grid>

            <Grid item xs lg={7} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // justifyContent: 'center',
            }}>
                <div className='haveAccount'>Don’t have an account?   <Link to="/register" className='haveaccouuntlink'>Get started</Link></div>
                <div className='registerFormContainer'>
                <h2 className='getstarted'>Sign in to Minimal</h2>
                <p className='nocredit'>Enter your details below.</p>

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
                    {/* <div className='flnameContainer'>
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

                    </div> */}

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

                    <div className='rememberme'>
                    <FormControlLabel control={<Checkbox defaultChecked sx={{}}/>} label="Remember me" />
                    <Link to="/dashboard/app" className='remlink'>Forget password ?</Link>
                    </div>

                    <Button variant="contained" color='success' sx={{
                        width: '100%',
                        backgroundColor: 'rgb(0, 171, 85)',
                        boxShadow: 'rgb(0 171 85 / 24%) 0px 8px 16px 0px',
                        height: '48px',
                        borderRadius: '8px'
                    }}>Login</Button>
                </Box>

                {/* <div className='bottomTerms'>By registering, I agree to Minimal <Link to="/dashboard/app">Terms of Service</Link> and <Link to="/dashboard/app">Privacy Policy.</Link></div> */}
                </div>
            </Grid>
            
        </Grid>
    );
}

export default Login;