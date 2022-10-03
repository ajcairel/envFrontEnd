import { Link } from "react-router-dom";
import './LandingPage.css';


export default function LandingPage() {
    return (
        <>
        <div id="heading-text">
            <h1 id="header">
                Imagine if 
                <span id="snapchat">Snapchat</span> had events.
            </h1>
            <h3 id="description">
            Easily host and share events with your friends across any social media.

            </h3>
        
        </div>
        <div id="landing-image">
            <img src="./LandingImage.png" alt="invite" />
        </div>

        <Link to="/create">
            <button id="create-button">Create My Event</button>
        </Link>

        </>
    );
}