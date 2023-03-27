import { HtmlInputEvent, Team } from "./data.models";

export function filterDivisionData(teams: Team[]) {
  return teams.reduce((list: Array<Team>, valu: Team) => {
    if (!list.find((data: Team) => data.division === valu.division)) {
      list.push(valu);
    }
    return list;
  }, [])

}
export function filteredTeamsByConference(teams: Team[], event: HtmlInputEvent) {
  let data = [];
  switch ((event.target as HTMLTextAreaElement).value) {
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
  const divisionValue = divisions.filter((data: Team) => data.id === Number(value));
  list = teams.filter((data: Team) => data.division === divisionValue[0].division);
  return list
}