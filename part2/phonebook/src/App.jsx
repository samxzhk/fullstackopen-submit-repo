import { useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';


function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [filter, setFilter] = useState(false);
  const [filterName, setFilterName] = useState('');

  const addNewPerson = (event) =>
  {
    event.preventDefault();
    const newNameTrimmed = newName.trim();
    const newPerson = {name: newNameTrimmed, number:newPhoneNumber };
    const doesExist = (persons.filter((n) => n.name.toLowerCase() == newNameTrimmed.toLowerCase())).length;
    if(doesExist){ alert(`${newNameTrimmed} already exists!`); return;}
 
    setPersons(persons.concat(newPerson));
    setNewName('');
    setNewPhoneNumber('');
  }
  const handleNameInput =(event) =>
  {
    setNewName(event.target.value);
    
  }
  const handlePhoneNumberInput = (event) =>
  {
    setNewPhoneNumber(event.target.value);
  }
  const handleFilter = (event) =>
  {
    setFilterName(event.target.value);
    if(event.target.value.length == 0) setFilter(false);
    else setFilter(true);
  }

  return (
    <div>
      <h2>Phonebook</h2>
     <Filter handleFilter={handleFilter} filterName={filterName}/>
      <h3>Add a new phone</h3>
      <PersonForm addNewPerson={addNewPerson} newName={newName} newPhoneNumber={newPhoneNumber} handleNameInput={handleNameInput} handlePhoneNumberInput={handlePhoneNumberInput}/>
      <h3>Numbers</h3>
      <Persons filter={filter} persons={persons} filterName={filterName}/>
    </div>
  )
}


export default App
