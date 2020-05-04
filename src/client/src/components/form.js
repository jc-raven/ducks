import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import DateTimePicker from 'react-datetime-picker';
import feedingService from '../services/feeding'
import '../static/App.css'

const FoodSelect = ({onChange}) => (
  <select className='form-select' onChange={onChange}>
    <option value='bread'>Bread</option>
    <option value='oats'>Oats</option>
    <option value='lettuce'>Lettuce</option>
    <option value='corn'>Corn</option>
    <option value='worms'>Worms</option>
    <option value='other'>Other</option>
  </select>
)

const FeedingForm = ({onSubmit}) => { 
  const [time, setTime] = useState(new Date())
  const [foodType, setFoodType] = useState('bread')
  const [location, setLocation] = useState('')
  const [numDucks, setNumDucks] = useState(0)
  const [foodAmount, setFoodAmount] = useState(0)
  const [err, setErr] = useState('')
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault()
    const obj = {
      time,
      location,
      numDucks,
      foodType,
      foodAmount
    }

    feedingService.addFeedingEvent(obj)
      .then((response) => {
        if (response && response.data) {
          const data = response.data;
          console.log('post successful', data);
          history.push('/thanks')
        }
      })
      .catch(err => {
        console.log('error', err);
        setErr(err.message)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label>Time</label>
        <DateTimePicker
          onChange={e => setTime(e)}
          value={time}
          disableClock={true}
          clearIcon={null}
          calendarIcon={null}
        />
      </div>
      <div className='form-group'>
        <label>Food Type</label>
        <FoodSelect onChange={e => setFoodType(e.target.value)} />
      </div>
      <div className='form-group'>
        <label>Location</label>
        <input type='text' onChange={(e) => setLocation(e.target.value)} />
      </div>
      <div className='form-group'>
        <label>How many ducks</label>
        <input type='number' onChange={(e) => setNumDucks(e.target.value)}/>
      </div>
      <div className='form-group'>
        <label>How much food (in kg)</label>
        <input type='number' step='any' onChange={(e) => setFoodAmount(e.target.value)}/>
      </div>
        <div className='form-group'>
          <button className='button' type='submit'>Submit</button>
          </div>
    </form>
  )
 }

export default FeedingForm