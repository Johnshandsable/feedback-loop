import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, List, ListItem, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import SubmitButton from '../Buttons/SubmitButton';

function FormPageFive() {
  const history = useHistory();
  const feedbackList = useSelector((store) => {
    /*
      Grabbing feedback from redux for the user to review
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

  const handleClick = (evt) => {
    const btnId = Number(evt.currentTarget.value);
    console.log('btnId:', btnId);
    /*
      Handles sending the user back to the page for editing their feedback. 
      Depending on which btn the user clicks, it will send them back to their 
      corresponding page. 
    */
    if (btnId > 1 && btnId < 5) {
      history.push(`/form${btnId}`);
    } else {
      history.push('/');
    }
  };

  return (
    <>
      <Typography variant="h5">Review Feedback</Typography>
      <List>
        <ListItem>
          Feeling: {feedbackList.feeling}{' '}
          <Button
            value="1"
            variant="outlined"
            color="secondary"
            onClick={(evt) => {
              handleClick(evt);
            }}
          >
            Edit
          </Button>
        </ListItem>

        <ListItem>
          Understanding: {feedbackList.understanding}{' '}
          <Button
            value="2"
            variant="outlined"
            color="secondary"
            onClick={(evt) => {
              handleClick(evt);
            }}
          >
            Edit
          </Button>
        </ListItem>
        <ListItem>
          Support: {feedbackList.support}{' '}
          <Button
            value="3"
            variant="outlined"
            color="secondary"
            onClick={(evt) => {
              handleClick(evt);
            }}
          >
            Edit
          </Button>
        </ListItem>
        <ListItem>
          Comments: {feedbackList.comments}{' '}
          <Button
            value="4"
            variant="outlined"
            color="secondary"
            onClick={(evt) => {
              handleClick(evt);
            }}
          >
            Edit
          </Button>
        </ListItem>
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
