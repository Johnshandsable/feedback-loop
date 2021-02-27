import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function FormPageFour() {
  const dispatch = useDispatch();
  const history = useHistory();

  // Represents comments user may have when submitting form
  const [comments, setComments] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch({
      type: 'SET_FEEDBACK',
      payload: {
        comments: comments,
      },
    });
    // Go ahead to page four of form if the submit went ok!
    history.push('/form5');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Any comments you want to leave?</h3>
        <input
          type="text"
          onChange={(event) => setComments(event.target.value)}
        />
        <button>Submit</button>
      </form>
      <Link to="form3">Back</Link>
      <Link to="/form5">Next</Link>
    </div>
  );
}

export default FormPageFour;
