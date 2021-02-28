import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { List, ListItem, Typography } from '@material-ui/core';
import SubmitButton from '../Buttons/SubmitButton';

function FormPageFive() {
  const history = useHistory();
  const feedbackList = useSelector((store) => {
    /*
      Grabbing information from redux
    */
    return store.feedbackReducer;
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    /*
      POST to /api/feedback
      {
        feeling: 3,
        understanding: 4, 
        support: 2, 
        comments: "comments"
      }
    */
    axios
      .post('/api/feedback', feedbackList)
      .then((res) => {
        console.log('CLIENT - a response occurred', res);
        history.push('/');
      })
      .catch((err) => {
        console.log('CLIENT - an error occurred', err);
      });
  };

  return (
    <>
      <Typography variant="h5">Review Feedback</Typography>
      <List>
        <ListItem>Feeling: {feedbackList.feeling}</ListItem>
        <ListItem>Understanding: {feedbackList.understanding}</ListItem>
        <ListItem>Support: {feedbackList.support}</ListItem>
        <ListItem>Comments: {feedbackList.comments}</ListItem>
      </List>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6">Submit Feedback</Typography>
        <SubmitButton />
      </form>
      <Link to="/">Leave more feedback!</Link>
    </>
  );
}

export default FormPageFive;
