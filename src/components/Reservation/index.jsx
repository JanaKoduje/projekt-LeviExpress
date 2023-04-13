import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../..";
import './style.css';

export const Reservation = () => {

    const { reservationId } = useParams();

    const [reservation, setReservation] = useState(null)

    const NoReservation = () => {
        return (
            <div className="reservation container">
                <h2>Rezervace nenalezena</h2>
            </div>
        )
    }

    useEffect(() => {
        fetch(`${API_BASE_URL}/reservation/?id=${reservationId}`)
            .then((response) => response.json())
            .then((data) => setReservation(data.results))

    }, [])


    return (
        <>
            {reservation ?
                <div className="reservation container">
                    <h2>Vaše e-jízdenka č. HAQBAQASf7M</h2>
                    <div className="reservation__body">
                        <div className="reservation__headings">
                            <p>Datum cesty:</p>
                            <p>Odjezd:</p>
                            <p>Příjezd:</p>
                            <p>Sedadlo:</p>
                        </div>
                        <div className="reservation__info">
                            <p>{reservation.date}</p>
                            <p>{reservation.fromCity.name}, {reservation.fromCity.time}</p>
                            <p>{reservation.toCity.name}, {reservation.toCity.time}</p>
                            <p>{reservation.seatNumber}</p>
                        </div>
                    </div>
                </div>
                : <NoReservation />}
        </>)
}

