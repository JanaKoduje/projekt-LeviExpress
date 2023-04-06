import React from 'react';
import { BusStop } from '../BusStop';
import './style.css';

export const JourneyDetail = ({ journey }) => {
    return (
        <div className="journey-detail container">
            <h2>Podrobnosti cesty</h2>
            <div className="stops">
                <BusStop />
              
            </div>
        </div>



    )
}
