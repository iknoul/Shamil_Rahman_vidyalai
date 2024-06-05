import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Post from './Post';
import Container from '../common/Container';
import useWindowWidth from '../hooks/useWindowWidth';

const PostListContainer = styled.div(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
}));

const LoadMoreButton = styled.button(() => ({
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: 5,
  cursor: 'pointer',
  fontSize: 16,
  marginTop: 20,
  transition: 'background-color 0.3s ease',
  fontWeight: 600,

  '&:hover': {
    backgroundColor: '#0056b3',
  },
  '&:disabled': {
    backgroundColor: '#808080',
    cursor: 'default',
  },
}));

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0)
  const [loadMoreButton, setLoadMoreButton] = useState(true)

  const { isSmallerDevice } = useWindowWidth();
  
  const handleClick = () => {
    setPageNumber(pageNumber+1)
  };

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);      
      const response = await axios.get('/api/v1/posts', {
        params: { start: pageNumber, limit: isSmallerDevice ? 5 : 9 },
      });
      const {posts, remaining} = response.data
      if(posts && posts.length>0){
        setPosts(posts);
      }
      else{
        setLoadMoreButton(false)
      }
      if(!remaining){
        setLoadMoreButton(false)
      }
      setIsLoading(false)      
    };
    fetchPost();
  }, [isSmallerDevice, pageNumber]);

  return (
    <Container>
      <PostListContainer>
        {posts.map(post => (
          <Post post={post} />
        ))}
      </PostListContainer>

      <div style={{ display:loadMoreButton ? 'flex':'none', justifyContent: 'center' }}>
        <LoadMoreButton onClick={handleClick} disabled={isLoading}>
          {!isLoading ? 'Load More' : 'Loading...'}
        </LoadMoreButton>
      </div>
    </Container>
  );
}

















