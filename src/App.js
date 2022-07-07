import React from "react";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import {BrowserRouter, Link} from "react-router-dom";
import styled from "styled-components";
import {GiKnifeFork} from 'react-icons/gi';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>RecipeApp</Logo>
        </Nav>
        <Search />
        <Category/>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-famili: cursive;
`;

const Nav = styled.div`
  padding: 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg{
    font-size: 2rem;
  }
`;

export default App;
