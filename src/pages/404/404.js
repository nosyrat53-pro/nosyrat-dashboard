import React,{useEffect} from 'react';
import Grid from '@mui/material/Grid';
import logo from '../../assets/logo.svg';
import './404.css';
import notfoundImage from '../../assets/illustration_404.svg';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {

    useEffect(() => {
        document.getElementById('sidebarID').style.display = 'none';
    },[]);

    return (
        <Grid item xs className="notfound">
            <Link to="/dashboard/app">
            <img src={logo} className="notfound__logo" /> 
            </Link>
            <div className="notfoundContainer">
                   <h1 className='notfound__title'>Sorry, page not found!</h1>

                   <p className="notfound__desc">Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.</p>
            
                    <img src={notfoundImage} className="notfound__image" />

                    <Link to="/dashboard/app" style={{textDecoration: 'none'}}>
                    <Button variant="contained" color="success" sx={{
                        marginBottom: '15%',
                    }}>Go to home</Button>
                    </Link>
            </div>
        </Grid>
    );
}
export default NotFound;