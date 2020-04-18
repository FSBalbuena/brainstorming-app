import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSomeAction } from 'store/actions/exampleAction';
import PropTypes from 'prop-types';

const NewBrainstorming = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSomeAction());
  }, []);

  return <p>Example Container</p>;
};

export default NewBrainstorming;
