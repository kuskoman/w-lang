export const isIdentifierCharacter = (char: string): boolean => {
  return !!(char.length === 1 && char.match(/[_a-z]/i)); // allowed letters and underscore
};

export const isDigit = (char: string): boolean => {
  return !!(char.length === 1 && char.match(/[0-9]/i));
};
