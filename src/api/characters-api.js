import characters from '../data/characters.json';

export function getCharacters() {
  return characters;
}

export function getCharacterById(id) {
  return characters.find(character => character.id === id);
}