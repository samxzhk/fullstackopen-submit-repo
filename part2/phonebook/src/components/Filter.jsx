const Filter = (props) =>
{
    const {handleFilter, filterName} = props;
    return (<p >Filter show with <input onChange={handleFilter} value={filterName}/></p>);
}

export default Filter;