import axios from 'axios'
const API_URL = 'http://grupp5test.jls-sto1.elastx.net/get'


const getLeagueBySport = async (id) => {
  const data = await axios.get(`${API_URL}/'leaguesbysport'/${id}`)
  return data(data)
}

const getSeasonsbyleague = async (leagueId) => {
  const data = await axios.get(`${API_URL}/'seasonsbyleague'/${leagueId}`)
  return data(data)
}

const getGames = async (teamId1,teamId2) => {
  const data = await axios.get(`${API_URL}/'games'/${teamId1}/${teamId2}`)
  return data(data)
}

const getTeamGames = async (teamId) => {
  const data = await axios.get(`${API_URL}/'games'/${teamId}`)
  return data(data)
}

const getGamesInRound = async (roundId) => {
  const data = await axios.get(`${API_URL}/'gamesinround'/${roundId}`)
  return data(data)
}

const getTeamBySeason = async (seasonId) => {
  const data = await axios.get(`${API_URL}/'teambyseason'/${seasonId}`)
  return data(data)
}

const getHomeGames = async (teamId) => {
  const data = await axios.get(`${API_URL}/'homegames'/${teamId}`)
  return data(data)
}

const getAwayGames = async (teamId) => {
  const data = await axios.get(`${API_URL}/'awaygames'/${teamId}`)
  return data(data)
}

const getGameByDate = async (date) => {
  const data = await axios.get(`${API_URL}/'gamebydate'/${date}`)
  return data(data)
}

const getGameBySeason = async (seasonId) => {
  const data = await axios.get(`${API_URL}/'gamebyseason'/${seasonId}`)
  return data(data)
}

const getResultForGame = async (resultId) => {
  const data = await axios.get(`${API_URL}/'resultforgame'/${resultId}`)
  return data(data)
}

const getGamesWonByTeam = async (teamId) => {
  const data = await axios.get(`${API_URL}/'gameswonbyteam'/${teamId}`)
  return data(data)
}

const getGamesLostByTeam = async (teamId) => {
  const data = await axios.get(`${API_URL}/'gameslostbyteam'/${teamId}`)
  return data(data)
}

const getGamesDrawnByTeam = async (teamId) => {
  const data = await axios.get(`${API_URL}/'gamesdrawnbyteam'/${teamId}`)
  return data(data)
}

const getTableBySeason = async (seasonId) => {
  const data = await axios.get(`${API_URL}/'tablebyseason'/${seasonId}`)
  return data(data)
}

const getTableByLeagueAndYears = async (leagueId, startYear, endYear) => {
  const data = await axios.get(`${API_URL}/'tablebyleagueandyears'/${leagueId}/${startYear}/${endYear}`)
  return data(data)
}

const getTableByHomeOrAway = async (seasonId, boolean) => {
  const data = await axios.get(`${API_URL}/'tablebyhomeoraway'/${seasonId}/${boolean}`)
  return data(data)
}

const getTableByRound = async (seasonId, startRoundId,endRoundId) => {
  const data = await axios.get(`${API_URL}/'tablebyrounds'/${seasonId}/${startRoundId}/${endRoundId}`)
  return data(data)
}

const getTableByDate = async (seasonId, startDate,endDate) => {
  const data = await axios.get(`${API_URL}/'tablebydate'/${seasonId}/${startDate}/${endDate}`)
  return data(data)
}

export default {
  getLeagueBySport,
  getSeasonsbyleague,
  getGames,
  getTeamGames,
  getGamesInRound,
  getTeamBySeason,
  getHomeGames,
  getAwayGames,
  getGameByDate,
  getGameBySeason,
  getResultForGame,
  getGamesWonByTeam,
  getGamesLostByTeam,
  getGamesDrawnByTeam,
  getTableByLeagueAndYears,
  getTableByHomeOrAway,
  getTableByRound,
  getTableByDate,
  
}