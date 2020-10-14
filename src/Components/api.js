/**
 * @author @AghyadJabali
 */

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

const getLeagueBySport = async (id) => {
  let res = await axios.get(API_URL+"/leaguesbysport/"+id)
  return res
}
const getSeasonsByLeague = async (id) => {
  let res = await axios.get(API_URL+"/seasonsbyleague/"+id)
  return res
}


export default {
  getLeagueBySport,
  getSports,
  getTableBySeasonId,
  getSeasonsByLeague,
}