import NumericInput from 'react-numeric-input';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Input } from '@material-ui/core';
import SubmitButton from '../Buttons/SubmitButton';
import swal from 'sweetalert';

function FormPageThree() {
  const [supportNum, setSupportNum] = useState(1);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (supportNum > 5 || supportNum < 1) {
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
        <Input
          type="number"
          onChange={(event) => {
            setSupportNum(event.target.value);
          }}
          required={true}
          placeholder="1 to 5"
          value={supportNum}
        />
        <SubmitButton />
      </form>
      <Link to="/form2">Back</Link>
    </div>
  );
}

export default FormPageThree;
