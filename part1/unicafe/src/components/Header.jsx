import React from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
      <p>
        {props.part1} {props.exercises1}
      </p>
    </>
  )
}

export default Header