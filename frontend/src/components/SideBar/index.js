import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome,  } from "react-icons/ai";
import { MdPersonOutline, MdWork } from "react-icons/md";

import { Container, Content, NavBar, Item, Logo } from './styles';

const SideBar = () => {
  const location = useLocation();

  return (
    <Container>
      <Content>
        <Logo>
          <Link to="/">
            Challenge.pro
          </Link>
        </Logo>

        <NavBar>
          <Link to="/">
            <Item selected={location.pathname === "/"}> 
              <AiOutlineHome color="#7edce2" size={22} style={{ marginLeft: 20 }} />
              Home
            </Item>
          </Link>
          <Link to="/professionals">
            <Item selected={location.pathname === "/professionals"}>
                <MdPersonOutline color="#7edce2" size={22} style={{ marginLeft: 20 }} />
                Profissionais
            </Item>
          </Link>
          <Link to="/professions">
            <Item selected={location.pathname === "/professions"}>
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