import React, { useEffect, useState } from 'react'
import feedingService from '../services/feeding'

const Results = () => {
  const [events, setEvents] = useState([])

  const hook = () => {
    feedingService.getFeedingEvents()
      .then(response => {
        console.log('hi')
        setEvents(response.data)
      })
      .catch(err => console.log('error retrieving feeding events', err))
  }
  useEffect(hook, [])

  return (
  <div>
    <ul>
      {events.map((f) => {
        return (<li>{f.foodType}</li>)
      })}
    </ul>
  </div>)
}

export default Results