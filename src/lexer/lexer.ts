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
