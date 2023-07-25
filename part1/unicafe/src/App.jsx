import { useState } from 'react'

const Button = ({name, handleClick}) =>
{
  return (<button onClick={handleClick}>
    {name}
  </button>);
}

const Title = ({title}) =>
{
  return <h1>{title}</h1>;
}
const Subtitle = ({subtitle}) =>
{
  return (<h2>{subtitle}</h2>);
}


const Statistics = ({good, bad, neutral}) =>
{
  return (
    <>
    <StatisticLine name="good" value={good}/>
    <StatisticLine name="neutral" value={neutral}/>
    <StatisticLine name="bad" value={bad}/>
    <StatisticLine name="total" value={bad + good + neutral}/>
    <StatisticLine name="average" value={(good -bad)/(good + neutral + bad)}/>
    <StatisticLine name="positive" value={`${(100*good)/(good + bad + neutral)} %`}/>
    </>
  );
}

const StatisticLine = ({name, value}) =>
{
    return <p>{name} {value}</p>
}


function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const handleClickGood = () => setGood(good + 1);
  const handleClickNeutral = () => setNeutral(neutral + 1);
  const handleClickBad = () => setBad(bad + 1);
  return (
    <>
     <Title title={"give feedback"}/>
     <Button name="good" handleClick={handleClickGood}/>
     <Button name="neutral" handleClick={handleClickNeutral}/>
     <Button name="bad" handleClick={handleClickBad}/>
     <Subtitle subtitle={"statistics"}/>
     {((good + bad + neutral) == 0 ? <p>No feedback given</p> : <Statistics good={good} neutral={neutral} bad={bad}/>)}
    </>
  )
}

export default App
