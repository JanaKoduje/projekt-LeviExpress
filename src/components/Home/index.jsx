import React, {useState} from 'react';
import { JourneyPicker } from '../JourneyPicker';

export const Home = () => {
  const [journey, setJourney] = useState(null);
  
  const handleJourneyChange = (detail) => {
        setJourney(detail)
       }
  
  
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange}/>
      { journey === null ? null : <h2>{`Nalezeno spojení s id ${journey.journeyId}`}</h2>}
    </main>
  );
}
