import styled from "styled-components";

import { Form as FormC, Field } from "formik";
import Modal from '@material-ui/core/Modal';

export const Container = styled.div`
  width: 100%;

  justify-content: center;
  align-items: center;

  padding: 40px 20px;
`;

export const Content = styled.div`
`;

export const ModalProfession = styled(Modal)`
  width: 100%;
  height: 100%;

  background: #fffa;

  display: flex;
  align-items: center;
  justify-content: center;
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

export const TitleModal = styled.div`
  color: #036672;
  font-weight: bold;
`;

export const HeaderModal = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 100%;
    background: transparent;
    border: none;
  }
`;

export const Form = styled(FormC)`
  margin-top: 20px;

  background: #fff;
  width: 500px;
  height: 320px;
  padding: 20px;
  border-radius: 10px;

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

export const Input = styled(Field)`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  font-size: 18px;
  border: 2px solid #036672;
  border-radius: 10px;
`;
