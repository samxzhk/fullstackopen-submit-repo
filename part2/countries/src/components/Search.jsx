
const Search = (props) =>
{
    const {handleSearch, countryValue} = props;
    return (<>
    <p>find countries <input value={countryValue} onChange={handleSearch}/></p>
    <p></p>

    </>);
}

export default Search;