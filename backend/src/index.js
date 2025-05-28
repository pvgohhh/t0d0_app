const express = require('express');
   const { Pool } = require('pg');
   require('dotenv').config();

   const app = express();
   app.use(express.json());

   const pool = new Pool({
     connectionString: process.env.DATABASE_URL,
   });

   app.get('/api/tasks', async (req, res) => {
     try {
       const { rows } = await pool.query('SELECT * FROM tasks');
       res.json(rows);
     } catch (err) {
       res.status(500).json({ error: err.message });
     }
   });

   app.post('/api/tasks', async (req, res) => {
     const { title } = req.body;
     try {
       const { rows } = await pool.query(
         'INSERT INTO tasks (title) VALUES ($1) RETURNING *',
         [title]
       );
       res.status(201).json(rows[0]);
     } catch (err) {
       res.status(500).json({ error: err.message });
     }
   });

   const PORT = process.env.PORT || 3001;
   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
