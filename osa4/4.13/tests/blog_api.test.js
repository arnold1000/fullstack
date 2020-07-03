const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('there is the right amount of blogs', async () => {
  const response = await api.get('/api/blogs')
  expect(response.body).toHaveLength(response.body.length)

})

test('field "id" is defined' , async () => {
  const response = await api.get('/api/blogs')

  response.body.forEach(n =>
    expect(n.id).toBeDefined()
  )
})

test('a valid blog can be added ', async () => {
  const newBlog = {
    title: 'book',
    author: 'writer',
    url: 'okok',
    likes: 10
  }

  const response1 = await api.get('/api/blogs')

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)


  const response3 = await api.get('/api/blogs')

  const contents = response3.body.map(r => r.title)
  expect(response3.body).toHaveLength(response1.body.length + 1)
  expect(contents).toContain(
    'book'
  )

})





afterAll(() => {
  mongoose.connection.close()
})