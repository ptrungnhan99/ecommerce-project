import React, { useState } from "react";
import { useEffect } from "react";
const Clock = () => {
    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();
    let interval;
    const countDown = () => {
        const destination = new Date("01/22/2023 00:00:00").getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = destination - now;
            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);
            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
        })
    }
    useEffect(() => {
        countDown();
    })
    return (
        <div className="clock-wrapper d-flex align-items-center gap-3">
            <div className="clock-data d-flex align-items-center gap-3">
                <div className="text-center">
                    <h1 className="text-white fs-3 mb-2">{days}</h1>
                    <h5 className="text-white fs-6">Days</h5>
                </div>
                <span className="text-white fs-3">:</span>
            </div>
            <div className="clock-data d-flex align-items-center gap-3">
                <div className="text-center">
                    <h1 className="text-white fs-3 mb-2">{hours}</h1>
                    <h5 className="text-white fs-6">Hours</h5>
                </div>
                <span className="text-white fs-3">:</span>
            </div>
            <div className="clock-data d-flex align-items-center gap-3">
                <div className="text-center">
                    <h1 className="text-white fs-3 mb-2">{minutes}</h1>
                    <h5 className="text-white fs-6">Minutes</h5>
                </div>
                <span className="text-white fs-3">:</span>
            </div>
            <div className="clock-data d-flex align-items-center gap-3">
                <div className="text-center">
                    <h1 className="text-white fs-3 mb-2">{seconds}</h1>
                    <h5 className="text-white fs-6">Seconds</h5>
                </div>
            </div>
        </div>
    );
}

export default Clock;