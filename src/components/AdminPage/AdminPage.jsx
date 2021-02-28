import axios from 'axios';
import { useEffect, useState } from 'react';
// TODO - Is it better to have a larger bundle size or to import them
// all separately?
import {
  Button,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Typography,
} from '@material-ui/core';

function AdminPage() {
  //On Load, call server
  useEffect(() => {
    console.log('in useEffect');
    getFeedback();
  }, []);

  const [feedbackList, setFeedbackList] = useState([]);

  // HANDLES GETTING AND SENDING INFORMATION TO THE TABLE
  const getFeedback = () => {
    /*
      Grabs the current feedback stored on server to display in a table 
      format on the DOM. 
    */
    axios
      .get('/api/feedback')
      .then((res) => {
        console.log('CLIENT - GET - a response occurred', res);
        console.table(res.data);
        setFeedbackList(res.data);
      })
      .catch((err) => {
        console.log('CLIENT - GET - an error occurred', err);
      });
  };

  // HANDLES THE DELETE REQUEST
  const handleSubmit = (evt) => {
    const feedbackId = evt.currentTarget.value;
    console.log(feedbackId);
    /*
      Handles a delete request sent to /api/feedback
      Deletes the feedback with the row.id of the button clicked
    */
    axios
      .delete(`/api/feedback/${feedbackId}`)
      .then((res) => {
        console.log('CLIENT - DELETE - a response occurred', res);
        // Update the DOM after a DELETE happens
        getFeedback();
      })
      .catch((err) => {
        console.log('CLIENT - DELETE - an error occurred', err);
      });
  };

  function createData(
    index,
    id,
    feeling,
    understanding,
    support,
    comments,
    flagged,
    date
  ) {
    return {
      index,
      id,
      feeling,
      understanding,
      support,
      comments,
      flagged,
      date,
    };
  }

  function createRows() {
    let feedbackRows = [];
    console.table('feedback', feedbackList);
    for (const row of feedbackList) {
      feedbackRows.push(
        createData(
          row.index,
          row.id,
          row.feeling,
          row.understanding,
          row.support,
          row.comments,
          row.flagged,
          row.date
        )
      );
    }
    return feedbackRows;
  }

  const rows = createRows();

  return (
    <>
      <Typography variant="h5">Admin Page</Typography>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          {/* Table Head  */}
          <TableHead>
            <TableRow>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Feeling</TableCell>
              <TableCell align="right">Understanding</TableCell>
              <TableCell align="right">Support</TableCell>
              <TableCell align="right">Comments</TableCell>
              <TableCell align="right">Date Submitted</TableCell>
            </TableRow>
          </TableHead>
          {/* Table Body  */}
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="right" component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.feeling}</TableCell>
                <TableCell align="right">{row.understanding}</TableCell>
                <TableCell align="right">{row.support}</TableCell>
                <TableCell align="right">{row.comments}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={(evt) => {
                      handleSubmit(evt);
                    }}
                    value={row.id}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AdminPage;
