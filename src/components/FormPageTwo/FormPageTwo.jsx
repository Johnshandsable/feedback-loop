import NumericInput from 'react-numeric-input';
import { useHistory } from 'react-router-dom';

function FormPageTwo() {
  const history = useHistory();

  const handleSubmit = () => {
    console.log('handleSubmit()');
  };

  const goToNext = () => {
    history.push('form2');
  };

  const goBack = () => {
    history.push('/');
  };

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
