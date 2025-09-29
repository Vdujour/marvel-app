import { Link, NavLink } from 'react-router-dom';

function CharactersList({ list = [] }) {

  const characters = list.map((character) => (
    <li key={character.id}>
      <NavLink to={`/characters/${character.id}`}>
        {character.name}
      </NavLink>
    </li>
  ));

  return (
    <ul className="characters-list">
      {characters}
    </ul>
  );
}

export default CharactersList;  