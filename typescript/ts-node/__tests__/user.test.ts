import db from 'mongoose'
import request from 'supertest'

import app from '../src/app'
import User from '../src/models/User.model'

describe('User', () => {
  beforeEach(async () => {
    await User.deleteMany({})
  })

  it('register user', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        email: 'test@email.com',
        firstName: 'FirstNameTest',
        lastName: 'LastNameTest'
      })

    expect(response.status).toBe(200)
  })
})

afterAll(async () => {
  await db.connection.close()
})
