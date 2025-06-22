const Total = (props) => {
  // Calculate the total number of exercises
  const totalExercises = props.parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  );
  return <strong>Total of {totalExercises} exercises</strong>;
};

export default Total;
