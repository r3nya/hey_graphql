import express from 'express';
import graphqlHTTP from 'express-graphql';
import bodyParser from 'body-parser';

import schema from './schema';

const app = express();

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  pretty: true,
  schema
}));

app.listen(PORT, HOST, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`GraphQL listening at http://${HOST}:${PORT}`);
  }
});
