import { Team } from "./data.models";

export function filterDivisionData(teams: Team[]) {
  return teams.reduce((list: any, valu: Team) => {
    if (!list.find((data: any) => data.division === valu.division)) {
      list.push(valu);
    }
    return list;
  }, [])

}
export function filteredTeamsByConference(teams: Team[], event: any) {
  let data = [];
  switch (event?.target?.value) {
    case "West": {
      data = teams.filter(data => data.conference === 'West')
      break;
    }
    case 'East': {
      data = teams.filter(data => data.conference === 'East')
      break;
    }
    default: {
      data = teams;
      break;
    }
  }
  return data;
}

export function filteredTeamsByDivision(teams: Team[], divisions: Team[], value: string) {
  let list = [];
  const divisionValue = divisions.filter((data: any) => data.id === Number(value));
  list = teams.filter((data: any) => data.division === divisionValue[0].division);
  return list
}