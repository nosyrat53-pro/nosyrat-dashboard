import React from 'react'
import Grid from '@mui/material/Grid';
import logo from '../../assets/logo.svg';
import './SideBar.css';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import boxLogo from '../../assets/boxlogo.jpg';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import dashboardIcon from '../../assets/dashboardIcon.svg';
import GroupIcon from '@mui/icons-material/Group';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import LockIcon from '@mui/icons-material/Lock';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import DashboardIcon from '@mui/icons-material/Dashboard';
import sidebarAvatar from '../../assets/sidebarAvatar.png';


const SideBar = (props) => {

    const toggleActive = (e) => {
        var links = document.getElementsByClassName('menu__item');
        // console.log('before');
        // for(let i = 0 ; i < links.length ; i++){
        //     console.log(links[i].classList);
        // }
        for(let i = 0 ; i < links.length ; i++){
            links[i].classList.remove('active');
            links[i].parentNode.classList.remove('activeButton');
            links[i].parentNode.setAttribute('variant','text');
        }
        // console.log('after');
        // for(let i = 0 ; i < links.length ; i++){
        //     console.log(links[i].classList);
        // }
        e.target.classList.add('active');
        e.target.parentNode.classList.add('activeButton');
        e.target.parentNode.setAttribute('variant','contained');
    };

    return (
        <Grid  item xs={3} className="sidebar" id="sidebarID" >

            <img src={logo} alt="logo" className="logo" />  
            <Box className="underLogoBox"  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                }}>

                    <img className='boxlogo' src={boxLogo} alt="boxlogo"/>
                    <div className="boxname">Mohammed Nosyrat</div>
            </Box>  

            <div className='menu'>

            <Link  to="/dashboard/app" className='munu__link'>
            <Button  className="menu__button" variant="text" sx={{
                width: '100%',
                padding: '0px',
                color: '#00000066',
            }}>

                <div id="hideSidebar" className="menu__item active" onClick={(e) => toggleActive(e)}>
                <DashboardIcon className="menu__icon"/>
                <div className='menuItem__text'>Dashboard</div>
                </div>
            </Button>
            </Link>
     
            <Link  to="/dashboard/users" className='munu__link'>
            <Button variant="text" sx={{
                width: '100%',
                padding: '0px',
                color: '#00000066',
            }}>

                <div id="hideSidebar" className="menu__item" onClick={(e) => toggleActive(e)}>
                <GroupIcon className="menu__icon"/>
                <div className='menuItem__text'>User</div>
                </div>
            </Button>
            </Link>

            <Link  to="/dashboard/product" className='munu__link'>
                <Button variant="text" sx={{
                    width: '100%',
                    padding: '0px',
                    color: '#00000066',
                }}>

                    <div id="hideSidebar" className="menu__item" onClick={(e) => toggleActive(e)}>
                    <Inventory2Icon className="menu__icon"/>
                    <div className='menuItem__text'>Product</div>
                    </div>
                </Button>
            </Link>

            <Link  to="/dashboard/blog" className='munu__link'>
                <Button variant="text" sx={{
                    width: '100%',
                    padding: '0px',
                    color: '#00000066',
                }}>

                    <div id="hideSidebar" className="menu__item" onClick={(e) => toggleActive(e)}>
                    <StickyNote2Icon className="menu__icon"/>
                    <div className='menuItem__text'>Blog</div>
                    </div>
                </Button>
            </Link>

            <Link  to="/login" className='munu__link'>
            <Button variant="text" sx={{
                width: '100%',
                padding: '0px',
                color: '#00000066',
            }}>

                <div id="hideSidebar" className="menu__item" onClick={(e) => toggleActive(e)}>
                <LockIcon className="menu__icon"/>
                <div className='menuItem__text'>Login</div>
                </div>
            </Button>
            </Link>
            
            <Link to="/register" className='munu__link'>
            
            <Button variant="text" sx={{
                width: '100%',
                padding: '0px',
                color: '#00000066',
            }}>

                <div id="hideSidebar" className="menu__item" onClick={(e) => toggleActive(e)}>
                <AssignmentIndIcon className="menu__icon"/>
                <div className='menuItem__text'>register</div>
                </div>
            </Button>
            </Link>

            <Link  to="/404" className='munu__link'>    
            <Button variant="text" sx={{
                width: '100%',
                padding: '0px',
                color: '#00000066',
            }}>

                <div id="hideSidebar" className="menu__item" onClick={(e) => toggleActive(e)}>
                <ReportProblemIcon className="menu__icon"/>
                <div className='menuItem__text'>not found</div>
                </div>
            </Button>
            </Link>

            <div className="sidebar__downsection">
            <img src={sidebarAvatar} alt="sidebaravatar" className='sidebar__downsectionavatar'/> 

            <div className='sidebar__text'>
                <h3>Get more?</h3>
                <div>From only $65</div>

                <Button variant='contained' color="success">Upgrade To Pro</Button>
            </div>
            </div>
            </div>
      
        </Grid>
    );
};

export default SideBar;