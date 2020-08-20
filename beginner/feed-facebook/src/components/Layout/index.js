import React from 'react';

import Header from '../Header';
import GlobalStyles from '../../styles/global';

import * as S from './styled';

const Layout = () => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Header />
    </S.LayoutWrapper>
  );
};

export default Layout;
