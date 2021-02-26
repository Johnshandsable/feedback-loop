import { useHistory } from 'react-router-dom';
import NumericInput from 'react-numeric-input';

function FormPageOne() {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('handleSubmit()');
  };

  const goToNext = () => {
    console.log('goToNext()');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>How well are you feeling today?</h3>
        <NumericInput min={0} max={5} />
        <button>Submit</button>
      </form>
      <button onClick={goToNext}>NEXT</button>
    </div>
  );
}

export default FormPageOne;
