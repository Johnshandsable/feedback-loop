import { Link } from 'react-router-dom';

function FormPageFour() {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Any comments you want to leave?</h3>
        <input type="text" />
        <button>Submit</button>
      </form>
      <Link to="form3">Back</Link>
      <Link to="/form5">Next</Link>
    </div>
  );
}

export default FormPageFour;
