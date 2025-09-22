function CharactersList({ list = [] }) {

  const characters = list.map((character) => (<li key={character.id}>{character.name}</li>));

  return (
    <ul>
      {characters}
    </ul>
  );
}

export default CharactersList;  