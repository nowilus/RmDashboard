import React from 'react'
import styled from 'styled-components'
import  './App.css';

const RecentCustomers = ({customerList}) => {
  return (
    <Customers class="recentCustomers">
        <Header class="cardHeader">
            <h2>Recent Customers</h2>
        </Header>
        <TableContainer id='table'>
            {customerList && customerList.map((customer, index) => (
            <tr key={index}>
                <td width="60px"><div class="imgBx"><img src={customer.img}/></div></td>
                <td><h4>{customer.name}<br></br><span>{customer.country}</span></h4></td>
            </tr>
            ))}          
        </TableContainer>        
    </Customers>
  )
}

export default RecentCustomers

const Customers = styled.div`
position: relative;
    display: grid;
    min-height: 500px;
    padding: 20px;
    box-shadow: rgb(0 0 0 / 10%) 0px 7px 25px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.9);
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
`

const TableContainer = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;

    thead td{
        font-weight: 600;
    }

    tr:hover {
        background: var(--red);
        color: var(--white);

        td h4 span{
            color: var(--white);
        }        
    }
    tr td {
        padding: 12px 10px;
        width: 60px;

        h4 {
            font-size: 16px;
            font-weight: 500;
            line-height: 1.2em;

            span{
                font-size: 14px;
                color: var(--black2);
            }
        }
    }

    .imgBx {
        position: relative;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;

        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`