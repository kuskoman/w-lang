interface Node {
  type: NodeType;
  tokenLiteral: string;
}

type NodeType = "expression" | "statement";
