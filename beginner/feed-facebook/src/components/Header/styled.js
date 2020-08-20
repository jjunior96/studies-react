import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  background-color: #1876f2;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
`;

export const HeaderLogo = styled.h1`
  font-size: 3.2rem;
  color: #fff;
`;

export const HeaderLogin = styled.div`
  font-size: 1.8rem;
  color: #fff;
  display: flex;
  align-items: center;
`;

export const HeaderProfile = styled.div`
  letter-spacing: 1px;
`;

export const HeaderIcon = styled.div`
  border-radius: 50%;
  /* border: 2px solid #fff; */
  background-color: #fff;
  color: #1876f2;
  width: 3rem;
  height: 3rem;
  margin-left: 1rem;
  padding: 0.5rem 0.3rem;
`;
