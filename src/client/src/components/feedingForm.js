import React, {useState} from 'react'
import DateTimePicker from 'react-datetime-picker';
// import LocationSearchInput from './placesAutocomplete'
import './feedingForm.css';
import '../App.css'

const FoodSelect = ({onChange}) => (
 <select onChange={onChange}>
  <option value='bread'>Bread</option>
  <option value='oats'>Oats</option>
  <option value='lettuce'>Lettuce</option>
  <option value='corn'>Corn</option>
  <option value='rice'>Rice</option>
  <option value='worms'>Worms</option>
  <option value='popcorn'>Popcorn</option>
  <option value='other'>Other</option>
</select> 
)

const FeedingForm = ({onSubmit}) => { 
  const [time, setTime] = useState(new Date())
  const [foodType, setFoodType] = useState('bread')
  const [location, setLocation] = useState('')
  const [numDucks, setNumDucks] = useState(0)
  const [foodAmount, setFoodAmount] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()
    const obj = {
      time,
      location: [-100, 100],
      numDucks,
      foodType,
      foodAmount
    }
    console.log('object to submit', obj)
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
        {/* <LocationSearchInput /> */}
        <input type='text' onChange={(e) => setLocation(e.target.location)} />
      </div>
      <div className='form-group'>
        <label>How many ducks</label>
        <input type='number' onChange={(e) => setNumDucks(e.target.value)}/>
      </div>
      <div className='form-group'>
        <label>How much food (in kg)</label>
        <input type='number' onChange={(e) => setFoodAmount(e.target.value)}/>
      </div>
          <button type='submit'>Submit</button>
    </form>
  )
 }

export default FeedingForm