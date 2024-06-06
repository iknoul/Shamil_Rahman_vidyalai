import React, { Component, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';


const Card = styled('div')(() => ({
  backgroundColor: 'fff',
  display:'flex',
  gap: '10px',
  alignItems: 'center',
  width: '90%',
  height: '20px',
  margin: '5%',
  padding: '1%'
}));
const Avatar = styled('div')(() => ({
  backgroundColor: '#BED4DB',
  display:'flex',
  alignItems: 'center',
  borderRadius: '50%',
  padding: '2% 3%'
}));
const getUser=async(id)=>{
  try {
     const { data: user } = await axios.get(`/api/v1/users/userById/${id}`);
      return user
  } catch (error) {
    throw error
  }
}
const getFirstLetters = (name) => {
  if (!name) return '';
  const nameParts = name.split(' ');
  const firstNameFirstLetter = nameParts[0] ? nameParts[0][0] : '';
  const lastNameFirstLetter = nameParts[1] ? nameParts[1][0] : '';
  return firstNameFirstLetter + lastNameFirstLetter;
};
const ProfileCard = ({post}) => {
  const {userId} = post
  const [user, setUser] = useState()
  const [userAvatar, setUserAvatar] = useState('Uk')

  useEffect(()=>{
    const fetchUser = async()=>{
      try {
        const user_ = await getUser(userId)
        const {data} = user_
        const userAvatar_ = getFirstLetters(data.name)        
        setUser(data)
        setUserAvatar(userAvatar_)
      } catch (error) {
        console.error('Error fetching user:', error);
      }
      
    }
    fetchUser();
  },[userId])
  return (
    <div>
      <Card>
        <Avatar>
          <h2>{userAvatar}</h2>
        </Avatar>
        <div>
          <h4>{user?user.name:'null'}</h4>
          <p>{user?user.email:'null'}</p>
        </div>
      </Card>
    </div>
  );
};

export default ProfileCard;