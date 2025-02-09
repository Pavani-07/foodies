import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork/>
        <Logo to={"/"}>Foodies!</Logo>
      </Nav>
        <Search/>
        <Category/>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size:3rem;
  font-family: "Rowdies", sans-serif;
  font-weight: 300;
  font-style: normal;
  color: #365E32;
`

const Nav = styled.div`
  background: #eff3e2;
  padding : 3rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2.5rem;
    color:#365E32;
  }
`

export default App;
