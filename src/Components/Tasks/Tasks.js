import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './Tasks.css';

export default function Tasks(){

    const handleChange = (e) => {
        if(e.target.checked){
            e.target.parentElement.parentElement.style.textDecoration = 'line-through';
            e.target.parentElement.parentElement.style.color = "rgb(145, 158, 171)";
        }else {
            e.target.parentElement.parentElement.style.textDecoration = 'none'; 
            e.target.parentElement.parentElement.style.color = "black";
        }
    };

    return (
        <Grid item lg={8} md={6} sm={6} xs={12}>
            <Paper 
            sx={{
                padding: '24px',
                borderRadius: '16px'
            }}
            className="tasks__paper"
            >
                <h2>Tasks</h2>

                <div className="Tasks__Container">
                <FormControlLabel 
                sx={{
                    
                    paddingTop: '6px',
                    paddingBottom: '6px',
                    '& .MuiTypography-root': {
                        fontWeight: '500',
                        fontSize: '.9rem',
                    }
                }}
                control={<Checkbox  onChange={(e) => handleChange(e)}  color='success' />} 
                label=" Create FireStone Logo" 
                />

                
                <FormControlLabel 
                sx={{
                    
                    paddingTop: '6px',
                    paddingBottom: '6px',
                    '& .MuiTypography-root': {
                        fontWeight: '500',
                        fontSize: '.9rem',
                    }
                }}
                control={<Checkbox  onChange={(e) => handleChange(e)}  color='success' />} 
                label="Add SCSS and JS files if required" 
                />

                
                <FormControlLabel 
                sx={{
                    
                    paddingTop: '6px',
                    paddingBottom: '6px',
                    '& .MuiTypography-root': {
                        fontWeight: '500',
                        fontSize: '.9rem',
                    }
                }}
                control={<Checkbox  onChange={(e) => handleChange(e)}  color='success' />} 
                label="Stakeholder Meeting" 
                />

                
                <FormControlLabel 
                sx={{
                    
                    paddingTop: '6px',
                    paddingBottom: '6px',
                    '& .MuiTypography-root': {
                        fontWeight: '500',
                        fontSize: '.9rem',
                    }
                }}
                control={<Checkbox  onChange={(e) => handleChange(e)}  color='success' />} 
                label="Scoping  Estimations" 
                />

                
                <FormControlLabel 
                sx={{
                    
                    paddingTop: '6px',
                    paddingBottom: '6px',
                    '& .MuiTypography-root': {
                        fontWeight: '500',
                        fontSize: '.9rem',
                    }
                }}
                control={<Checkbox  onChange={(e) => handleChange(e)}  color='success' />} 
                label=" Sprint Showcase" 
                />

                </div>

            </Paper>
        </Grid>
    );
}