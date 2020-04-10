import { tokens, Token } from "../src/tokens";
import { Lexer } from "../src/lexer";

describe("Lexer", () => {
  const input = `
        var add = function(a, b) {
            return a + b;
        };
        var num = 5;
        export var s = add(num, 5);
        !-/*5
        5 < 10 > 5

        if (true != true) {
            return false == false;
        } else {
            return true;
        };
        `;

  it("tokenizes input correctly", () => {
    const lexer = new Lexer(input);
    const expectedTokens: Token[] = [
      { type: tokens.VAR, literal: "var" },
      { type: tokens.IDENT, literal: "add" },
      { type: tokens.ASSIGN, literal: "=" },
      { type: tokens.FUNCTION, literal: "function" },
      { type: tokens.LPAREN, literal: "(" },
      { type: tokens.IDENT, literal: "a" },
      { type: tokens.COMMA, literal: "," },
      { type: tokens.IDENT, literal: "b" },
      { type: tokens.RPAREN, literal: ")" },
      { type: tokens.LBRACE, literal: "{" },
      { type: tokens.RETURN, literal: "return" },
      { type: tokens.IDENT, literal: "a" },
      { type: tokens.ADD, literal: "+" },
      { type: tokens.IDENT, literal: "b" },
      { type: tokens.SEMICOLON, literal: ";" },
      { type: tokens.RBRACE, literal: "}" },
      { type: tokens.SEMICOLON, literal: ";" },
      { type: tokens.VAR, literal: "var" },
      { type: tokens.IDENT, literal: "num" },
      { type: tokens.ASSIGN, literal: "=" },
      { type: tokens.INT, literal: "5" },
      { type: tokens.SEMICOLON, literal: ";" },
      { type: tokens.EXPORT, literal: "export" },
      { type: tokens.VAR, literal: "var" },
      { type: tokens.IDENT, literal: "s" },
      { type: tokens.ASSIGN, literal: "=" },
      { type: tokens.IDENT, literal: "add" },
      { type: tokens.LPAREN, literal: "(" },
      { type: tokens.IDENT, literal: "num" },
      { type: tokens.COMMA, literal: "," },
      { type: tokens.INT, literal: "5" },
      { type: tokens.RPAREN, literal: ")" },
      { type: tokens.SEMICOLON, literal: ";" },
      { type: tokens.BANG, literal: "!" },
      { type: tokens.SUBSTRACT, literal: "-" },
      { type: tokens.DIVIDE, literal: "/" },
      { type: tokens.MULTIPLY, literal: "*" },
      { type: tokens.INT, literal: "5" },
      { type: tokens.INT, literal: "5" },
      { type: tokens.LOWER, literal: "<" },
      { type: tokens.INT, literal: "10" },
      { type: tokens.GREATER, literal: ">" },
      { type: tokens.INT, literal: "5" },
      { type: tokens.IF, literal: "if" },
      { type: tokens.LPAREN, literal: "(" },
      { type: tokens.TRUE, literal: "true" },
      { type: tokens.NOT_EQUAL, literal: "!=" },
      { type: tokens.TRUE, literal: "true" },
      { type: tokens.RPAREN, literal: ")" },
      { type: tokens.LBRACE, literal: "{" },
      { type: tokens.RETURN, literal: "return" },
      { type: tokens.FALSE, literal: "false" },
      { type: tokens.EQUAL, literal: "==" },
      { type: tokens.FALSE, literal: "false" },
      { type: tokens.SEMICOLON, literal: ";" },
      { type: tokens.RBRACE, literal: "}" },
      { type: tokens.ELSE, literal: "else" },
      { type: tokens.LBRACE, literal: "{" },
      { type: tokens.RETURN, literal: "return" },
      { type: tokens.TRUE, literal: "true" },
      { type: tokens.SEMICOLON, literal: ";" },
      { type: tokens.RBRACE, literal: "}" },
      { type: tokens.SEMICOLON, literal: ";" },
      { type: tokens.EOF, literal: "" },
    ];

    expectedTokens.forEach((expectedTok) => {
      const currentToken = lexer.nextToken();
      expect(currentToken).toEqual(expectedTok);
    });
  });
});
