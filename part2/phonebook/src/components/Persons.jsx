
const Persons =(props) =>
{
    const {filter, persons, filterName, handleDelete} = props;
    return (<div>
        { filter ? (persons.filter((person) => person.name.toLowerCase().includes(filterName.toLowerCase().trim())))
        .map((person) => <p key={person.name}>{person.name} {person.number} <button onClick={() => handleDelete(person.id)}>Delete</button></p>)
        : persons.map((person) => <p key={person.name}>{person.name} {person.number} <button onClick={() => handleDelete(person.id)}>Delete</button></p>)
        }
      </div>)
}

export default Persons;