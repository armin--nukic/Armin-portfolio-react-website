import React from 'react'
import {VerticalTimeline,
        VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='2010 - 2015'
        iconStyle={{background: '#3e497a', color:"#fff"}}
        icon={<SchoolIcon/>}
        >
            <h3 className='vertical-timeline-element-title'>
              My school Medresa Osman ef. Redzovic VIsoko
            </h3>
            <p>High school diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='2010 - 2015'
        iconStyle={{background: '#3e497a', color:"#fff"}}
        icon={<SchoolIcon/>}
        >
            <h3 className='vertical-timeline-element-title'>
              My school Medresa Osman ef. Redzovic VIsoko
            </h3>
            <p>High school diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--work'
        date='2010 - 2015'
        iconStyle={{background: '#e9d35b', color:"#fff"}}
        icon={<WorkIcon/>}
        >
            <h3 className='vertical-timeline-element-title'>
              My school Medresa Osman ef. Redzovic VIsoko
            </h3>
            <p className='vertical-timeline-element-subtitle'>
             Visoko, Bosnia and Herzegovina
            </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
  )
}

export default Experience