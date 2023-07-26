const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => <p><b>Number of exercises {parts.reduce((acc, curr) =>
  {
    return acc + curr.exercises;
   
  }, 0)} </b></p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    <div>
      {
        parts.map(part =>
          {
            return <Part part={part}/>
          })
      }
    </div>
  </>
const Course = ({course}) =>
{
  const {id, name, parts} = course;
  return (
    <>
    <Header course={name}/>
    <Content parts={parts}/>
    <Total parts={parts}/>
    </>
  );
}

export default Course;