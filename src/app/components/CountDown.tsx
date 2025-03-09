"use client";
import React, { useState, useEffect } from "react";

const CountDown = () => {
  // Function to get the target date (7 days from now)
  const getTargetDate = () => {
    return +new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
  };

  // Initial difference calculation
  const [targetDate, setTargetDate] = useState(getTargetDate());
  const [difference, setDifference] = useState(targetDate - +new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const newDifference = targetDate - +new Date();

      if (newDifference <= 0) {
        // Reset target date to 7 days from now
        setTargetDate(getTargetDate());
      } else {
        setDifference(newDifference);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const d = Math.floor(difference / (1000 * 60 * 60 * 24));
  const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const m = Math.floor((difference / 1000 / 60) % 60);
  const s = Math.floor((difference / 1000) % 60);

  return (
    <span className="font-bold text-5xl text-yellow-300">
      {d}:{h}:{m}:{s}
    </span>
  );
};

export default CountDown;
