import React from 'react';
import './style.css';

export const BusStop = () => {
    return (
        <>
         <div className="bus-stop">
                    <div className="bus-stop__bullet"></div>
                    <div className="bus-stop__place">
                        <div className="bus-stop__city">Město 1</div>
                        <div className="bus-stop__station">Zastávka</div>
                    </div>
                    <div className="bus-stop__departure">10:45</div>
                </div>
        
        </>
    )
}