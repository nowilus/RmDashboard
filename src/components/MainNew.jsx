import React from 'react'
import TopbarNew from './TopbarNew'
import styled from 'styled-components'
import CardBoxNew from './CardBoxNew'
import DetailsNew from './DetailsNew'
import  './App.css';

const MainNew = (props) => {
  return (
    <MainComponent className="main">
      <TopbarNew user={props.user} ></TopbarNew>
      <CardBoxNew cardList={props.cardList}></CardBoxNew>
      <DetailsNew customerList = {props.customerList} taskList = {props.taskList}></DetailsNew>
    </MainComponent>
  )
}

export default MainNew

const MainComponent = styled.div`
  position: absolute;
  width: calc(100% - 200px);
  right: 250px;
  background: rgba(255,255,255,0.3);
  transition: all 0.5s ease 0s;
  height: 97%;
  width: calc(100% - 300px);
  border-radius: 2rem;

  &.active {
    width: calc(100% - 120px);
    right: 80px;
    left: 20px;
  }

  @media (max-width: 1080px){
      width: 100%;
      right: 0;

      &.active {
        right: 200px;
      }
  }
  @media (max-width: 530px){
      &.active .toggle{
          position: fixed;
          left: 0;
          right: initial;
          color: #fff;
      }
  }
}
`