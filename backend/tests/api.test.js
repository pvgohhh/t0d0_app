const request = require('supertest');
   const app = require('../src/index');

   describe('Task API', () => {
     test('GET /api/tasks should return empty array initially', async () => {
       const response = await request(app).get('/api/tasks');
       expect(response.status).toBe(200);
       expect(response.body).toEqual([]);
     });

     test('POST /api/tasks should create a task', async () => {
       const response = await request(app)
         .post('/api/tasks')
         .send({ title: 'Test Task' });
       expect(response.status).toBe(201);
       expect(response.body.title).toBe('Test Task');
     });
   });
