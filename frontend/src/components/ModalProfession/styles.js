import styled from "styled-components";

import { Form as FormC, Field } from "formik";

export const Form = styled(FormC)`
  margin-top: 20px;

  button {
    width: 100%;
    height: 60px;
    border: none;
    background: #036672;
    border-radius: 10px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #036672;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: transparent;
    border: none;
  }
`;

export const Input = styled(Field)`
  width: 100% !important;
  height: 60px;
  padding: 0 20px;
  font-size: 18px;

  margin-bottom: 20px;
  border: 2px solid #036672;
  border-radius: 10px;
`;