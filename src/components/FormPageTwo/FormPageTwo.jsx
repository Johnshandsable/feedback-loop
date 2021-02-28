import NumericInput from 'react-numeric-input';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Typography } from '@material-ui/core';
import SubmitButton from '../Buttons/SubmitButton';
import swal from 'sweetalert';

function FormPageTwo() {
  const history = useHistory();
  const dispatch = useDispatch();

  // Represents a number 1 to 5 for the question of how well someone is understanding the content
  const [understandingNum, setUnderstandingNum] = useState(1);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (understandingNum > 5 || understandingNum < 1) {
      swal({
        title: 'Check your input',
        text: 'Make sure to choose a number between one and five',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      });
      // return early to ensure the user puts in a number 1 to 5.
      return;
    }

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
    <>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6">
          How well are you understanding the content?
        </Typography>
        <Input
          type="number"
          onChange={(event) => {
            setUnderstandingNum(event.target.value);
          }}
          required={true}
          placeholder="1 to 5"
          value={understandingNum}
        />
        <SubmitButton />
      </form>
      {/* TODO - style the Links  */}
      <Link to="/">Back</Link>
    </>
  );
}

export default FormPageTwo;
