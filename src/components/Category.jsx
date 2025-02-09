import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

import React from 'react'

function Category() {
  return (
    <List>
      <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice/>
        <h4>Italian</h4>
      </SLink>
      <SLink to={'/cuisine/American'}>
        <FaHamburger/>
        <h4>American</h4>
      </SLink>
      <SLink to={'/cuisine/Chinese'}>
        <GiNoodles/>
        <h4>Chinese</h4>
      </SLink>
      <SLink to={'/cuisine/Japanese'}>
        <GiChopsticks/>
        <h4>Japanese</h4>
      </SLink>
    </List>
  )
}

const List = styled.div`
  display:flex;
  justify-content:center;
  margin:2rem 0rem;
  background: #eff3e2;
`

const SLink = styled(NavLink)`
  display:flex;
  justify-content:center;
  flex-direction: column;
  align-items: center;
  border-radius:50%;
  margin-right: 2rem;
  text-decoration:none;
  background:linear-gradient(37deg, #AFD198, #AFD148);
  width:6rem;
  height:6rem;
  cursor:pointer;
  transform:scale(0.8);

  h4{
    color: #365E32;
    font-size:0.8rem;
  }

  svg{
    color: #365E32;
    font-size:1.5rem;
  }

  &.active{
    background: linear-gradient(to right, #DBA979, #DBA939);
    svg{
      color: #365E32;
    }
    h4{
      color:#365E32;
    }
  }
`

export default Category;