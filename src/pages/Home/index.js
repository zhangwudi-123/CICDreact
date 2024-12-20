import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const turn = () => {
    navigate('/customer');
  };
  const aaa = 2;
  return <button onClick={turn}>home</button>;
};
export default Home;
