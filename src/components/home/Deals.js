import React, { useState, useEffect } from "react";

export default function Deals() {
  const [remainingTime, setRemainingTime] = useState({ days:0, hours:0, minutes:0, seconds:0 });
  const dealEndDate = new Date("Mar 25, 2024 21:45:30");
  const now = new Date();
  // Date difference
  // getTime() gives milliseconds since January 1, 1970 00:00:00
  
  // 1 sec = 1000 milli seconds
  // 1 min = 60 sec
  // 1 hr = 60 min5
  // 1 day = 24 hr

  const differenceInMilliSeconds = dealEndDate.getTime() - now.getTime();
  console.log("End Time  ",dealEndDate.getTime());
  console.log("Now Time ", now.getTime());
  console.log("Difference: ", differenceInMilliSeconds);
  return (
    <div>Deals</div>
  )
}
