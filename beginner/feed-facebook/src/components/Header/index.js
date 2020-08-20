import React from 'react';

import { PersonFill } from 'styled-icons/bootstrap';

import * as S from './styled';

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderLogo>facebook</S.HeaderLogo>

      <S.HeaderLogin>
        <S.HeaderProfile>Meu perfil</S.HeaderProfile>
        <S.HeaderIcon>
          <PersonFill />
        </S.HeaderIcon>
      </S.HeaderLogin>
    </S.HeaderWrapper>
  );
};

export default Header;
