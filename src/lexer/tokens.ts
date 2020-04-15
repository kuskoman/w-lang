export const tokens = {
  INT: "INT",
  VAR: "VAR",
  IDENT: "IDENT",
  LPAREN: "(",
  RPAREN: ")",
  LBRACE: "{",
  RBRACE: "}",
  ASSIGN: "=",
  WHILE: "WHILE",
  SEMICOLON: ";",
  ILLEGAL: "ILLEGAL",
};

export type TokenType = string; // "keyof typeof tokens" causes errors when used with tokens.property

export interface Token {
  type: TokenType;
  literal: string;
}

export const newToken = (type: string, literal: string): Token => {
  return { type, literal };
};
