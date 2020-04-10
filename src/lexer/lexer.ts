import { Token, tokens, newToken, lookupIdentifier } from "./tokens";
import { isDigit, isIdentifierCharacter } from "./utils/characterUtils";

export class Lexer {
  private input: string;
  private position: number;
  private readPosition: number;
  private char: string;

  constructor(input: string) {
    this.input = input;
    this.char = "";
    this.position = 0;
    this.readPosition = 0;
    this.readChar();
  }

  public nextToken(): Token {
    let tok: Token;
    this.eatWhitespace();

    switch (this.char) {
      case "=":
        {
          if (this.peekChar() === "=") {
            const ch = this.char;
            this.readChar();
            tok = newToken(tokens.EQUAL, `${ch}${this.char}`);
          } else {
            tok = newToken(tokens.ASSIGN, this.char);
          }
        }
        break;
      case ";":
        tok = newToken(tokens.SEMICOLON, this.char);
        break;
      case ";":
        tok = newToken(tokens.SEMICOLON, this.char);
        break;
      case ",":
        tok = newToken(tokens.COMMA, this.char);
        break;
      case "(":
        tok = newToken(tokens.LPAREN, this.char);
        break;
      case ")":
        tok = newToken(tokens.RPAREN, this.char);
        break;
      case "{":
        tok = newToken(tokens.LBRACE, this.char);
        break;
      case "}":
        tok = newToken(tokens.RBRACE, this.char);
        break;
      case "+":
        tok = newToken(tokens.ADD, this.char);
        break;
      case "-":
        tok = newToken(tokens.SUBSTRACT, this.char);
        break;
      case "/":
        tok = newToken(tokens.DIVIDE, this.char);
        break;
      case "*":
        tok = newToken(tokens.MULTIPLY, this.char);
        break;
      case ">":
        if (this.peekChar() === "=") {
          const ch = this.char;
          this.readChar();
          tok = newToken(tokens.EQUAL_OR_GREATER, `${ch}${this.char}`);
        } else {
          tok = newToken(tokens.GREATER, this.char);
        }
        break;
      case "<":
        if (this.peekChar() === "=") {
          const ch = this.char;
          this.readChar();
          tok = newToken(tokens.EQUAL_OR_LOWER, `${ch}${this.char}`);
        } else {
          tok = newToken(tokens.LOWER, this.char);
        }
        break;
      case "!":
        if (this.peekChar() === "=") {
          const ch = this.char;
          this.readChar();
          tok = newToken(tokens.NOT_EQUAL, `${ch}${this.char}`);
        } else {
          tok = newToken(tokens.BANG, this.char);
        }
        break;
      case "": // EOF, weird handling but seems to work
        tok = newToken(tokens.EOF, "");
        break;
      default:
        if (isIdentifierCharacter(this.char)) {
          const literal = this.readIdentifier();
          const type = lookupIdentifier(literal);
          return newToken(type, literal);
        }

        if (isDigit(this.char)) {
          const literal = this.readNumber();
          const type = tokens.INT;
          return newToken(type, literal);
        }

        tok = newToken(tokens.ILLEGAL, this.char);
    }
    this.readChar();
    return tok;
  }

  private readIdentifier(): string {
    const position = this.position;
    while (isIdentifierCharacter(this.char)) {
      this.readChar();
    }
    return this.input.slice(position, this.position);
  }

  private readNumber(): string {
    const position = this.position;
    while (isDigit(this.char)) {
      this.readChar();
    }
    return this.input.slice(position, this.position);
  }

  private eatWhitespace() {
    while (
      this.char === " " ||
      this.char === "\t" ||
      this.char === "\n" ||
      this.char === "\r"
    ) {
      this.readChar();
    }
  }

  private readChar() {
    if (this.readPosition > this.input.length) {
      this.char = String.fromCharCode(0); // EOF
    } else {
      this.char = this.input.charAt(this.readPosition);
    }
    this.position = this.readPosition;
    this.readPosition += 1;
  }

  private peekChar(relativeIndex: number = 0) {
    const peekPosition = this.readPosition + relativeIndex;
    if (peekPosition >= this.input.length || peekPosition < 0) {
      return String.fromCharCode(0); // EOF
    } else {
      return this.input.charAt(peekPosition);
    }
  }
}
