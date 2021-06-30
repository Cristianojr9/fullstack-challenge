import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  justify-content: center;
  align-items: center;

  padding: 40px 20px;
`;

export const Content = styled.div`
`;

export const Header = styled.div`
  width: 100%;

  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #036672;
`;

export const Button = styled.button`
  width: 200px;
  border: none;
  border-radius: 10px;
  background: #036672;
  color: #fff;
  font-size: 14px;
  font-weight: bold;

  transition: 0.2s linear;

  &:hover {
    background: #fff;
    color: #036672;
    border: 2px solid #036672;
  }
`;
