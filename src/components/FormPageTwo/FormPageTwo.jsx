import NumericInput from 'react-numeric-input';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function FormPageTwo() {
  const history = useHistory();
  const dispatch = useDispatch();

  // Represents a number 1 to 5 for the question of how well someone is understanding the content
  const [understandingNum, setUnderstandingNum] = useState(0);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch({
      type: 'SET_UNDERSTANDING',
      payload: {
        understanding: understandingNum,
        page: 2,
      },
    });
    // Go ahead to page three of form if the submit went ok!
    history.push('/form3');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>How well are you understanding the content?</h3>
        <NumericInput
          min={0}
          max={5}
          onChange={(event) => setUnderstandingNum(event)}
        />
        <button>Submit</button>
      </form>
      <Link to="/">Back</Link>
      <Link to="/form3">Next</Link>
    </div>
  );
}

export default FormPageTwo;
