export const tokens = {
  INT: "INT",
  VAR: "VAR",
  IDENT: "IDENT",
  LPAREN: "(",
  RPAREN: ")",
  ASSIGN: "=",
  WHILE: "WHILE",
  SEMICOLON: ";",
};

export type TokenType = keyof typeof tokens;

export interface Token {
  type: TokenType;
  literal: string;
}

export const newToken = (type: TokenType, literal: string): Token => {
  return { type, literal };
};
