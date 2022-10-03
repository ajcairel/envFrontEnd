import {useLocation} from 'react-router-dom';
import { GoLocation } from 'react-icons';

import './EventPage.css';


export default function EventPage(){


    

    const location = useLocation();

    // console.log(location.state.userName)
    // console.log(location.state.userEmail);
    console.log(new Date(location.state.startDate.$d));

    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const eventStartDate = new Date(location.state.startDate.$d).toLocaleDateString();
    const startMonth = new Date(location.state.startDate);
    const starty = month[startMonth.getMonth()]; 
    const startDay = new Date(location.state.startDate.$d).getDate();
    const today = new Date(location.state.startDate.$d);
    // const startTime = today.getHours() + ':' + today.getMinutes();
    const startTime = today.toLocaleTimeString('en-US', {
        // en-US can be set to 'default' to use user's browser settings
        hour: '2-digit',
        minute: '2-digit',
      });
    
    const eventEndDate = new Date(location.state.endDate.$d).toLocaleDateString();
    const endMonth = new Date(location.state.endDate);
    const endy = month[endMonth.getMonth()];
    const endDay = new Date(location.state.endDate.$d).getDate();
    const tomorrow = new Date(location.state.endDate.$d);
    // const endTime = tomorrow.getHours() + ':' + today.getMinutes();
    // console.log(time);
    const endTime = tomorrow.toLocaleTimeString('en-US', {
        // en-US can be set to 'default' to use user's browser settings
        hour: '2-digit',
        minute: '2-digit',
      });
   


    return (
        <>
            <h1>{location.state.eventName}</h1>
            <h1>{starty}</h1>
            <h1>{startDay}</h1>
            <h1>{endDay}</h1>
            <h1>{endy}</h1>
            <h2>{location.state.hostName}</h2>
            <h2>{eventStartDate} @ {startTime}</h2>
            <h2>{eventEndDate} @ {endTime}</h2>
            {/* <h2>{location.state.userDate}</h2> */}
            <h3>pls</h3>

            <h1 id="event-name">{location.state.eventName}</h1>
            <h4 id="host-name">Hosted By{location.state.hostName}</h4>
            <div id="event-image">
                <img src="./BdayCakeEnv.png" alt="cake" />
               
            </div>

            <div id="start-end">
                <h4 id="start"></h4>
            </div>

            
        
        
        </>
    
    );
}