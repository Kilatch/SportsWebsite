import axios from 'axios'
const API_URL = 'http://grupp5test.jls-sto1.elastx.net/get'

const getLeagueBySport = async (id) => {
  const data = await axios.get(`${API_URL}/${id}`)
  return data(data)
}

module.exports = {
  getLeagueBySport,
}
