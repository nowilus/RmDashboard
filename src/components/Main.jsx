import React from 'react'
import Topbar from './Topbar'
import styled from 'styled-components'
import CardBox from './CardBox'
import Details from './Details'
import  './App.css';
import BottomBar from './BottomBar'

const Main = (props) => {
  return (
    <MainComponent className="main">
      <Topbar user={props.user} logout={props.logout} username={props.userName} role={props.userRole}  ></Topbar>
      {/* <CardBox cardList={props.cardList}></CardBox> */}
      <Details customerList = {props.customerList} taskList = {props.taskList} taskListOnChange = {props.taskListOnChange} customerListOnChange = {props.customerListOnChange}></Details>
      <BottomBar></BottomBar>
    </MainComponent>
  )
}

export default Main

const MainComponent = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  background: url(https://logos-world.net/wp-content/uploads/2021/02/HSBC-Emblem.png);
  background-repeat: no-repeat;
  background-size: 650px;
  background-position: center;
  transition: 0.5s;
  

  /*
  &::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    z-index: -1;  
    background: url(https://logos-world.net/wp-content/uploads/2021/02/HSBC-Emblem.png);
    background-repeat: no-repeat;
    background-size: 650px;
    background-position: center;
    transform: rotate(30deg);
    
  }
  */
  
`