import React,{useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Header from '../../Components/Header/Header';
import './Blog.css';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PostTypeOne from '../../Components/PostTypeOne/PostTypeOne';
import Post1Image from '../../assets/post1.jpg';
import PostTypeTow from '../../Components/PostTypeTow/PostTypeTow';
import postavatar2 from '../../assets/postavatar2.jpg';
import postavatar3 from '../../assets/postavatar3.jpg';
import MainPost from '../../Components/MainPost/MainPost';
import post1 from '../../assets/postt1.jpg';
import avatar1 from '../../assets/avatarr4.jpg';
import post2 from '../../assets/postt2.jpg';
import avatar2 from '../../assets/avatarr2.jpg';
import cover6 from '../../assets/cover_6.jpg';
import avatar_6 from '../../assets/avatar_6.jpg';
import cover7 from '../../assets/cover_7.jpg';
import avatar_7 from '../../assets/avatar_7.jpg';
import cover8 from '../../assets/cover_8.jpg';
import avatar_8 from '../../assets/avatar_8.jpg';
import cover9 from '../../assets/cover_9.jpg';
import avatar_9 from '../../assets/avatar_9.jpg';
import cover10 from '../../assets/cover_10.jpg';
import avatar_10 from '../../assets/avatar_10.jpg';
import cover11 from '../../assets/cover_11.jpg';
import avatar_11 from '../../assets/avatar_11.jpg';
import cover12 from '../../assets/cover_12.jpg';
import avatar_12 from '../../assets/avatar_12.jpg';
import cover13 from '../../assets/cover_13.jpg';
import avatar_13 from '../../assets/avatar_13.jpg';
import cover14 from '../../assets/cover_14.jpg';
import avatar_14 from '../../assets/avatar_14.jpg';
import cover15 from '../../assets/cover_15.jpg';
import avatar_15 from '../../assets/avatar_15.jpg';

function createPostData(comments , views ,shares ,image , avatar , date ,title ){
    return {
        comments,
        views,
        shares, 
        image, 
        avatar,
        date, 
        title,
    };
}



const Blog  = (props) => {
    const [sortType, setSortType] = React.useState(10);
    const [posts] = useState([
        createPostData("39.41k","11.33k","70.82k",post1,avatar1,"03 March 2022","Fresh Prince"),
        createPostData("47.74k","62.34k","67.72k",post2,avatar2,"17 January 2022","Six Socks Studio"),

        createPostData("10.93k","82.97k","61.28k",cover6,avatar_6,"13 January 2022","vincenzo de cotiis’ crossing over showcases a researc"),
        createPostData("9.81k","80.83k","5.41k",cover7,avatar_7,"30 August 2021","Simple, Great Looking Animations in Your Projec"),
    
        createPostData("21.55k","37.22k","24.33k",cover8,avatar_8,"07 July 2021","40 Free Serif Fonts for Digital Designers"),
        createPostData("47.74k","62.34k","67.72k",cover9,avatar_9,"25 November 2021","Examining the Evolution of the Typical Web Design"),
    
        createPostData("39.41k","11.33k","70.82k",cover10,avatar_10,"06 October 2021","Illustration System Design"),
        createPostData("47.74k","62.34k","67.72k",cover11,avatar_11,"14 December 2021","CarZio-Delivery Driver App SignIn/SignUp"),

        createPostData("39.41k","11.33k","70.82k",cover12,avatar_12,"03 March 2022","How to create a client-serverless Jamstack app"),
        createPostData("47.74k","62.34k","67.72k",cover13,avatar_13,"22 December 2021","Tylko Organise effortlessly -3D & Motion Design"),
    
        createPostData("39.41k","11.33k","70.82k",cover14,avatar_14,"03 March 2022","Katie Griffin loves making that homey art"),
        createPostData("47.74k","62.34k","67.72k",cover15,avatar_15,"15 April 2021","The American Dream retold through mid-century"),
    ]);

    useEffect(() => {
        document.getElementById('sidebarID').style.display = 'block';
    },[]);

    const handleChange = (event) => {
        setSortType(event.target.value);
    };
    return (
        <Grid  item xs className="blog">
            <Header />

            <div className="topSpacer"></div>
            <div className="blog__title">
                <h1 className="title">Blog</h1>
                <Button sx={{
                    boxShadow: 'rgb(0 171 85 / 24%) 0px 8px 16px 0px',
                    backgroundColor: 'rgb(0, 171, 85)',
                }} variant="contained" color='success' startIcon={<AddIcon />}>
                        New post
                    </Button> 
                {/* <div className="blog__container">
                
                <Paper  
                sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    boxShadow: 'none',
                    cursor: 'pointer',
                    width: 'fit-content',
                    padding: '4px 16px',
                    border: '1px solid #44444444',
                    borderTopLeftRadius: '10px',
                    borderBottomLeftRadius: '0px',
                    ':hover': {
                        background: 'none',
                        boxShadow: 'none',
                    },
                    ':active': {
                        background: 'none'
                    }
                }}
                className="blogContainer"
                >
                </Paper>
                </div> */}
            </div>
            <div className="blog__search">
            <OutlinedInput
            sx={{
                borderRadius: '12px',
                padding: '0px',
                paddingLeft: '8px',
                '.MuiOutlinedInput-notchedOutline': {
                    
                    ':hover': {
                        outline: 'none',
                    }
                },
                'input:focus': {
                '..Mui-focused': {
                    borderWidth: '0px',
                }
            }
                
            }}
            id="outlined-adornment-weight"
            // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
            placeholder="Search post..."
          />

            <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">FILTER</InputLabel> */}
                <Select
                sx={{
                    borderRadius: '12px',
                }}
                id="demo-simple-select"
                value={sortType}
                // label="sortType"
                onChange={handleChange}
                >
                <MenuItem value={10}>Latest</MenuItem>
                <MenuItem value={20}>Popular</MenuItem>
                <MenuItem value={30}>Oldest</MenuItem>
                </Select>
            </FormControl>
            </Box>
            </div>

            
            <Grid container spacing={2} rowSpacing={4}>
                <PostTypeOne xsmall={6} img={Post1Image}/>

                <PostTypeTow title="Designify Agency Landing Page Design" 
                date="19 September 2021"
                comments="34.31k"
                views="99.10k"
                shares="65.40k"
                postavatar={postavatar2}
                />

                <PostTypeTow title="✨What is Done is Done ✨" 
                date="19 September 2021"
                comments="39.41k"
                views="11.33k"
                shares="70.82k"
                postavatar={postavatar3}
                />

                {posts.map((post,id) => {
                    return <MainPost 
                            comments={post.comments}
                            views={post.views}
                            shares={post.shares}
                            image={post.image}
                            avatar={post.avatar}
                            date={post.date}
                            title={post.title}
                            key={id} />
                })}
                {/* <MainPost                                                                    
                comments="39.41k"
                views="11.33k"
                shares="70.82k" 
                image={post1} 
                avatar={avatar4}
                date="03 March 2022" 
                 title="Fresh Prince" 
                /> */}
            </Grid> 
            
        </Grid>
    );
}

export default Blog;