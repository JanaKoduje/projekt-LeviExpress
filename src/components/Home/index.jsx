import React, {useState} from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDetail';

export const Home = () => {
  const [journey, setJourney] = useState(null);
  
  const handleJourneyChange = (detail) => {
        setJourney(detail)
       }
  
  
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange}/>
      { journey === null ? null : <JourneyDetail />}
    </main>
  );
}
