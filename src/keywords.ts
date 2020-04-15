import { tokens } from "./tokens";

export const keywords: Map<string, string> = new Map();
keywords.set("while", tokens.WHILE);
keywords.set("var", tokens.VAR);

export const lookupIdent = (ident: string): string => {
  const keyword = keywords.get(ident);
  if (keyword) {
    return keyword;
  }
  return tokens.IDENT;
};
