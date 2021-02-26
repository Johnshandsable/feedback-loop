import NumericInput from 'react-numeric-input';

function FormPageThree() {
  const handleSubmit = () => {
    console.log('handleSubmit()');
  };

  /*
    <button onClick={goBack}>Back</button>
      <button onClick={goToNext}>Next</button>
  */

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>How well are you being supported?</h3>
        <NumericInput min={0} max={5} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default FormPageThree;
