import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import phoneService from "./services/phone";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredPersons, setFilteredPersons] = useState([]);

  useEffect(() => {
    phoneService.getAll().then((response) => setPersons(response.data));
  }, []);

  useEffect(() => {
    const visiblePersons = filter
      ? persons.filter((person) => person.name.includes(filter))
      : persons;

    setFilteredPersons(visiblePersons);
  }, [filter, persons]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingPerson = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    const payload = {
      name: newName,
      number: newNumber,
      id: existingPerson
        ? existingPerson.id
        : persons.length
        ? Math.max(...persons.map((p) => Number(p.id))) + 1
        : 1,
    };

    if (existingPerson) {
      const confirmUpdate = window.confirm(
        `${newName} is already added to phonebook. Replace the old number with the new one?`
      );

      if (confirmUpdate) {
        phoneService.update(payload.id, payload).then((response) => {
          setPersons(
            persons.map((p) => (p.id !== payload.id ? p : response.data))
          );
          resetForm();
        });
      }
    } else {
      phoneService.create(payload).then((response) => {
        setPersons([...persons, response.data]);
        resetForm();
      });
    }
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Do you want to delete this entry?");

    if (confirmDelete) {
      phoneService.remove(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };

  const resetForm = () => {
    setNewName("");
    setNewNumber("");
    setFilter("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <Filter handleFilter={setFilter} />

        <h2>Add a New</h2>
        <PersonForm
          newName={newName}
          newNumber={newNumber}
          handleNameChange={(e) => setNewName(e.target.value)}
          handleNumberChange={(e) => setNewNumber(e.target.value)}
        />
      </form>

      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
