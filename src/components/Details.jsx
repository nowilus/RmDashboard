import React from 'react'
import styled from 'styled-components'
import RecentOrders from './RecentOrders'
import  './App.css';
import RecentCustomers from './RecentCustomers';
import RecentDeals from './RecentDeals';
import DealsTable from './DealsTable';
import CustomersTable from './CustomersTable'

const Details = ({customerList, taskList, taskListOnChange, customerListOnChange}) => {
  return (
    <DetailsContainer className=''>
      {/* <RecentOrders taskList={taskList}></RecentOrders> */}
      <DealsTable taskList={taskList}></DealsTable>
      <CustomersTable customerList={customerList} taskListOnChange = {taskListOnChange} customerListOnChange = {customerListOnChange}></CustomersTable>
      {/* <RecentDeals taskList={taskList}></RecentDeals> */}
      {/* <RecentDeals taskList={taskList}></RecentDeals> */}
      {/* <RecentCustomers customerList={customerList}></RecentCustomers> */}
    </DetailsContainer>
  )
}

export default Details

const DetailsContainer = styled.div`
    position: relative;
    width: 100%;
    padding: 20px 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    margin-top: 10px;

    @media (max-width: 1700px){
          grid-template-columns: repeat(1,1fr);
    }
     
`