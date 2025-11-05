import characters from '../data/characters.json';

export const DEFAULT_FILTER = 'name';
export const DEFAULT_ORDER = 'asc';

/**
 * Return the list of characters, optionally ordered by a field.
 * @param {string} orderBy - field to order by (e.g. 'name').
 * @param {string} order - 'asc' or 'desc'
 * @returns {Array}
 */
export function getCharacters(orderBy = DEFAULT_FILTER, order = DEFAULT_ORDER) {
  const list = Array.isArray(characters) ? [...characters] : [];

  if (orderBy) {
    list.sort((a, b) => {
      const aVal = a?.[orderBy];
      const bVal = b?.[orderBy];

      if (aVal == null && bVal == null) return 0;
      if (aVal == null) return -1;
      if (bVal == null) return 1;

      // Prefer localeCompare for strings
      if (typeof aVal === 'string' || typeof bVal === 'string') {
        return String(aVal).localeCompare(String(bVal), 'fr', { sensitivity: 'base' });
      }

      // Fallback numeric comparison
      if (aVal > bVal) return 1;
      if (aVal < bVal) return -1;
      return 0;
    });
  }

  if (order === 'desc') {
    list.reverse();
  }

  return list;
}

export function getCharacterById(id) {
  const character = characters.find(character => character.id === id);
  
  if (!character) {
    throw new Error(`Character with ID ${id} not found`);
  }
  
  return character;
}