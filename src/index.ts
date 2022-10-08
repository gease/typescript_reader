import Referees from "./Analyzers/Referees";
import {HtmlFileFormatter} from "./Formatters";
import {CsvParser} from "./Parsers";


const parser = new CsvParser(process.argv[2]);
const analyzer = new Referees('M Dean');
const formatter = new HtmlFileFormatter();


formatter.format(analyzer.description(), analyzer.analyze(parser.parse()));
