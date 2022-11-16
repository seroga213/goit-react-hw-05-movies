import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 25px;
  font-weight: 500;
  &.active {
    color: red;
  }
`;

export const Conteiner = styled.div`
  padding: 40px 40px;
`;

export const Header = styled.header`
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid black;
`;