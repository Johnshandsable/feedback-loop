const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  // Get all of the feedback from the feedback table
  const sqlText = `SELECT * FROM "feedback" ORDER BY id ASC`;
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  console.table(req.body);

  const feeling = req.body.feeling;
  const understanding = req.body.understanding;
  const support = req.body.support;
  const comments = req.body.comments;

  const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") 
  VALUES ($1, $2, $3, $4)`;

  pool
    .query(sqlText, [feeling, understanding, support, comments])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
