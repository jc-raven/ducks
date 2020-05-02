import React from 'react'
import DateTimePicker from 'react-datetime-picker';
import LocationSearchInput from './placesAutocomplete'
import './feedingForm.css';
import '../App.css'

const FoodSelect = ({onChange}) => (
 <select>
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

const FeedingForm = ({onSubmit}) => (
  <form onSubmit={onSubmit}>
    <ul className='flexForm'>
      <li>
        <label>Time</label>
        <DateTimePicker
          onChange={()=>{}}
          value={new Date()}
          disableClock={true}
          clearIcon={null}
          calendarIcon={null}
        />
      </li>
      <li>
        <label>Food Type</label>
        <FoodSelect onChange={() => {}} />
      </li>
      <li>
        <label>Location</label>
        {/* <LocationSearchInput /> */}
        <input type='text' />
      </li>
      <li>
        <label>How many ducks</label>
        <input type='number' />
      </li>
      <li>
        <label>How much food</label>
        <input type='number' />
      </li>
      <li>
        <button type='submit'>Submit</button>
      </li>
    </ul>
  </form>
)

export default FeedingForm