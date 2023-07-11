import React, { useState, useEffect } from "react";

const Timer = () => {
  const [remainingTime, setRemainingTime] = useState("");
  const [consoleMessage, setConsoleMessage] = useState("");

  useEffect(() => {
    const calculateRemainingTime = () => {
      const now = new Date();
      const endOfDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        23,
        59,
        59
      );
      const timeLeft = endOfDay - now;

      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
      const seconds = Math.floor((timeLeft / 1000) % 60);

      const formattedTime = `${hours.toString().padStart(2, "0")} : ${minutes
        .toString()
        .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;

      setRemainingTime(formattedTime);

      if (minutes === 1 && seconds === 0) {
        setConsoleMessage("아... 내 1분...");
      }
    };

    const timer = setInterval(calculateRemainingTime, 1000);

    return () => clearInterval(timer);
  }, []);

  if (consoleMessage) {
    console.log(consoleMessage);
  }

  return (
    <div>
      <div>오늘이 {remainingTime} 밖에 안남았다니...</div>
    </div>
  );
};

export default Timer;
