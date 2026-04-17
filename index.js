const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
const schema = require('./schema');
const resolvers = require('./resolvers');

const app = express();

app.use(
  '/graphql',
  createHandler({
    schema,
    rootValue: resolvers,
  })
);

const PORT = process.env.PORT || 4000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`GraphQL server running at http://localhost:${PORT}/graphql`);
  });
}

module.exports = app;
