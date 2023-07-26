
const Persons =(props) =>
{
    const {filter, persons, filterName} = props;
    return (<div>
        { filter ? (persons.filter((person) => person.name.toLowerCase().includes(filterName.toLowerCase().trim())))
        .map((person) => <p key={person.name}>{person.name} {person.number}</p>)
        : persons.map((person) => <p key={person.name}>{person.name} {person.number}</p>)
        }
      </div>)
}

export default Persons;