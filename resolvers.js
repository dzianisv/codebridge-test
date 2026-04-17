const INITIAL_USERS = [
  { id: '1', name: 'Alice', email: 'alice@example.com' },
  { id: '2', name: 'Bob', email: 'bob@example.com' },
];

let users = INITIAL_USERS.map((u) => ({ ...u }));
let nextId = INITIAL_USERS.length + 1;

const resolvers = {
  hello: () => 'Hello, GraphQL!',

  user: ({ id }) => users.find((u) => u.id === id) || null,

  users: () => users,

  createUser: ({ name, email }) => {
    const newUser = { id: String(nextId++), name, email };
    users.push(newUser);
    return newUser;
  },

  deleteUser: ({ id }) => {
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) return false;
    users.splice(index, 1);
    return true;
  },

  _reset: () => {
    users = INITIAL_USERS.map((u) => ({ ...u }));
    nextId = INITIAL_USERS.length + 1;
  },
};

module.exports = resolvers;
