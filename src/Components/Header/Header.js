import React, { useEffect, useState,useRef } from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import HeaderAvatar from '../../assets/headerAvatar.jpg';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import { Button, Link, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import orderPlaced from '../../assets/orderplaced.svg';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import rachPhoto from '../../assets/rachphoto.jpg';
import newMessages from '../../assets/newmessages.svg';
import newMail from '../../assets/newmail.svg';
import delivery from '../../assets/delivery.svg';
import englishLanguage from '../../assets/Englishlang.svg';
import germanLanguage from '../../assets/germanlang.svg';
import frenchLanguage from '../../assets/frenchlang.svg';
import menuIcon from '../../assets/headerMenuicon.svg';

const Header = (props) => {

    const SearchBarRef = useRef();
    const SearchIconRef = useRef();


    useEffect(() => {

        window.onclick = (e) => {
            closeAllToolTips();

            if(e.target == SearchIconRef.current){
                SearchBarRef.current.classList.remove('hideSearchBar');
                SearchBarRef.current.classList.add('showSearchBar');
                SearchIconRef.current.style.visibility = 'hidden';
            }else if(e.target.id == 'searchbar'){

            }
            else {
                SearchBarRef.current.classList.remove('showSearchBar');
                SearchBarRef.current.classList.add('hideSearchBar');
                SearchIconRef.current.style.visibility = 'visible';
            }
           
            if(e.target.id != 'sidebarID'){
                const sidebar = document.querySelector('.sidebar');
                sidebar.style.left = '-100%';
            }
            if(e.target.id == 'hideSidebar'){
                const sidebar = document.querySelector('.sidebar');
                sidebar.style.left = '-100%';
            }
        };

    },[]);


    const closeAllToolTips = () => {
        var allToolTips = document.body.querySelectorAll('.avatar__paper');
        for(let i = 0 ; i < allToolTips.length ; i++){
            allToolTips[i].style.display = 'none';
        }
    };

    const handleShowToolTip = (e) => {
        e.stopPropagation();
        var allToolTips = document.body.querySelectorAll('.avatar__paper');
        var childrens = e.target.children;
       
        var currentToolTip ;

            for(let i = 0 ; i < allToolTips.length ; i++){
                if(e.target.parentElement == allToolTips[i].parentElement) {
                    currentToolTip = allToolTips[i];
                    break;
                }
            }
        // console.log(currentToolTip);
        if(currentToolTip.style.display == 'none'){
            currentToolTip.style.display = 'block';
        }else {
            currentToolTip.style.display = 'none'; 
        }
    };

    const ToggleSearchBar = (e) => {
        if(SearchBarRef.current.classList.length < 2){
        SearchBarRef.current.classList.add('showSearchBar');
        }
        if(SearchBarRef.current.classList.length = 2){
            SearchBarRef.current.classList.add('hideSearchBar');
        }
        if(SearchBarRef.current.classList.length = 3) {
            SearchBarRef.current.classList.remove('showSearchBar');
            SearchBarRef.current.classList.remove('hideSearchBar');
            SearchBarRef.current.classList.add('showSearchBar');
        }
    };

    const handleShowHideSideBar = (e) => {

        const sidebar = document.querySelector('.sidebar');
        sidebar.style.left = '0px';
    };

    return (
        <div className='fixedHeader'>

        <div className="Header">
            <div className={`headerSearch`} id="searchbar" ref={SearchBarRef}>
         
                <SearchIcon id="searchbar"/>
                
                <input id="searchbar" type='text' placeholder='Search...'/>

                <Button id="searchbar" variant="contained" color="success">Search</Button>
            </div>

            <div className='header__searchIcon'>

                <IconButton onClick={(e) => handleShowHideSideBar(e)} id="sidebarID" className="sidebar__MenuIcon">
                    <img className='menuIcon' src={menuIcon} alt="icon menu" />
                </IconButton>

                <IconButton ref={SearchIconRef}>
                    <SearchIcon />
                </IconButton>
            </div>

            <div className='header__menu'>
            <div className="headerMenu__IconContainer" onClick={(e) => handleShowToolTip(e)}>
                <IconButton>
                    <img src={englishLanguage} alt="english flag" />
                </IconButton>
                <Paper id="dodo" onClick={() => closeAllToolTips()} elevation={3} className="avatar__paper lang__paper" style={{display: 'none'}}>
                    <Button className="menu__langsButton" variant='text' sx={{
                        margin: '0px !important',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        width: '200px',
                        color: '#333333',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        backgroundColor: '#1111bb33',
                        borderRadius: '0px'
                    }}>
                    <img src={englishLanguage} alt="english lang" />
                        English
                    </Button>

                    <Button className="menu__langsButton" variant='text' sx={{
                        margin: '0px !important',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        width: '200px',
                        color: '#333333',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        borderRadius: '0px'
                    }}>
                    <img src={germanLanguage} alt="german lang" />
                    German
                    </Button>

                    <Button className="menu__langsButton" variant='text' sx={{
                        margin: '0px !important',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        width: '200px',
                        color: '#333333',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        borderRadius: '0px'
                    }}>
                    <img src={frenchLanguage} alt="french lang" />
                    French
                    </Button>

                </Paper> 
            </div>

                <div className="headerMenu__IconContainer" onClick={(e) => handleShowToolTip(e)}>
                
                <IconButton className="headerMenu__Notification">
                <Badge badgeContent={2} color="warning">
                    <NotificationsIcon/>
                </Badge>
                </IconButton>

                <Paper onClick={() => closeAllToolTips()} elevation={3} className="avatar__paper noti__paper" style={{display: 'none'}}>
                    <div className="Noti__topContent">
                        <div className="NotiTop__left">
                            <h2>Notifications</h2>
                            <p>You have 2 unread messages</p>    
                        </div>

                        <div className="NotiTop__right">
                            <IconButton>
                                <DoneAllIcon />
                            </IconButton>    
                        </div>
                    </div>

                    <hr className="avatar__divider" />

                    <div className="Noti__newNoti">
                        <h5 className='newNoti__title'>New</h5>
                        <Button variant="text" sx={{
                            margin: '0px !important',
                            marginBottom: '2px !important',
                            paddingLeft: '20px',
                            paddingRight: '20px',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            width: '100%',
                            height: '95px',
                            backgroundColor: '#33333322',
                            color: 'black',
                            borderRadius: '0px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <img className="noti__icon" src={orderPlaced} alt="your order is placed" />    
                        <div className="noti__content">
                            <h6>Your order is placed <span> waiting for shipping</span></h6>
                            <span className="noti__time"><AccessTimeFilledIcon/> about 6 hours</span>
                        </div>
                        </Button>

                        <Button variant="text" sx={{
                            margin: '0px !important',
                            marginBottom: '2px !important',
                            paddingLeft: '20px',
                            paddingRight: '20px',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            width: '100%',
                            height: '95px',
                            backgroundColor: '#33333322',
                            color: 'black',
                            borderRadius: '0px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <img className="noti__icon" src={rachPhoto} alt="your order is placed" />    
                        <div className="noti__content">
                            <h6>Rachael leushke <span> answererd to your comment on the minimal</span></h6>
                            <span className="noti__time"><AccessTimeFilledIcon/> about 4 hours</span>
                        </div>
                        </Button>
                    </div>

                    <div className="Noti__beforeNoti">
                    <h5 className='newNoti__title'>Before that</h5>
                    <Button variant="text" sx={{
                            margin: '0px !important',
                            marginBottom: '2px !important',
                            paddingLeft: '20px',
                            paddingRight: '20px',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            width: '100%',
                            height: '95px',
                            // backgroundColor: '#33333322',
                            color: 'black',
                            borderRadius: '0px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <img className="noti__icon" src={newMessages} alt="your order is placed" />    
                        <div className="noti__content">
                            <h6>You have new message <span> 5 unread messages</span></h6>
                            <span className="noti__time"><AccessTimeFilledIcon/> 1 day</span>
                        </div>
                    </Button>

                    <Button variant="text" sx={{
                            margin: '0px !important',
                            marginBottom: '2px !important',
                            paddingLeft: '20px',
                            paddingRight: '20px',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            width: '100%',
                            height: '95px',
                            // backgroundColor: '#33333322',
                            color: 'black',
                            borderRadius: '0px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <img className="noti__icon" src={newMail} alt="your order is placed" />    
                        <div className="noti__content">
                            <h6>You have new mail <span> sent from guido padberg</span></h6>
                            <span className="noti__time"><AccessTimeFilledIcon/> 2 days</span>
                        </div>
                    </Button>

                    <Button variant="text" sx={{
                            margin: '0px !important',
                            marginBottom: '2px !important',
                            paddingLeft: '20px',
                            paddingRight: '20px',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            width: '100%',
                            height: '95px',
                            // backgroundColor: '#33333322',
                            color: 'black',
                            borderRadius: '0px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <img className="noti__icon" src={delivery} alt="your order is placed" />    
                        <div className="noti__content">
                            <h6>Delivery processing <span> your order is being shipped</span></h6>
                            <span className="noti__time"><AccessTimeFilledIcon/> 3 days</span>
                        </div>
                        </Button>
                    </div>

                </Paper>  
                </div>

                <div className="headerMenu__IconContainer" onClick={(e) => handleShowToolTip(e)}>
                    <IconButton className='headerMenu__AvatarButton' >
                        <img src={HeaderAvatar} alt="avatar" className="headerMenu__avatar"/>
                    </IconButton>
                    <Paper onClick={() => closeAllToolTips()} elevation={3} className="avatar__paper" style={{display: 'none'}}>

                            <div className='avatarPaper__topContent' >
                                <h6 className="topContent__first">Mohammed Al-Nosyrat</h6>
                                <p className="topContent__second">alnsyrat582@gmail.com</p>
                            </div>

                            <hr className="avatar__divider"/>

                            <div className="avatar__bottomContent">
                                <Button variant="text" color='info' 
                                className="bottomContent__button"
                                sx={{
                                    color: '#000',
                                }}
                                >
                                
                                        <HomeIcon />
                                        Home
                        
                                </Button>

                                <Button variant="text" color='info' 
                                className="bottomContent__button"
                                sx={{
                                    color: '#000',
                                }}
                                >
                                
                                        <PersonIcon />
                                        Profile
                        
                                </Button>

                                <Button variant="text" color='info' 
                                className="bottomContent__button"
                                sx={{
                                    color: '#000',
                                }}
                                >
                                
                                        <SettingsIcon />
                                        Settings
                        
                                </Button>

                                <Button variant="outlined" color="error" sx={{
                                    width: '80%',
                                    margin: 'auto !important',
                                    marginTop: '10px !important',
                                    marginBottom: '10px !important',
                                    // backgroundColor: '#00000033'
                                }}>Log out</Button>
                            </div>
                    </Paper>    
                </div>

            </div>
            <div className="searchHeader">
                
            </div>
        </div>
        </div>
    );
};

export default Header;