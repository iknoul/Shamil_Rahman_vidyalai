const axios = require('axios').default;

/**
 * Fetches posts from a remote API.
 * @async
 * @param {Object} [params] - The parameters for fetching posts.
 * @param {number} [params.start=0] - The start index of posts to fetch.
 * @param {number} [params.limit=10] - The maximum number of posts to fetch.
 * @returns {Promise<Array>} - A promise that resolves to an array of posts.
 */
async function fetchPosts(params) {
  const { start = 0, limit = 0 } = params || {};
  const { data: posts } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts?limit',
    {
      params: {
        _start: start*limit,
        _limit: limit,
      },
    },
  );
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts?limit',
    {
      params: {
        _start: start+1*limit,
        _limit: 2,
      }
    }
  );
  if(response && response.data.length>0){
    return {posts, remaining:true}
  }
  else{
    return {posts, remaining:false}
  }

  ;
}

async function fetchAlbums(id) {
  // TODO use this route to fetch photos for each post
  let retry = 0
  const maxRetry = 3
  while (retry<maxRetry) {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);

      const imageArr =  response.data.reduce((arr,item)=>{
        return[...arr, item.url]
      },[])
      return imageArr;
    } catch (error) {
      if(error.code === 'ETIMEOUT'){
        retry+= 1
      }
      console.error(`Error fetching photos from https://jsonplaceholder.typicode.com/albums/${post.id}/photos:`, error);
      throw error;
    }
  }
}

module.exports = { fetchPosts, fetchAlbums };
