import { Token, newToken, tokens } from "./tokens";
import {
  isIdentifierFirstCharacter,
  isIdentifierCharacter,
  isDigit,
} from "./utils/characterUtils";
import { lookupIdentifier } from "./keywords";

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
        tok = newToken(tokens.ASSIGN, this.char);
        break;
      case ";":
        tok = newToken(tokens.SEMICOLON, this.char);
        break;
      case "(":
        tok = newToken(tokens.LPAREN, this.char);
        break;
      case ")":
        tok = newToken(tokens.RPAREN, this.char);
        break;
      case "=":
        tok = newToken(tokens.ASSIGN, this.char);
        break;
      default:
        if (isIdentifierFirstCharacter(this.char)) {
          const literal = this.getFullIdent();
          const type = lookupIdentifier(literal);
          return newToken(type, literal);
        }

        if (isDigit(this.char)) {
          const literal = this.readInteger();
          const type = tokens.INT;
          return newToken(type, literal);
        }

        tok = newToken(tokens.ILLEGAL, this.char);
    }
    return tok;
  }

  private getFullIdent(): string {
    const position = this.position;
    while (isIdentifierCharacter(this.peekChar())) {
      this.readChar();
    }
    return this.input.slice(position, this.position);
  }

  private readInteger() {
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
