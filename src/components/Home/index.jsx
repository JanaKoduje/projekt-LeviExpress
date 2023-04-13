import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDetail';
import { SeatPicker } from '../SeatPicker';
import { API_BASE_URL } from '../..';

export const Home = () => {
  const [journey, setJourney] = useState(null);
  const [userSeat, setUserSeat] = useState(null);
  const navigate = useNavigate();

  const handleJourneyChange = (detail) => {
    setJourney(detail)
    setUserSeat(detail.autoSeat)
  }

  const handleBuy = () => {
    fetch(`${API_BASE_URL}/reservation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create',
        seat: userSeat,
        journeyId: journey.journeyId,
      }),
    })
      .then((response) => response.json())
      .then((data) => { navigate(`/reservation/${data.results.reservationId}`) })
  }


  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey === null ? null :
        <>
          <JourneyDetail journey={journey} />
          <SeatPicker
            seats={journey.seats}
            selectedSeat={userSeat}
            onSeatSelected={setUserSeat}
          />

          <div className="controls container">
            <button onClick={handleBuy} className="btn btn--big" type="button">Rezervovat</button>
          </div>
        </>
      }
    </main>
  );
}
