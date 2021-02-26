import NumericInput from 'react-numeric-input';
import { useHistory } from 'react-router-dom';

function FormPageThree() {
  const history = useHistory();

  const handleSubmit = () => {
    console.log('handleSubmit()');
  };

  const goToNext = () => {
    history.push('form4');
  };

  const goBack = () => {
    history.push('/form2');
  };

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
