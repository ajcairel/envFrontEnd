import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import './CreatePage.css';

export default function CreatePage() {
  function getCurrentDate(separator = "") {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
  }

  const userName = useRef();
  const userEmail = useRef();
  const userDate = useRef();
  const navigate = useNavigate();
  const [value, setValue] = useState(getCurrentDate);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/event", {
      state: {
        userName: userName.current.value,
        userEmail: userEmail.current.value,
        userDate: value,
      },
    });
  };

  return (

    

    
    // <form>
    //   <div>
    //     <label htmlFor="name">Event Name</label>
    //     <input id="name" type="text" ref={userName} name="name" />
    //   </div>
    //   <div>
    //     <label htmlFor="email">Host Name</label>
    //     <input id="email" type="email" ref={userEmail} name="email" />
    //   </div>
    //   <LocalizationProvider dateAdapter={AdapterDayjs}>
    //     <DateTimePicker
    //       label="Starts"
    //       value={value}
    //       ref={userDate}
    //       onChange={handleChange}
    //       renderInput={(params) => <TextField {...params} />}
    //     />
    //   </LocalizationProvider>
    //   <LocalizationProvider dateAdapter={AdapterDayjs}>
    //     <DateTimePicker
    //       label="Ends"
    //       value={value}
    //       ref={userDate}
    //       onChange={handleChange}
    //       renderInput={(params) => <TextField {...params} />}
    //     />
    //   </LocalizationProvider>
    //   <div>
    //     <label for="img">Event Image:</label>
    //     <input type="file" id="img" name="img" accept="image/*" />
    //   </div>
    //   <button onClick={handleSubmit} type="submit">
    //     Submit
    //   </button>
    // </form>


    <div id="landing-image">
        <div class="w-full max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Event Name"/>
        </div>
        <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Event Name"/>
        </div>
        <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Event Name"/>
        </div>
        {/* <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
        </label>
        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
        <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div> */}
        <div class="items-center justify-between">
        <button id="submit-event-button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
        </button>
        </div>
    </form>
   
    </div>

    </div>

    

   
  );
}
