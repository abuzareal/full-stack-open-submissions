const Filter = ({ handleFilter }) => {
  return (
    <>
      <label htmlFor="filter">
        <h2>filter shown with</h2>
      </label>
      <br />
      <input type="text" onChange={handleFilter} />
    </>
  );
};

export default Filter;
