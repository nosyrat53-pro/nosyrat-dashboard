import React,{useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Header from '../../Components/Header/Header';
import './DashboardApp.css';
import Statistics from '../../Components/statistics/Staristics';
import weeklysales from '../../assets/weeklysales.svg';
import newUsers from '../../assets/newusers.svg';
import itemOrder from '../../assets/itemorder.svg';
import bugsIcon from '../../assets/bugs.svg';
import MultilineChart from '../../Components/MultiLineChart/MultiLineChart';
import PieChart from '../../Components/PieChart/PieChart';
import ConversionRates from '../../Components/ConversionRates/ConversionRates';
import CurrentSubjectChart from '../../Components/CurrentSubjectChart/CurrentSubjectChart';
import NewUpdates from '../../Components/NewUpdates/NewUpdates';
import TimeLine from '../../Components/TimeLine/TimeLine';
import TrafficBySite from '../../Components/TrafficBySite/TrafficBySite';
import Tasks from '../../Components/Tasks/Tasks';

const DashboardApp = (props) => {

    useEffect(() => {
        document.getElementById('sidebarID').style.display = 'block';
        // const SideBar = document.querySelector('.sidebar');
        // if(SideBar.style.position = 'fixed'){
        //     SideBar.style.left = "-100%";
        // }
    },[]);

    return (
        <Grid  item xs className="dashboard">
            <Header />

            <div className="topSpacer"></div>
            <h1 className="dashboard__welcom">Hi, Welcome back</h1>
            <Grid container spacing={2} rowSpacing={4}>
                <Statistics bg="rgb(200, 250, 205)" 
                icon={weeklysales} 
                number="714k" 
                title="weekly sales"
                />

                <Statistics 
                bg="rgb(208, 242, 255)" 
                icon={newUsers} 
                number="1.35m" 
                title="New users"
                textColor="#0c53b7"
                />

                <Statistics 
                bg="rgb(255, 247, 205)" 
                icon={itemOrder} 
                number="1.72m" 
                title="Item Orders"
                textColor="rgb(183, 129, 3)"
                />

                <Statistics 
                bg="rgb(255, 231, 217)" 
                icon={bugsIcon} 
                number="234" 
                title="Bug Reports"
                textColor="rgb(183, 33, 54)"
                />

            <MultilineChart />
            <PieChart />
            <ConversionRates />
            <CurrentSubjectChart />
            <NewUpdates />
            <TimeLine />
            <TrafficBySite />
            <Tasks />
            </Grid> 
            
        </Grid>
    );
}

export default DashboardApp;