const express = require('express');
const { fetchPosts } = require('./posts.service');
const { fetchUserById } = require('../users/users.service');

const router = express.Router();

router.get('/', async (req, res) => {
  const posts = await fetchPosts();

  const postsWithImages = await Promise.all(
    posts.map(async post => {
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
    }, []),
  );

  res.json(postsWithImages);
});

// TODO: implement a poor group post by user function
// router.get('/user/:id')
module.exports = router;
