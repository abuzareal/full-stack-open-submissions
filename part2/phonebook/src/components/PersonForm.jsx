const PersonForm = (props) => {
  return (
    <>
      name: <input value={props.newName} onChange={props.handleNameChange} />
      number:{" "}
      <input value={props.newNumber} onChange={props.handleNumberChange} />
      <button type="submit">add</button>
    </>
  );
};

export default PersonForm;
