const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST a new order
// router.post('/', async (req, res) => {
//     const client = await pool.connect();

//     try {
//         const {
//             customer_name,
//             street_address,
//             city,
//             zip,
//             type,
//             total,
//             pizzas
//         } = req.body;
//         await client.query('BEGIN')
//         const orderInsertResults = await client.query(`INSERT INTO "orders" ("customer_name", "street_address", "city", "zip", "type", "total")
//         VALUES ($1, $2, $3, $4, $5, $6)
//         RETURNING id;`, [customer_name, street_address, city, zip, type, total]);
//         const orderId = orderInsertResults.rows[0].id;

//         await Promise.all(pizzas.map(pizza => {
//             const insertLineItemText = `INSERT INTO "line_item" ("order_id", "pizza_id", "quantity") VALUES ($1, $2, $3)`;
//             const insertLineItemValues = [orderId, pizza.id, pizza.quantity];
//             return client.query(insertLineItemText, insertLineItemValues);
//         }));

//         await client.query('COMMIT')
//         res.sendStatus(201);
//     } catch (error) {
//         await client.query('ROLLBACK')
//         console.log('Error POST /api/order', error);
//         res.sendStatus(500);
//     } finally {
//         client.release()
//     }
// });


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


module.exports = router;