import NumericInput from 'react-numeric-input';
import { Link, useHistory } from 'react-router-dom';

function FormPageTwo() {
  const history = useHistory();

  const handleSubmit = () => {
    evt.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>How well are you understanding the content?</h3>
        <NumericInput min={0} max={5} />
        <button>Submit</button>
      </form>
      <Link to="/">Back</Link>
      <Link to="/form3">Next</Link>
    </div>
  );
}

export default FormPageTwo;
