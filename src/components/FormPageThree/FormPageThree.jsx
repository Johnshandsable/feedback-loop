import NumericInput from 'react-numeric-input';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function FormPageThree() {
  const [supportNum, setSupportNum] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch({
      type: 'SET_SUPPORT',
      payload: {
        support: supportNum,
        page: 3,
      },
    });
    history.push('/form4');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>How well are you being supported?</h3>
        <NumericInput
          min={0}
          max={5}
          onChange={(event) => setSupportNum(event)}
        />
        <button>Submit</button>
      </form>
      <Link to="/form2">Back</Link>
      <Link to="/form4">Next</Link>
    </div>
  );
}

export default FormPageThree;
