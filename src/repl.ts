import { Lexer } from "./lexer";
import { tokens } from "./tokens";

export class Repl {
  private PROMPT = "> ";
  private inStream: NodeJS.ReadStream;
  private outStream: NodeJS.WriteStream;

  constructor(inStream: NodeJS.ReadStream, outStream: NodeJS.WriteStream) {
    this.inStream = inStream;
    this.outStream = outStream;
  }

  public start() {
    this.outStream.write(this.PROMPT);
    this.inStream.on("data", (data) => {
      const input = data.toString("utf8");
      const lexer = new Lexer(input);
      while (1) {
        const token = lexer.nextToken();
        if (token.type === tokens.EOF) {
          return;
        }
        this.outStream.write(
          `Token: { Type: ${token.type}, Literal: ${token.literal} }\n`
        );
      }
    });
  }
}
