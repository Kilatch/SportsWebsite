import axios from 'axios'


const API_URL = 'http://grupp5test.jls-sto1.elastx.net/get'

const getTableBySeasonId = async (id) => {
  let res = await axios.get(API_URL+"/tablebyseason/"+id)
  return res
}

const getSports = async () => {
  let res = await axios.get(API_URL+"/sports")
  return res
}

const getHomeOrAwayTable = async (seasonId, home) => {
  let res = await axios.get(API_URL+"/tablebyhomeoraway/"+seasonId+"/"+home)
  return res
}

const getLeagueBySport = async (id) => {
  const data = await axios.get(`${API_URL}/${id}`)
  return data(data)
}

export default {
  getLeagueBySport,
  getSports,
  getTableBySeasonId,
  getHomeOrAwayTable
}
