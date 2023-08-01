
const Weather = (props) =>
{
    const {title, temperature, icon, speed} = props;
    
    return (
        <>
        <h3>Weather in {title}</h3>
        <p>Temperature in {temperature} celsius</p>
        <p><img src={icon}/></p>
        <p>wind {Number(speed).toPrecision(2)} m/s</p>
        </>
    )
}

export default Weather;