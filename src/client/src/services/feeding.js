import axios from 'axios'
import config from '../utils/config'

const baseUrl = `${config.BASEURL}/feedings`

const getFeedingEvents = () => {
  return axios.get(baseUrl)
}

const addFeedingEvent = (feedingEvent) => {
  console.log('event submitted!', feedingEvent)
  return axios.post(baseUrl, feedingEvent)
}

export default {getFeedingEvents, addFeedingEvent}