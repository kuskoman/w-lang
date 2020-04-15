export const isIdentifierFirstCharacter = (char: string): boolean => {
  return !!(char.length === 1 && char.match(/[_a-z]/i)); // allowed letters and underscore
};

export const isDigit = (char: string): boolean => {
  return !!(char.length === 1 && char.match(/[0-9]/i));
};

export const isIdentifierCharacter = (char: string) => {
  return !!(char.length === 1 && char.match(/[a-Z0-9]/i));
};
