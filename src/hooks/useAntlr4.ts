import { CharStream, CommonTokenStream } from 'antlr4'
import regexLexer from '../lib/regexLexer';
import regexParser from '../lib/regexParser';

import { MyRegexVisitor } from "../lib/MyRegexVisitor";

import { useState } from 'react';

export function useAntlr4() {
    const [mermaidString, setMemaidString] = useState("");
    const drawMermaid = (pipeExample: string) => {
        // let pipeExample = "(w3)?a*b";
        // let oldExample = "(w3)*(Sa)?4";

        let inputStream = new CharStream(pipeExample);

        let lexer = new regexLexer(inputStream);
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new regexParser(tokenStream);
        let result = parser.root();

        let treeString = result.toStringTree(parser.ruleNames, parser);
        console.log(treeString);

        const visitor = new MyRegexVisitor();

        visitor.visitRoot(result);

        let mermaidString = visitor.graph.toString();
        console.log(mermaidString);
        setMemaidString(mermaidString);
    }
    return { mermaidString, drawMermaid };
}