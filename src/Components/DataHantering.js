import { ListAltRounded } from "@material-ui/icons";

const getAvailableSeasonIds = (matchlist) => {
    let list = [];
    let list2 = [];
    for (let i = 0; i < matchlist.length; i++) {
        let match = matchlist[i];
        if (!list.includes(match.round.season.id)) {
            list.push(match.round.season.id);
            list2.push(match.round.season);

        }
    }
    return list2
}

const getAvailableMatchinSeason = (matchlist, id) => {
    let list = [];
    for (let i = 0; i < matchlist.length; i++) {
        let match = matchlist[i];
        if ((match.round.season.id == id)) {
            list.push(match);
        }
    }
    return list
}

const getMatchByDate = (date, matchlist) => {
    let list = [];
    for (let i = 0; i < matchlist.length; i++) {
        let match = matchlist[i];
        if ((match.date == date)) {
            list.push(match);
        }
    }
    return list
}

const getAllDates = (matchlist) => {
    let list = [];
    for (let i = 0; i < matchlist.length; i++) {
        let match = matchlist[i];
        if (!list.includes(match.date)) {
            list.push(match.date);
        }
    }
    return list
}

const getMatchesTwo = (matchlist, id1, id2) => {
    let list = [];
    for (let i = 0; i < matchlist.length; i++) {
        let match = matchlist[i];
        if ((match.awayTeam.id == id1 || match.homeTeam.id == id1)&&
          (match.awayTeam.id == id2 || match.homeTeam.id == id2)) {
            list.push(match);
        }
    }
    return list
}

const getMatchFromEveryLeague = (matchlist) => {
    let listOfLeagueNames = [];
    let list = [];
    for (let i = 0; i < matchlist.length; i++) {
        let tempItem = matchlist[i]
        let currentLeagueName = tempItem.round.season.league.name;
        if (!listOfLeagueNames.includes(currentLeagueName)) {
            listOfLeagueNames.push(currentLeagueName);
            list.push(tempItem)
        }
        else if (listOfLeagueNames.includes(currentLeagueName)) {
            var count = 0;
            for (var j = 0; j < listOfLeagueNames.length; j++) {
                if (listOfLeagueNames[j] === currentLeagueName)
                    count++;
            }
            if (count < 3) {
                listOfLeagueNames.push(currentLeagueName);
                list.push(tempItem)
            }
        }
    }
    return list
}

export default {
    getMatchFromEveryLeague,
    getAvailableSeasonIds,
    getAvailableMatchinSeason,
    getAllDates,
    getMatchByDate,
    getMatchesTwo
}