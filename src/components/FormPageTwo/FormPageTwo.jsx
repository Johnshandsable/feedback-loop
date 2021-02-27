import NumericInput from 'react-numeric-input';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Typography } from '@material-ui/core';
import SubmitButton from '../Buttons/SubmitButton';

function FormPageTwo() {
  const history = useHistory();
  const dispatch = useDispatch();

  // Represents a number 1 to 5 for the question of how well someone is understanding the content
  const [understandingNum, setUnderstandingNum] = useState(0);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch({
      type: 'SET_FEEDBACK',
      payload: {
        property: 'understanding',
        value: understandingNum,
      },
    });
    // Go ahead to page three of form if the submit went ok!
    history.push('/form3');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6">
          How well are you understanding the content?
        </Typography>
        <NumericInput
          min={0}
          max={5}
          onChange={(event) => setUnderstandingNum(event)}
        />
        <SubmitButton />
      </form>
      <Link to="/">Back</Link>
      <Link to="/form3">Next</Link>
    </div>
  );
}

export default FormPageTwo;
