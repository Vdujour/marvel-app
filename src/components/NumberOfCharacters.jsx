function NumberOfCharacters({ list }) {

    if (list.length === 0) {
  return (
    <p>There is no character</p>
  );
}

  return (
    <p>There is {list.length} characters</p>
  );
}

export default NumberOfCharacters;