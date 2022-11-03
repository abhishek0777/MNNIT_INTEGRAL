import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Typography } from '@mui/material';

const SectionThree = ({student}) => {
  const achievementsArr=student.achievements.split('\n')
  
  return (
    <div className="profile-3-container">
      
      <h1 className="profile-3-header">ACHIEVEMENTS</h1>
      
      <Timeline position="alternate">
        {achievementsArr.map(achievement=>
          <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color='primary'>
              <EmojiEventsIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="overline">{achievement}</Typography>
          </TimelineContent>
        </TimelineItem>
        )}
      </Timeline>
    </div>
  )
}

export default SectionThree