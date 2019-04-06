const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  pool.query('SELECT * FROM feedback;').then((result) => {
      res.send(result.rows);
  }).catch((error) => {
      console.log('Error GET /feedback', error);
      res.sendStatus(500);  
  });
})

router.post('/', (req, res) => {
    let feedback = req.body;
    console.log('Adding in feedback:', feedback);
    let sqlText = `INSERT INTO feedback (feeling, understanding, support, comments) VALUES 
    ($1, $2, $3, $4)`;
    pool.query(sqlText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
      .then( (response) => {
        res.sendStatus(201);
      })
      .catch( (error) => {
        console.log('Failed to insert feedback');
        res.sendStatus(500);
      })
  })

  router.delete('/:id', (req, res) => {
    pool.query('DELETE FROM feedback WHERE id=$1', [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error DELETE /feedback', error);
        res.sendStatus(500);
    })
});


module.exports = router;