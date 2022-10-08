import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "./CreatePage.css";

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

  const eventName = useRef();
  const hostName = useRef();
  const userDate = useRef();
  const eventLocation = useRef();
  const navigate = useNavigate();
  const [startValue, setStartValue] = useState(getCurrentDate);
  const [endValue, setEndValue] = useState(getCurrentDate);

  const handleStartChange = (newStartValue) => {
    setStartValue(newStartValue);
  };
  const handleEndChange = (newEndValue) => {
    setEndValue(newEndValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/event", {
      state: {
        eventName: eventName.current.value,
        hostName: hostName.current.value,
        eventLocation: eventLocation.current.value,
        startDate: startValue,
        endDate: endValue,
      },
    });
  };

  return (
    <div id="landing-image">
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              
            >
              Event
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              ref={eventName}
              placeholder="Event Name"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              
            >
              Hosted By
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              ref={hostName}
              placeholder="Host Name"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              
            >
              Location
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              ref={eventLocation}
              placeholder="Host Name"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              
            >
              Starts
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                value={startValue}
                // ref={userDate}
                onChange={handleStartChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              
            >
              Ends
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                value={endValue}
                // ref={userDate}
                onChange={handleEndChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              
            >
              Event Image
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              input
              type="file"
              id="img"
              name="img"
              accept="image/*"
            />
          </div>
          {/* <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
        </label>
        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
        <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div> */}
          <div class="items-center justify-between">
            <button
              onClick={handleSubmit}
              id="submit-event-button"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
