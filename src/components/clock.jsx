import React, { useState, useEffect } from "react";
import "./clock.css";
import BackCircle from "../images/back-circle.png";
import ForeCircle from "../images/fore-circle.png";
import HoursNeddle from "../images/hours-neddle-1.png";
import MinutesNeddle from "../images/minutes-neddle-1.png";
import SecondsNeddle from "../images/seconds-neddle-1.png";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDeg = hours * 30 + minutes * 0.5;
  const minuteDeg = minutes * 6 + 0.1 * seconds;
  const secondDeg = seconds * 6;

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="outer-circle">
        <div class="image-container">
          <img src={BackCircle} alt="First Image" class="bottom-image" />
          <img src={ForeCircle} alt="Second Image" class="top-image" />
          <div className="dot"></div>
          <img
            src={HoursNeddle}
            alt="hours neddle"
            className="neddle hours-neddle"
            style={{ transform: `rotate(${hourDeg}deg)` }}
          />
          <img
            src={MinutesNeddle}
            alt="minutes neddle"
            className="neddle minutes-neddle"
            style={{ transform: `rotate(${minuteDeg}deg)` }}
          />
          <img
            src={SecondsNeddle}
            alt="seconds neddle"
            className="neddle seconds-neddle"
            style={{ transform: `rotate(${secondDeg}deg)` }}
          />
        </div>
      </div>
    </div>
  );
}

export default Clock;
