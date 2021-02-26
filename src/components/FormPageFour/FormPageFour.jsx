function FormPageFour() {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Any comments you want to leave?</h3>
        <input type="text" />
        <button>Submit</button>
      </form>
      <button onClick={goBack}>Back</button>
      <button onClick={goToNext}>Next</button>
    </div>
  );
}

export default FormPageFour;
