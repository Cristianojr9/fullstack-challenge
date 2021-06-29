import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineHome,  } from "react-icons/ai";
import { MdPersonOutline, MdWork } from "react-icons/md";

import { Container, Content, NavBar, Item, Logo } from './styles';

const SideBar = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <Link to="/">
            Challenge.pro
          </Link>
        </Logo>

        <NavBar>
          <Item selected>
            <AiOutlineHome color="#7edce2" size={22} style={{ marginLeft: 20 }} />
            Home
          </Item>
          <Link to="/professionals">
            <Item>
                <MdPersonOutline color="#7edce2" size={22} style={{ marginLeft: 20 }} />
                Profissionais
            </Item>
          </Link>
          <Link to="/professions">
            <Item>
              <MdWork color="#7edce2" size={22} style={{ marginLeft: 20 }} />
              Profissões
            </Item>
          </Link>
        </NavBar>
      </Content>
    </Container>
  );
}

export { SideBar };