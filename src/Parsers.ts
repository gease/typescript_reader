import {MatchStats, Result} from "./types";
import fs from "fs";

interface Parser {
    parse(): MatchStats[];
}

export class CsvParser implements Parser {

    private readonly _fileName: string;

    constructor(file_name: string = 'football.csv') {
        this._fileName = file_name;
    }

    parse(): MatchStats[] {
        const contents: string = fs.readFileSync(this._fileName, "utf8");
        let data: MatchStats[] = [];
        let day: number, month: number, year: number;

        const lines: string[] = contents.split("\n");
        for (let line of lines) {
            let read = line.split(',');
            [day, month, year] = read[0].split('/').map(v => parseInt(v));
            data.push([new Date(Date.UTC(year, month - 1, day)), read[1], read[2], parseInt(read[3]), parseInt(read[4]), read[5] as Result, read[6]]);
        }
        return data;
    }

}