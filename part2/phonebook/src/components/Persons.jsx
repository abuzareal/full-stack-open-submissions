const Persons = ({ filteredPersons, handleDelete }) => {
  return (
    <div>
      {filteredPersons.map((person, index) => (
        <div key={index}>
          <span>
            {person.name} {person.number}
          </span>
          <button onClick={() => handleDelete(person.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Persons;
