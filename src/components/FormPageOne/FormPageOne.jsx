import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Typography, Input } from '@material-ui/core';
import SubmitButton from '../Buttons/SubmitButton';
import swal from 'sweetalert';

function FormPageOne() {
  const dispatch = useDispatch();
  const history = useHistory();

  const getFeelingNumRedux = useSelector((store) => {
    /*
      TODO - Fix updating the values within the inputs dynamically. 

      When the user clicks the 'edit' button on review, the user will be sent back 
      to the corresponding page, and we need to grab the current state from redux and 
      set it to the corresponding input. 
    */
    return store.feedbackReducer;
  });

  // Represents a number 1 to 5 for the question of how well is someone feeling
  const [feelingNum, setFeelingNum] = useState(1);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    /* 
      The only check we need to make is if the number is between 1 and 5. The input
      will check if feelingNum is actually a number, but we need an extra if statement 
      to validate for the number's range. 
    */
    if (feelingNum > 5 || feelingNum < 1) {
      swal({
        title: 'Check your input',
        text: 'Make sure to choose a number between one and five',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      });
      return;
    }

    dispatch({
      type: 'SET_FEEDBACK',
      payload: {
        property: 'feeling',
        value: feelingNum,
      },
    });
    // Go ahead to page two of form, if the submit went ok!
    history.push('/form2');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6">How well are you feeling today?</Typography>
        <Input
          type="number"
          onChange={(event) => {
            setFeelingNum(event.target.value);
          }}
          value={feelingNum}
          required={true}
          placeholder="1 to 5"
        />
        <SubmitButton />
      </form>
    </>
  );
}

export default FormPageOne;
