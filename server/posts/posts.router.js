const express = require('express');
const { fetchPosts,fetchAlbums } = require('./posts.service');
const { fetchUserById } = require('../users/users.service');


const router = express.Router();

router.get('/', async (req, res) => {
  const {posts, remaining} = await fetchPosts(req.query);

  const postsWithImages = await posts.reduce(  async(accPromise, post) => {
    
    const acc = await accPromise
    const images = await fetchAlbums(post.id)
    return [
      ...acc,
      {
        ...post,
        images: images,
      },
    ];
  }, []);

  res.json({posts:postsWithImages, remaining});
});

module.exports = router;
