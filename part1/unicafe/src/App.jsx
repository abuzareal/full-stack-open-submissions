import Content from "./components/Content"
import Footer from "./components/Footer"
import Header from "./components/Header"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} part1={part1} exercises1={exercises1} />
      <Content part2={part2} part3={part3} exercises2={exercises2} exercises3={exercises3} />
      <Footer exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App