import React, { useEffect, useState } from 'react'
import Header from './header'
import feedingService from '../services/feeding'
import '../static/table.css'

const columns = [ 
      { name: 'Time', key: 'time' },
      { name: 'Feeding Location', key: 'location' },
      { name: 'Ducks Present', key: 'numDucks' },
      { name: 'Food Type', key: 'foodType' },
      { name: 'Food Amount (in Kg)', key: 'foodAmount' },
]

const generateHeaders = () => {
  return columns.map(col => <th key={col.key}>{col.name}</th>)
}

const generateData = (rows) => {
  return rows.map(event => {
      const { id, time, location, foodType, numDucks, foodAmount } = event 
      return (
        <tr key={id}>
            <td>{time}</td>
            <td>{location}</td>
            <td>{numDucks}</td>
            <td>{foodType}</td>
            <td>{foodAmount}</td>
        </tr>
      )
  })
}

const Results = () => {
  const [rows, setRows] = useState([])
  const hook = () => {
    feedingService.getFeedingEvents()
      .then(response => {
        setRows(response.data)
      })
      .catch(err => console.log('error retrieving feeding events', err))
  }
  useEffect(hook, [])

  if (rows && rows.length) {
    return (
      <div className='App'>
        <Header authState={true}/>
        <h3>Duck Feeding Data</h3>
        <table className='results_tbl'>
          <tbody>
          <tr>{generateHeaders()}</tr>
          {generateData(rows)}
        </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <p>unable to load duck data</p>
    )
  }
}

export default Results