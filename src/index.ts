import Referees from "./Analyzers/Referees";
import {HtmlFileFormatter} from "./Formatters";
import {MatchCsvParser} from "./Parsers";


const parser = new MatchCsvParser(process.argv[2]);
const analyzer = new Referees('A Taylor');
const formatter = new HtmlFileFormatter();


formatter.format(analyzer.description(), analyzer.analyze(parser.parse()));
