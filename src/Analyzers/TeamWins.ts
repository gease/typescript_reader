import AnalyzerInterface from "./AnalyzerInterface";
import {MatchStats, Result} from "../types";

class TeamWins implements AnalyzerInterface{

    private readonly _teamName: string;
    private _description = 'Total wins';
    constructor(team_name: string = 'Man United') {
        this._teamName = team_name;
    }

    analyze(data: MatchStats[]): number {
        let result = 0;
        for (let match of data) {
            if ((match[1] == this._teamName && match[5] == Result.H) || (match[2] == this._teamName && match[5] == Result.A))
                result++;
        }
        return result;
    }

    description(): string {
        return `Total ${this._teamName} wins`;
    }
}

export default TeamWins;
