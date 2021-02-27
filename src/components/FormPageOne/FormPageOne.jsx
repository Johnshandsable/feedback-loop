import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import NumericInput from 'react-numeric-input';
import { Button, Typography, Input } from '@material-ui/core';

function FormPageOne() {
  const dispatch = useDispatch();
  const history = useHistory();

  // Represents a number 1 to 5 for the question of how well is someone feeling
  const [feelingNum, setFeelingNum] = useState(0);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch({
      type: 'SET_FEEDBACK',
      payload: {
        feeling: feelingNum,
      },
    });
    // Go ahead to page two of form, if the submit went ok!
    history.push('/form2');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6">How well are you feeling today?</Typography>
        <Input
          type="number"
          onChange={(event) => setFeelingNum(event)}
          required={true}
          placeholder="1 to 5"
        />
        {/* <NumericInput
          min={0}
          max={5}
          onChange={(event) => setFeelingNum(event)}
        /> */}
        <Button color="primary" type="submit">
          Submit
        </Button>
      </form>
      <Link to="/form2">Next</Link>
    </div>
  );
}

export default FormPageOne;
