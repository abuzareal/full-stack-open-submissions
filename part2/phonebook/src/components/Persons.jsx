const Persons = ({ filteredPersons }) => {
  return (
    <div>
      {filteredPersons.map((person, index) => (
        <div key={index}>
          <span>
            {person.name} {person.number}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Persons;
