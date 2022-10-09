import {MatchStats, Result} from "./types";
import fs from "fs";

interface Parser<T> {
    parse(): T[];
}

abstract class CsvParser<T> implements Parser<T>{
    protected readonly _fileName: string;

    constructor(file_name: string = 'football.csv') {
        this._fileName = file_name;
    }

    parse(): T[] {
        const contents: string = fs.readFileSync(this._fileName, "utf8");
        const lines: string[] = contents.split("\n");

        let data: T[] = [];
        for (let line of lines) {
            let read = line.split(',');
            data.push(this.map(read));
        }
        return data;
    }

    protected abstract map(input: string[]): T;


}

export class MatchCsvParser extends CsvParser<MatchStats> {

    parse(): MatchStats[] {
        const contents: string = fs.readFileSync(this._fileName, "utf8");
        let data: MatchStats[] = [];

        const lines: string[] = contents.split("\n");
        for (let line of lines) {
            let read = line.split(',');
            data.push(this.map(read));
        }
        return data;
    }

    protected map(input: string[]): MatchStats {
        let day: number, month: number, year: number;
        [day, month, year] = input[0].split('/').map(v => parseInt(v));
        return [new Date(Date.UTC(year, month - 1, day)), input[1], input[2], parseInt(input[3]), parseInt(input[4]), input[5] as Result, input[6]];
    }

}
