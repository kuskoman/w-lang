import { Token } from "../lexer/tokens";

export type NodeType = "expression" | "statement";

export interface Node {
  type: NodeType;
  tokenLiteral: string;
}

export interface Statement extends Node {
  type: "statement";
}

export interface Expression extends Node {
  type: "expression";
}

export interface Identifier {
  token: Token;
  value: string;
}

export interface VarStatement extends Statement {
  name: Identifier;
  value: Expression;
}
