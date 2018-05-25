// @flow

import axios from 'axios'

export const fetchNasaSuggestion = async(value: string) => {
  let response = await axios.get(`https://images-api.nasa.gov/search?q=${value}`)
  return response.data
}
