const request = require('supertest');
const app = require('./index');
const resolvers = require('./resolvers');

describe('GraphQL API', () => {
  beforeEach(() => {
    resolvers._reset();
  });

  const query = (body) =>
    request(app)
      .post('/graphql')
      .set('Content-Type', 'application/json')
      .send(body);

  test('hello query returns greeting', async () => {
    const res = await query({ query: '{ hello }' });
    expect(res.status).toBe(200);
    expect(res.body.data.hello).toBe('Hello, GraphQL!');
  });

  test('users query returns list of users', async () => {
    const res = await query({ query: '{ users { id name email } }' });
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data.users)).toBe(true);
    expect(res.body.data.users.length).toBeGreaterThan(0);
  });

  test('user query returns a specific user', async () => {
    const res = await query({ query: '{ user(id: "1") { id name email } }' });
    expect(res.status).toBe(200);
    expect(res.body.data.user.id).toBe('1');
    expect(res.body.data.user.name).toBe('Alice');
  });

  test('user query returns null for unknown user', async () => {
    const res = await query({ query: '{ user(id: "999") { id name email } }' });
    expect(res.status).toBe(200);
    expect(res.body.data.user).toBeNull();
  });

  test('createUser mutation creates a new user', async () => {
    const res = await query({
      query:
        'mutation { createUser(name: "Carol", email: "carol@example.com") { id name email } }',
    });
    expect(res.status).toBe(200);
    expect(res.body.data.createUser.name).toBe('Carol');
    expect(res.body.data.createUser.email).toBe('carol@example.com');
  });

  test('deleteUser mutation removes an existing user', async () => {
    const createRes = await query({
      query:
        'mutation { createUser(name: "Dave", email: "dave@example.com") { id } }',
    });
    const id = createRes.body.data.createUser.id;

    const deleteRes = await query({
      query: `mutation { deleteUser(id: "${id}") }`,
    });
    expect(deleteRes.status).toBe(200);
    expect(deleteRes.body.data.deleteUser).toBe(true);
  });

  test('deleteUser mutation returns false for non-existent user', async () => {
    const res = await query({ query: 'mutation { deleteUser(id: "9999") }' });
    expect(res.status).toBe(200);
    expect(res.body.data.deleteUser).toBe(false);
  });
});
