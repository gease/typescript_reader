import {MatchStats} from "../types";

interface AnalyzerInterface {
    analyze(data: MatchStats[]): number;
    description(): string;
}

export default AnalyzerInterface;
