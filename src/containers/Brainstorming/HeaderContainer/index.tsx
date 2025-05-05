import React from 'react';
import { useSelector } from 'react-redux';

import { Header } from '@/components/Brainstorming';

const HeaderContainer = () => {
  const { data: session } = useSelector(state => state.brainstorming);
  return <Header {...session} />;
};

export default HeaderContainer;
