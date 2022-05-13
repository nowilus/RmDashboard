import React from 'react'
import styled from 'styled-components'
import  './App.css';


const RecentOrders = ({taskList}) => {
    const tableColumns = ['Name','Price','Payment','Status'];

  return (
    <RecentOrdersContainer className="recentOrders">
        <Header className="cardHeader">
            <h2>Recent Orders</h2>
            <a href="#" className="btn">View All</a>
        </Header>
        <TableContainer>
            <thead>
                <tr>
                    <td>{tableColumns[0]}</td>
                    <td>{tableColumns[1]}</td>
                    <td>{tableColumns[2]}</td>
                    <td>{tableColumns[3]}</td>
                </tr>
            </thead>
            <tbody>
                {taskList && taskList.map((content, index) => (
                <tr key={index}>
                    <td>{content.type}</td>
                    <td>{content.id}</td>
                    <td>{content.name}</td>
                    <td>
                        <SpanContainer className={`status ${content.status.replace(/ /g, '').toLowerCase()}`}>{content.status}</SpanContainer>
                    </td>
                </tr>
                ))}
            </tbody>
        </TableContainer>
    </RecentOrdersContainer>
  )
}

export default RecentOrders

const RecentOrdersContainer = styled.div`
    position: relative;
    display: grid;
    min-height: 500px;
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    box-shadow: rgb(0 0 0 / 8%) 0px 7px 25px;
    border-radius: 20px;
    @media (max-width: 768px){
        overflow-x: auto;
    }   
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h2 {
        font-weight: 600;
        color: var(--red);
    }
    .btn {
        position: relative;
        padding: 5px 10px;
        background: var(--red);
        text-decoration: none;
        color: var(--white);
        border-radius: 6px;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 10px;
    }
    @media (max-width: 530px){
        h2 {
            font-size: 20px;
        }
    }    

`
const TableContainer = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;

    thead td{
        font-weight: 600;
    }

    tr{
        color: var(--black1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);

        &:last-child{
            border-bottom: none;
        }
    }

    tbody tr:hover{
        background: var(--red);
        color: var(--white);
    }

    tr td{
        padding: 10px;

        &:last-child {
            text-align: end;
        }
        &:nth-child(2) {
            text-align: end;
        }
        &:nth-child(3) {
            text-align: center;
        }

    }

`
const SpanContainer = styled.span`
    padding: 2px 4px;
    color: var(--white);
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;

    &.delivered {
        background: #8de02c;
    }
    &.return {
        background: #f00;
    }
    &.inprogress {
        background: #1795ce;
    }
    &.pending {
        background: #f9ca3f;
    }

    @media (max-width: 768px){
        white-space: nowrap; 
    }    
`