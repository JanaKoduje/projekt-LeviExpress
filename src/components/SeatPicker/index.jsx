import React, { useEffect, useState } from 'react';
import { SeatRow } from './SeatRow';
import { API_BASE_URL } from '../..';
import './style.css';



export const SeatPicker = ({ seats, journeyId, selectedSeat, onSeatSelected }) => {
    return (
        <>
            <div className="seat-picker container">
                <h2>Vyberte sedadlo</h2>
                <div className="seats">
                    {seats.map((row, index) => <SeatRow key={index} row={row} rowSelectedSeat={selectedSeat} onSeatSelected={onSeatSelected}/>)}
                </div>
            </div>
        </>
    )
}
