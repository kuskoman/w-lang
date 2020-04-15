export const tokens = {
  INT: "INT",
  VAR: "VAR",
  IDENT: "IDENT",
  LPAREN: "(",
  RPAREN: ")",
  ASSIGN: "=",
  WHILE: "WHILE",
};

export type TokenType = keyof typeof tokens;

export interface Token {
  type: TokenType;
  literal: string;
  position: Position;
}

export interface Position {
  line: number;
  column: number;
}
