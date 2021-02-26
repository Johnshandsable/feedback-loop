import NumericInput from 'react-numeric-input';
import { Link } from 'react-router-dom';

function FormPageThree() {
  const handleSubmit = () => {
    evt.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>How well are you being supported?</h3>
        <NumericInput min={0} max={5} />
        <button>Submit</button>
      </form>
      <Link to="/form2">Back</Link>
      <Link to="/form4">Next</Link>
    </div>
  );
}

export default FormPageThree;
