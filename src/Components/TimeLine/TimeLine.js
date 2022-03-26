import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import './TimeLine.css';

export default function TimeLine() {
  return (
      <Grid item lg={5} md={6} sm={12} xs={12}>
        <Paper
        sx={{
            padding: '24px',
            borderRadius: '16px'
        }}
        className="timeLine__paper"
        >
            <h2>Order Timeline</h2>
        <Timeline>
      <TimelineItem>
        {/* <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          9:30 am
        </TimelineOppositeContent> */}
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='warning'>
            {/* <FastfoodIcon /> */}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          1983, orders, $4220
          </Typography>
          <Typography>22 Mar 2021 18:33</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {/* <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          10:00 am
        </TimelineOppositeContent> */}
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            {/* <LaptopMacIcon /> */}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          12 Invoices have been paid
          </Typography>
          <Typography>13 Sep 2021 16:58</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="success">
            {/* <HotelIcon /> */}
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Order #37745 from September
          </Typography>
          <Typography>11 Apr 2021 15:56</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            {/* <RepeatIcon /> */}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          New order placed #XF-2356
          </Typography>
          <Typography>03 May 2021 04:22</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="error">
            {/* <RepeatIcon /> */}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          New order placed #XF-2346
          </Typography>
          <Typography>01 Dec 2021 03:51</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
        </Paper>  
        </Grid>
    
  );
}