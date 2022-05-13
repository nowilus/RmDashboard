import React, {useState,useTransition} from 'react'
import styled from 'styled-components'
import  './App.css';
import { Button } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const RecentDeals = ({taskList}) => {
    const tableColumns = ['Application Type','Customer ID no.','Customer Name','Application Status', 'Select'];
    const [query, setQuery] = useState('');
    const [searchActive, setSearchActive] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isPending, startTransition] = useTransition()
    const changeHandler = (event = null, showAll = false) => {
        const output = showAll ? '' : event.target.value
        setInputValue(output)
        startTransition(()=> setQuery(output))
        
      }    
    const filteredTasks = taskList.filter(item => {
        return item.id.toLowerCase().includes(query.toLowerCase()) || item.name.toLowerCase().includes(query.toLowerCase())
    })  
    const focusHandler = (size) => {
        document.getElementById('searchDeals').style.width = size;
        setSearchActive(!searchActive);
    }  

  return (
    <RecentOrdersContainer className="recentOrders">
        <Header className="cardHeader">
            <h2>Recent Deals</h2>
            <SearchWrapper>               
                <Search className="search" id ="searchDeals">
                    <label>
                        <input type="text" placeholder={searchActive ? "Search here": ""} value = {inputValue} onChange={changeHandler} onFocus={() => focusHandler('10rem')} onBlur={() => focusHandler('5rem')}/>
                        <SearchIcon></SearchIcon>
                    </label>
                </Search> 
                <a href="#" className="btn" onClick={() => changeHandler(event, true)}>View All</a> 
            </SearchWrapper>          
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
                {filteredTasks && filteredTasks.map((content, index) => (
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

export default RecentDeals

const RecentOrdersContainer = styled.div`
    position: relative;
    display: block;
    min-height: 500px;
    background: rgba(255,255,255,0.9);
    padding: 20px;
    box-shadow:  0 7px 25px rgba(0, 0, 0, 0.08), 0 -7px 25px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    @media (max-width: 1630px){
        overflow-x: auto;
    }   
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

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
    .btn:hover {
        background: #a91414;
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
        background: var(--red);
        td {
            
    
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
    tbody tr td {
        &:nth-child(4) {
            display: grid;
            grid-template-columns: repeat(4, auto);
            justify-content: center;
            grid-column-gap: 5px;
            grid-gap: 5px;
            align-items: center;            
        }         
    }

    tr td{
        padding: 10px;
        text-align: center;


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
        background: rgb(126 124 118 / 75%);
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
const SearchWrapper = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;

`
const Search = styled.div`
    position: relative;
    width: 5rem;
    margin: 0 10px;

    label {
        position: relative;
        width: 100%;

        input {
            width: 100%;
            height: 40px;
            border-radius: 10px;
            padding: 5px 20px;
            padding-left: 35px;
            font-size: 18px;
            outline: none;
            border: 1px solid var(--black2);
            background: rgba(255,255,255,0.8);
    }
`
const SearchIcon = styled(SearchOutlinedIcon)`
    position: absolute;
    top: 0;
    left: 10px;
    font-size: 1.2em !important;
`