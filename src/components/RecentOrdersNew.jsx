import React from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'
import  './App.css';


const RecentOrdersNew = ({taskList}) => {
    const tableColumns = ['Application Type','Customer ID no.','Customer Name','Application Status', 'Select'];
   
  return (
    <RecentOrdersContainer className="recentOrders">
        <Header className="cardHeader">
            <h2>My Active Deals</h2>
            <a href="#" className="btn">View All</a>
        </Header>
        <TableContainer>
            <thead>
                <tr>
                    <td>{tableColumns[0]}</td>
                    <td>{tableColumns[1]}</td>
                    <td>{tableColumns[2]}</td>
                    <td>{tableColumns[3]}</td>
                    <td>{tableColumns[4]}</td>
                </tr>
            </thead>
            <tbody>
                {taskList && taskList.map((content, index) => (
                <tr key={index}>
                    <td>{content.type}</td>
                    <td>{content.id}</td>
                    <td>{content.name}</td>
                    <td>
                    {content.status && content.status.items && content.status.items.map((status, index) => (
                        <SpanContainer key={index} className={`status ${status.state}`}>{status.name}</SpanContainer>
                     ))}
                    </td>
                    <td>
                        <ButtonSelect variant='contained' color='success'>Select</ButtonSelect>
                    </td>                    
                </tr>
                ))}
            </tbody>
        </TableContainer>
    </RecentOrdersContainer>
  )
}

export default RecentOrdersNew

const RecentOrdersContainer = styled.div`
    position: relative;
    display: grid;
    min-height: 500px;
    background: rgba(255,255,255,0.5);
    padding: 20px;
    box-shadow:  0 7px 25px rgba(0, 0, 0, 0.08);
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
        color: var(--blue);
    }
    .btn {
        position: relative;
        padding: 5px 10px;
        background: var(--blue);
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
        
        color: var(--white);
        border-bottom: 0px;
        td {
            background: var(--blue);
    
            &:first-child {
                border-top-left-radius: 12px;
                border-bottom-left-radius: 12px;
            }
            &:last-child {
                border-top-right-radius: 12px;
                border-bottom-right-radius: 12px;
            }               
        }        
    }

    tr td{
        padding: 10px;
        text-align: center;

        &:nth-child(4) {
            display: grid;
            grid-template-columns: repeat(4, auto);
            justify-content: center;
            grid-column-gap: 5px;
            grid-gap: 5px;
            align-items: center;            
        }
    }
`
const SpanContainer = styled.span`
    padding: 0px 10px;
    color: var(--white);
    border-radius: 8px;
    font-size: 12px;
    font-weight: 500;
    font-family: monospace;

    &.done {
        background: rgb(75 139 0);
    }
    &.return {
        background: #f00;
    }
    &.inprogress {
        background: #a90f0f;
    }
    &.pending {
        background: rgb(126 124 118 / 55%);
    }

    @media (max-width: 768px){
        white-space: nowrap; 
    }    
`

const ButtonSelect = styled(Button)`
    padding: 2px 7px !important;
    border-radius: 6px !important;
    line-height: 2.5 !important;
    background-color: rgb(31 209 40 / 62%) !important;
    font-size: 0.675rem !important;

    &:hover {
        background-color: rgb(44 165 53) !important;
    }
`