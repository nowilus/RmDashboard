import React from 'react'
import styled from 'styled-components'
import RecentOrdersNew from './RecentOrdersNew'
import  './App.css';
import RecentCustomersNew from './RecentCustomersNew';

const DetailsNew = ({customerList, taskList}) => {
  return (
    <DetailsContainer className=''>
      <RecentOrdersNew taskList={taskList}></RecentOrdersNew>
      <RecentCustomersNew customerList={customerList}></RecentCustomersNew>
    </DetailsContainer>
  )
}

export default DetailsNew

const DetailsContainer = styled.div`
    position: relative;
    width: 100%;
    padding: 20px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 30px;
    margin-top: 10px;

    @media (max-width: 768px){
          grid-template-columns: repeat(1,1fr);
    }
     
`