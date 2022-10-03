import {useLocation} from 'react-router-dom'


export default function EventPage(){


    

    const location = useLocation();

    // console.log(location.state.userName)
    // console.log(location.state.userEmail);
    console.log(new Date(location.state.startDate.$d));

    
    const eventStartDate = new Date(location.state.startDate.$d).toLocaleDateString();
    const today = new Date(location.state.startDate.$d);
    // const startTime = today.getHours() + ':' + today.getMinutes();
    const startTime = today.toLocaleTimeString('en-US', {
        // en-US can be set to 'default' to use user's browser settings
        hour: '2-digit',
        minute: '2-digit',
      });
    
    const eventEndDate = new Date(location.state.endDate.$d).toLocaleDateString();
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
            <h1>{location.state.userName}</h1>
            <h2>{location.state.userEmail}</h2>
            <h2>{eventStartDate} @ {startTime}</h2>
            <h2>{eventEndDate} @ {endTime}</h2>
            {/* <h2>{location.state.userDate}</h2> */}
            <h3>pls</h3>
        
        
        </>
    
    );
}