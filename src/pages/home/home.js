import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { appActions } from "../../store";
import * as s from './styled-home';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(appActions.initialize());
  }, [dispatch]);

  return (
    <s.Ul>
      home
    </s.Ul>
  );
}

export default Home;
