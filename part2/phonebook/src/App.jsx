import { useState, useEffect } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from "axios";
import phoneService from "./services/phone"
import Notification from './components/Notification';
import "./index.css"



function App() {
  const [persons, setPersons] = useState([
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [filter, setFilter] = useState(false);
  const [filterName, setFilterName] = useState('');
  const [notification, setNotification] = useState(null);
  const [notificationClass, setNotificationClass] = useState("ok");

  useEffect(() =>
  {
    phoneService.getAll().then(response => setPersons(response));

  }, [])
  
  const addNewPerson = (event) =>
  {
    event.preventDefault();
    const newNameTrimmed = newName.trim();
    const newPerson = {name: newNameTrimmed, number:newPhoneNumber };
    const doesExist = (persons.filter((n) => n.name.toLowerCase() == newNameTrimmed.toLowerCase())).length;
    let existingPerson = null;
    let shouldReplace;
    if(doesExist)
    {
      existingPerson = persons.find(person => person.name.toLowerCase() == newNameTrimmed.toLowerCase());
      shouldReplace = confirm(`${existingPerson.name} is already added to phonebook, replace the old number with a new one?`);
    }
    if(doesExist && shouldReplace)
    {
      const id = existingPerson.id;
      phoneService.replacePhone(id, newPerson)
      .then((data) => {
        setPersons(persons.map(person => person.id == id ? data : person));
        setNotification(`${existingPerson.name} number was changed to a new number`);
        setNotificationClass("ok");
      })
      setTimeout(() => setNotification(null), 5000);

    }
    else 
    { 
      phoneService.
      create(newPerson).
      then(data => {
        setPersons(persons.concat(data))
        setNotification(`Added ${data.name}`);
        setNotificationClass("ok");
      });
      setTimeout(() =>
      {
        setNotification(null);
      }, 4000)
      
    }
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
  const handleDelete = (id) =>
  {
    const shouldDelete = confirm(`Delete ${(persons.find(person => person.id == id)).name} ?`);
    if(shouldDelete)
    {
      phoneService.
      deletePhone(id).
      then(data => setPersons(persons.filter(person => person.id !== id)))
      .catch((error) =>
      {
        const person = persons.find(person => person.id === id);
        setNotification(`Information of ${person.name} has already been removed from server`);
        setNotificationClass("error");
        setTimeout(() => setNotification(null), 5000);
      })
    }
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} classColor={notificationClass}/>
     <Filter handleFilter={handleFilter} filterName={filterName}/>
      <h3>Add a new phone</h3>
      <PersonForm addNewPerson={addNewPerson} newName={newName} newPhoneNumber={newPhoneNumber} handleNameInput={handleNameInput} handlePhoneNumberInput={handlePhoneNumberInput}/>
      <h3>Numbers</h3>
      <Persons filter={filter} persons={persons} filterName={filterName} handleDelete={handleDelete}/>
    </div>
  )
}


export default App
