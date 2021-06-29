import React from "react";
import { Route, Switch } from "react-router";

import { Home, Professionals, Professions } from "../../pages";
import { SideBar } from "../../components";

import { Container } from "./styles";

const DefaultLayout= () => {
  return (
    <Container>
      <SideBar />

      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/professionals" exact component={Professionals} />
          <Route path="/professions" exact component={Professions} /> 
        </Switch>
      </Container>
    </Container>
  );
}

export { DefaultLayout };