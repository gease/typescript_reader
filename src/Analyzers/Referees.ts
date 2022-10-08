import AnalyzerInterface from "./AnalyzerInterface";
import {MatchStats, Result} from "../types";

class Referees implements AnalyzerInterface {
    private readonly _refereeName: string;

    constructor(referee_name:string) {
        this._refereeName = referee_name;
    }

    analyze(data: MatchStats[]): number {
        let result = 0;
        for (let match of data) {
            if (match[6] == this._refereeName) result++;
        }
        return result;
    }

    description(): string {
        return `${this._refereeName} matches served`;
    }

}

export default Referees
