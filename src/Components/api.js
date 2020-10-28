/**
 * @author @AghyadJabali
 */

import axios from 'axios'

const API_URL = 'http://grupp5test.jls-sto1.elastx.net/get'
const API_URL_POST = 'http://grupp5test.jls-sto1.elastx.net/add'

const getGamesByTeamId = async (id) => {
  let res = await axios.get(API_URL + '/games/' + id)
  return res
}

const getHomeGamesByTeamId = async (id) => {
  let res = await axios.get(API_URL + '/homegames/' + id)
  return res
}

const getAwayGamesByTeamId = async (id) => {
  let res = await axios.get(API_URL + '/awaygames/' + id)
  return res
}

const AddNewSport = async (spName) => {
  let res = await axios.post(API_URL_POST + '/newsport/' + spName)
  return res
}
const addNewLeague=async(leagueN, sportId)=>{
 
  let res = await axios.post(API_URL_POST+'/newleaguetosport/'+leagueN+'/'+sportId)
  return res

}


const getTableBySeasonId = async (id) => {
  let res = await axios.get(API_URL + '/tablebyseason/' + id)
  return res
}

const getSports = async () => {
  let res = await axios.get(API_URL + '/sports')
  return res
}

const getLeagueBySport = async (id) => {
  let res = await axios.get(API_URL + '/leaguesbysport/' + id)
  return res
}
const getSeasonsByLeague = async (id) => {
  let res = await axios.get(API_URL + '/seasonsbyleague/' + id)
  return res
}
const getMatchBySeason = async (id) => {
  let res = await axios.get(API_URL + '/gamebyseason/' + id)
  return res
}

const getMatchesInAllSeasons = async (idList) => {
  let matchList = []
  for (let j = 0; j < idList.length; j++) {
    let tempList = await axios.get(API_URL + '/gamebyseason/' + idList[j])
    if (tempList.data.length > 0) {
      for (let i = 0; i < tempList.data.length; i++) {
        let tempdata = tempList.data[i]
        if (tempdata != null) matchList.push(tempdata)
      }
    }
  }
  return matchList
}

const getAllAvailabeSeasons = async () => {
  let availableSportIds = await getAvailableSportIds()
  let availableLeagueIds = await getAvailableListIds(availableSportIds, 1)
  let availableSeasonIds = await getAvailableListIds(availableLeagueIds, 0)
  let matchList = await getMatchesInAllSeasons(availableSeasonIds)
  console.log(matchList)
  return matchList
}

const getAvailableListIds = async (idList, type) => {
  let allIdList = []
  let tempList
  for (let i = 0; i < idList.length; i++) {
    if (type == 1) tempList = await getLeagueBySport(idList[i])
    if (type == 0) tempList = await getSeasonsByLeague(idList[i])
    for (let j = 0; j < tempList.data.length; j++) {
      let tempdata = tempList.data[j]
      if (tempdata != null) allIdList.push(tempdata.id)
    }
  }

  return allIdList
}

const getAvailableSportIds = async () => {
  let res = await axios.get(API_URL + '/sports')
  let sportIds = []
  for (let i = 0; i < res.data.length; i++) {
    let sport = res.data[i]
    if (sport != null) sportIds.push(sport.id)
  }
  return sportIds
}

export default {
  getLeagueBySport,
  getSports,
  getTableBySeasonId,
  getSeasonsByLeague,
  getAllAvailabeSeasons,
  getMatchBySeason,
  getAwayGamesByTeamId,
  getGamesByTeamId,
  getHomeGamesByTeamId,
  AddNewSport,
  addNewLeague,
}
