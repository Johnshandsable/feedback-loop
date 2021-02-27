import NumericInput from 'react-numeric-input';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Typography } from '@material-ui/core';
import SubmitButton from '../Buttons/SubmitButton';

function FormPageThree() {
  const [supportNum, setSupportNum] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch({
      type: 'SET_FEEDBACK',
      payload: {
        property: 'support',
        value: supportNum,
      },
    });
    history.push('/form4');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6">How well are you being supported?</Typography>
        <NumericInput
          min={0}
          max={5}
          onChange={(event) => setSupportNum(event)}
        />
        <SubmitButton />
      </form>
      <Link to="/form2">Back</Link>
      <Link to="/form4">Next</Link>
    </div>
  );
}

export default FormPageThree;
