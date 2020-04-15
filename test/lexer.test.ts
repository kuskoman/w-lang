import { tokens, Token } from "../src/lexer/tokens";
import { Lexer } from "../src/lexer/lexer";

describe("Lexer", () => {
  const input = `
        var _d_igit = 5;
        var nUm = (1337);
        while (1) { 90 }
        @
        `;

  it("tokenizes input correctly", () => {
    const lexer = new Lexer(input);
    const expectedTokens: Token[] = [
      { type: tokens.VAR, literal: "var" },
      { type: tokens.IDENT, literal: "_d_igit" },
      { type: tokens.ASSIGN, literal: "=" },
      { type: tokens.INT, literal: "5" },
      { type: tokens.SEMICOLON, literal: ";" },
      { type: tokens.VAR, literal: "var" },
      { type: tokens.IDENT, literal: "nUm" },
      { type: tokens.ASSIGN, literal: "=" },
      { type: tokens.LPAREN, literal: "(" },
      { type: tokens.INT, literal: "1337" },
      { type: tokens.RPAREN, literal: ")" },
      { type: tokens.SEMICOLON, literal: ";" },
      { type: tokens.WHILE, literal: "while" },
      { type: tokens.LPAREN, literal: "(" },
      { type: tokens.INT, literal: "1" },
      { type: tokens.RPAREN, literal: ")" },
      { type: tokens.LBRACE, literal: "{" },
      { type: tokens.INT, literal: "90" },
      { type: tokens.RBRACE, literal: "}" },
      { type: tokens.ILLEGAL, literal: "@" },
      { type: tokens.EOF, literal: "" },
    ];

    expectedTokens.forEach((expectedTok) => {
      const currentToken = lexer.nextToken();
      expect(currentToken).toEqual(expectedTok);
    });
  });
});
