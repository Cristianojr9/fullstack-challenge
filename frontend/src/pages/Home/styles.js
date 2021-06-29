import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 80%;

  display: grid;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }

  span {
    color: #036672;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
  }
`;