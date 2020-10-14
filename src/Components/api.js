import axios from 'axios'
//const API_URL = 'http://grupp5test.jls-sto1.elastx.net/get'
const API_URL = 'http://env-8381185.jls-sto1.elastx.net/sports/listallsports'

const getSports = async () => {
  let res = await axios.get(API_URL)
  return res
}

const getLeagueBySport = async (id) => {
  const data = await axios.get(`${API_URL}/${id}`)
  return data(data)
}

export default {
  getLeagueBySport,
  getSports,
}
