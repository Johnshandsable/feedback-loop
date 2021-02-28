import axios from 'axios';
import { useEffect, useState } from 'react';
import {
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

  const getFeedback = () => {
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
  return (
    <>
      <Typography variant="h5">Admin Page</Typography>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Feeling</TableCell>
              <TableCell align="right">Understanding</TableCell>
              <TableCell align="right">Support</TableCell>
              <TableCell align="right">Comments</TableCell>
              <TableCell align="right">Date Submitted</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <TableBody>
        {feedbackList.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell align="right">{row.feeling}</TableCell>
            <TableCell align="right">{row.understanding}</TableCell>
            <TableCell align="right">{row.support}</TableCell>
            <TableCell align="right">{row.comments}</TableCell>
            <TableCell align="right">{row.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
}

export default AdminPage;
