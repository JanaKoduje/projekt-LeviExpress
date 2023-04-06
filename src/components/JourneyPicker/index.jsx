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

const DateOptions = ({ dates }) => {
  return (
    <>
      <option value="">Vyberte</option>
      {dates.map((date) => (
        <option key={date.dateBasic} value={date.dateBasic}>
          {date.dateCs}
        </option>
      ))}
    </>
  )
}




export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('')
  const [toCity, setToCity] = useState('')
  const [date, setDate] = useState('')
  const [cities, setCities] = useState([])
  const [dates, setDates] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("From: ", fromCity)
    console.log("To: ", toCity)
    console.log("Date: ", date)
  }

  const submitDisable = fromCity === '' || toCity === '' || date === ''

  useEffect(() => {
    fetch(`${API_BASE_URL}/cities`)
      .then((response) => response.json())
      .then((data) => {
        setCities(data.results)
      })

    fetch(`${API_BASE_URL}/dates`)
      .then((response) => response.json())
      .then((data) => {
        setDates(data.results)
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
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select value={date} onChange={(e) => setDate(e.target.value)}>
              <DateOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button
              disabled={submitDisable}
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
