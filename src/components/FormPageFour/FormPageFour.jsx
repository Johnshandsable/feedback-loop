import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Typography, TextField } from '@material-ui/core';
import SubmitButton from '../Buttons/SubmitButton';

function FormPageFour() {
  const dispatch = useDispatch();
  const history = useHistory();

  // Represents comments user may have when submitting form
  const [comments, setComments] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();

    /*
      We do not need to validate before submitting because comments can be 
      left blank. 
    */
    dispatch({
      type: 'SET_FEEDBACK',
      payload: {
        property: 'comments',
        value: comments,
      },
    });
    // Go ahead to page four of form if the submit went ok!
    history.push('/form5');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6">Any comments you want to leave?</Typography>
        <TextField
          id="filled-multiline-flexible"
          label="Comments"
          onChange={(e) => {
            setComments(e.target.value);
          }}
          multiline
          rowsMax="6"
          margin="dense"
          variant="filled"
        />
        <SubmitButton />
      </form>
      <Link to="form3">Back</Link>
      <Link to="/form5">Next</Link>
    </>
  );
}

export default FormPageFour;
