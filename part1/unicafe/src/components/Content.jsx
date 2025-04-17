import React from 'react'

const Content = (props) => {
  return (
    <>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </>
  )
}

export default Content