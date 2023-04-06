import React, { useEffect, useState } from 'react';
import mapImage from './img/map.svg';
import { API_BASE_URL } from '../..';
import './style.css';

const CityOptions = ({ cities }) => {
  return (
    <>
      <option value="">Vyberte</option>
      {cities.map((city) => (
        <option key={city.code} value={city.code}>{city.name}</option>
      ))}
    </>
  )
}

const DateOptions = () => {
  return (
    <>
      <option value="">Vyberte</option>
      <option value="datum01">Datum 01</option>
      <option value="datum02">Datum 02</option>
      <option value="datum03">Datum 03</option>
      <option value="datum04">Datum 04</option>
      <option value="datum05">Datum 05</option>
    </>
  )
}




export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('')
  const [toCity, setToCity] = useState('')
  const [date, setDate] = useState('')
  const [cities, setCities] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("From: ", fromCity)
    console.log("To: ", toCity)
    console.log("Date: ", date)
  }

  useEffect(() => {
    fetch(`${API_BASE_URL}/cities`)
    .then((response) => response.json())
    .then((data) => {
      setCities(data.results)
    })
  }, [])


  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form onSubmit={handleSubmit} className="journey-picker__form">
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select value={toCity} onChange={(e) => setToCity(e.target.value)}>
              <CityOptions  cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select value={date} onChange={(e) => setDate(e.target.value)}>
              <DateOptions />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button
              className="btn"
              type="submit"
            >
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src={mapImage} />
      </div>
    </div>
  );

}
