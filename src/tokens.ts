export type TokenType = string;

export interface Token {
  type: TokenType;
  literal: string;
}

export const tokens = {
  ILLEGAL: "ILLEGAL",
  EOF: "EOF",

  // Identifiers and literals
  IDENT: "IDENT",
  INT: "INT",
  STRING: "STRING",
  FLOAT: "FLOAT",

  // Operators
  ASSIGN: "=",
  ADD: "+",
  SUBSTRACT: "-",
  DIVIDE: "/",
  MULTIPLY: "*",
  BANG: "!",
  LOWER: "<",
  GREATER: ">",
  EQUAL: "==",
  EQUAL_OR_GREATER: ">=",
  EQUAL_OR_LOWER: "<=",
  NOT_EQUAL: "!=",

  // Limiters
  COMMA: ",",
  SEMICOLON: ";",
  LBRACE: "{",
  RBRACE: "}",
  LPAREN: "(",
  RPAREN: ")",

  // Keywords
  CONST: "CONST",
  LET: "LET",
  EXPORT: "EXPORT",
  RETURN: "RETURN",
  FUNCTION: "FUNCTION",
  IF: "IF",
  ELSE: "ELSE",
  TRUE: "TRUE",
  FALSE: "FALSE",
};

export const keywords = {
  const: tokens.CONST,
  let: tokens.LET,
  export: tokens.EXPORT,
  return: tokens.RETURN,
  function: tokens.FUNCTION,
  if: tokens.IF,
  else: tokens.ELSE,
  true: tokens.TRUE,
  false: tokens.FALSE,
};

export const lookupIdentifier = (ident: string): string => {
  if (ident in keywords) {
    return keywords[ident];
  }
  return tokens.IDENT;
};
