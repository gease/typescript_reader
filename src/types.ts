export enum Result {H= 'H', A = 'A', D = 'D'};

// Match date, home team, away team, home goals, away goals, result(H/A/D), referee
export type MatchStats = [Date, string, string, number, number, Result, string];
