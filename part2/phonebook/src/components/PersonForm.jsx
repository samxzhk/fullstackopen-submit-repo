
const PersonForm = (props) =>
{
    const {addNewPerson, newName, handleNameInput, newPhoneNumber, handlePhoneNumberInput} = props;
    return (
        <>
            <form onSubmit={addNewPerson}>
                <div>
                <p>name: <input name="name" required="required" value={newName} onChange={handleNameInput}/></p>
                <p>phone-number: <input name="number" min="8" value={newPhoneNumber} required="required" onChange={handlePhoneNumberInput} /></p>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>

            </form>
        </>
    )
}

export default PersonForm;