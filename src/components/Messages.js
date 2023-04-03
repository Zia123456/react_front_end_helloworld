import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages } from '../redux/messages/messageSlice';

const Messages = () => {
  const dispatch = useDispatch();
  const { loading, greeting, error } = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  if (loading) {
    return <p>Please wait...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return <p>{greeting}</p>;
};

export default Messages;
