const express = require('express');
const router = express.Router();

const axios = require('axios').default;

router.get('/', async (req, res) => {
  const { start, limit } = req.query;

  if (start === 0) {
    // TODO: Think of handling a case, since it won't work as start is string
  }

  const { data: posts } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts?limit',
    {
      params: {
        _start: start,
        _limit: limit,
      },
    },
  );

  const postsWithImages = posts.map(post => {
    // TODO use this route to fetch photos for each post
    // axios.get(`https://jsonplaceholder.typicode.com/albums/${post.id}/photos`);
    return {
      ...post,
      images: [
        { url: 'https://picsum.photos/200/300' },
        { url: 'https://picsum.photos/200/300' },
        { url: 'https://picsum.photos/200/300' },
      ],
    };
  }, []);

  res.json(postsWithImages);
});

// TODO: implement a poor group post by user function
// router.get('/user/:id')

// TODO: add a route to create post with images

module.exports = router;
