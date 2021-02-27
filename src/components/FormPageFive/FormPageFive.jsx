import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function FormPageFive() {
  const getCustomerInfo = useSelector((store) => {
    return store.customerInfoReducer;
  });

  return (
    <div>
      <h3>Thank you!</h3>
      <Link to="/">Leave more feedback!</Link>
    </div>
  );
}

export default FormPageFive;
