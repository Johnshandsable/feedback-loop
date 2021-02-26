function FormPageThree() {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>How well are you being supported?</h3>
        <NumericInput min={0} max={5} />
        <button>Submit</button>
      </form>
      <button onClick={goBack}>Back</button>
      <button onClick={goToNext}>Next</button>
    </div>
  );
}

export default FormPageThree;
