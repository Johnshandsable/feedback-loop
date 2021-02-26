function FormPageTwo() {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>How well are you understanding the content?</h3>
        <NumericInput min={0} max={5} />
        <button>Submit</button>
      </form>
      <button onClick={goBack}>Back</button>
      <button onClick={goToNext}>Next</button>
    </div>
  );
}

export default FormPageTwo;
