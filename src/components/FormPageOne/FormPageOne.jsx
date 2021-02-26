import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import NumericInput from 'react-numeric-input';

function FormPageOne() {
  const dispatch = useDispatch();
  const history = useHistory();

  // Represents a number 1 to 5 for the question of how well is someone feeling
  const [feelingNum, setFeelingNum] = useState(0);
  /*
    TODO - 

    Setup Redux on index.js
    Keep track of state as you move through pages 
    after all the data is tracked, 
    grab using the useSelector() and submit via a post 
    request to the database. 
  */

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch({
      type: 'SET_FEELING',
      payload: {
        feeling: feelingNum,
        page: 1,
      },
    });
    // Go ahead to page two of form, if the submit went ok!
    history.push('/form2');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>How well are you feeling today?</h3>
        <NumericInput
          min={0}
          max={5}
          onChange={(event) => setFeelingNum(event)}
        />
        <button>Submit</button>
      </form>
      <Link to="/form2">Next</Link>
    </div>
  );
}

export default FormPageOne;
