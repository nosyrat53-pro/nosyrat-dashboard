import React, {useEffect} from 'react';
import Grid from '@mui/material/Grid';
import './Users.css';
import Header from '../../Components/Header/Header';
import UserTable from '../../Components/UserTable/UserTable';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export default function Users() {
    useEffect(() => {
        document.getElementById('sidebarID').style.display = 'block';
        // const SideBar = document.querySelector('.sidebar');
        // if(SideBar.style.position = 'fixed'){
        //     SideBar.style.left = "-100%";
        // }
    },[]);
    return(
        <Grid  item xs className="users" sx={{
            
        }}>
            <Header />
            <div className="topSpacer"></div>
                <div className="overTable">
                    <h1>User</h1>   
                    <Button variant="contained" color='success' startIcon={<AddIcon />}>
                        Add User
                    </Button> 
                </div>
                {/* <Paper> */}
                <UserTable />
                {/* </Paper> */}
        </Grid>
    );
}