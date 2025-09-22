function CharactersList({ list }) {

  const items = list.map((character) => (<li key={character.id}>{character.name}</li>));
  
  return (
    <ul>
      {items}
    </ul>
  );
}

export default CharactersList;