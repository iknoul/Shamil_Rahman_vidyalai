const express = require('express');
const next = require('next');
const morgan = require('morgan');
const postRoutes = require('./posts/posts.router');
const userRoutes = require('./users/users.router');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(morgan('tiny'));

    server.use('/api/v1/posts', postRoutes);
    server.use('/api/v1/users', userRoutes);

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
