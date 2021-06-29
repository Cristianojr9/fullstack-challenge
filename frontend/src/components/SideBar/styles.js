import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 100vh;
  background: #036672;

  box-shadow: 0px 3px 6px #1111;
`;

export const Content = styled.div`
  display: grid;
  justify-content: space-around;
  align-items: center;

  padding: 20px 30px;
`;

export const NavBar = styled.div`
  display: grid;
  margin-top: 30px;
  gap: 10px;
`;

export const Item = styled.div`
  width: 260px;
  height: 40px;

  display: flex;
  align-items: center;

  font-size: 18px;
  border-radius: 10px;
  gap: 10px;
  transition: 0.2s linear;

  cursor: pointer;

  background: ${props => props.selected ? "#05505c" : "transparent"};
  color: ${props => props.selected ? "#fff" : "#7edce2"}
  ;

  &:hover { 
    color: #fff;
    background: #05505c;
  }
`;

export const Logo = styled.div`
  a { 
    text-decoration: none;
    font-size: 25px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
  }
`;