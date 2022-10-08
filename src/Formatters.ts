import fs from "fs";

interface Formatter {
    format(description: string, result: number): void;
}

export class ConsoleFormatter implements Formatter {
    format(description: string, result: number): void {
        console.log(description + ' ' + result);
    }
}

export class HtmlFileFormatter implements Formatter {
    private readonly _fileName: string;

    constructor(file_name: string = 'Output.html') {
        this._fileName = file_name;
    }

    format(description: string, result: number): void {
        const output = `<h2>Parsing outcome</h2><div>${description}</div><h4>${result}</h4>`;
        fs.writeFileSync(this._fileName, output);
    }

}
