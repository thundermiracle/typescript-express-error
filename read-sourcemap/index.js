import StackTraceParser from "stacktrace-parser";
import { SourceMapConsumer } from "source-map";
import fs from "fs";

const stack = `
Error: Error here!!
    at /Users/liufeng/Code/typescript-nodejs-boilerplate/dist/main.js:2:93121
    at s.handle_request (/Users/liufeng/Code/typescript-nodejs-boilerplate/dist/main.js:2:84016)
    at s (/Users/liufeng/Code/typescript-nodejs-boilerplate/dist/main.js:2:82547)
    at p.dispatch (/Users/liufeng/Code/typescript-nodejs-boilerplate/dist/main.js:2:82569)
    at s.handle_request (/Users/liufeng/Code/typescript-nodejs-boilerplate/dist/main.js:2:84016)
    at /Users/liufeng/Code/typescript-nodejs-boilerplate/dist/main.js:2:79523
    at Function.v.process_params (/Users/liufeng/Code/typescript-nodejs-boilerplate/dist/main.js:2:80405)
    at w (/Users/liufeng/Code/typescript-nodejs-boilerplate/dist/main.js:2:79466)
    at /Users/liufeng/Code/typescript-nodejs-boilerplate/dist/main.js:2:96914
    at s.handle_request (/Users/liufeng/Code/typescript-nodejs-boilerplate/dist/main.js:2:84016)
`;
const output = StackTraceParser.parse(stack);

const map = fs.readFileSync("../dist/main.js.map", { encoding: "utf-8" });
const smc = await SourceMapConsumer.fromSourceMap(map);

output.forEach(({ file, lineNumber, column }) => {
  if (file.includes("main.js")) {
    console.log(
      smc.originalPositionFor({
        line: lineNumber,
        column: column,
      })
    );
  }
});
