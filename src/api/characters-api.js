import characters from '../data/characters.json';

export function getCharacters() {
  return characters;
}

export function getCharacterById(id) {
  const character = characters.find(character => character.id === id);
  
  if (!character) {
    throw new Error(`Character with ID ${id} not found`);
  }
  
  return character;
}