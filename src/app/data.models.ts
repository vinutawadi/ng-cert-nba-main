export interface Game {
  id: number;
  date: Date;
  home_team: Team;
  home_team_score: number;
  period: number;
  postseason: boolean;
  season: number;
  status: string;
  time: string;
  visitor_team: Team;
  visitor_team_score: number;
}

export interface Team {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
  modalId: number;
}

export interface Stats {
  wins: number;
  losses: number;
  averagePointsScored: number;
  averagePointsConceded: number;
  lastGames: Result[];
}

export interface HtmlInputEvent {
  target : EventTarget | null  
  
} 


export interface FilteredDivisionTeams  {
  teams: Team[];
}

export interface FilteredConfTeams  {
  filteredTeams: Team[];
  divisionsData: Team[]
}



export type Result = 'W' | 'L';