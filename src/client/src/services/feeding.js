import axios from 'axios'
const baseUrl = 'http://localhost:3001/feedings'

const getFeedingEvents = () => {
  return axios.get(baseUrl)
}

const addFeedingEvent = (feedingEvent) => axios.post(baseUrl, feedingEvent)

export default {getFeedingEvents, addFeedingEvent}