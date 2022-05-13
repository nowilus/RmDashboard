import React, {useState,useTransition} from 'react'
import styled from 'styled-components'
import  './App.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Stack} from '@mui/material'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';

const DealsTable = ({taskList}) => {
    const tableColumns = ['Application Type','Customer ID no.','Customer Name','Application Status', 'Select'];
    const [query, setQuery] = useState('');
    const [searchActive, setSearchActive] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isPending, startTransition] = useTransition()

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const changeHandler = (event = null, showAll = false) => {
        filteredTasks.length !== taskList.length ? setPage(0) : setPage(page);
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
        console.log(searchActive);
    }  
    const CancelButtonHandler = () => {
        handleClose();
        alert('Bye');
    }
    const OpenButtonHandler = () => {
        handleClose();
        alert('You are about to open a deal....');
    }

  return (
    <DealsTableContainer className="recentOrders" rows={rowsPerPage}>
        <Header className="cardHeader">
            <h2>My Active Deals</h2>
            <SearchWrapper>               
                <Search className="search" id ="searchDeals">
                    <label>
                        <input type="text" placeholder={searchActive ? "Search here": ""} value = {inputValue} onChange={changeHandler} onPaste={changeHandler} onFocus={() => focusHandler('10rem')} onBlur={() => focusHandler('5rem')}/>
                        <SearchIcon></SearchIcon>
                    </label>
                </Search> 
                <a href="#"  className="btn" onClick={() => changeHandler(event, true)}>View All</a> 
            </SearchWrapper>          
        </Header>
        <TableCustom stickyHeader aria-label="sticky table">
            <thead>
                <tr>
                {tableColumns && tableColumns.map((tableColumn, index) => (
                        <td key={index}>{tableColumn}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {filteredTasks && filteredTasks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((content, index) => (
                <tr key={index}>
                    <td>{content.type}</td>
                    <td>{content.id}</td>
                    <td>{content.name}</td>
                    <td>
                    {content.status && content.status.items ?  
                        content.status.items.map((status, index) => (
                            <SpanContainer key={index} className={`status ${status.state}`}>{status.name}</SpanContainer>
                        )) 
                    :
                    content.status.map((status, index) => (
                        <SpanContainer key={index} className={`status ${status.state}`}>{status.name}</SpanContainer>
                    )) 
                    }
                    </td>
                    <td>
                        <ButtonSelect variant='contained' color='success' onClick={handleOpen}>Select</ButtonSelect>
                    </td>                    
                </tr>
                ))}
            </tbody>
        </TableCustom>
        {open &&
        <div>
            <Modal
                open={open}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <BoxCustom>
                    <Typography id="modal-modal-title" variant="h5">
                        Do you want to open a deal?
                    </Typography>
                    <Stack spacing={1} display='block' direction='row'>  
                        <ButtonCustom variant='contained' startIcon={<LaunchOutlinedIcon />} size='small' onClick={OpenButtonHandler}>Open</ButtonCustom>
                        <ButtonCustom variant='contained' startIcon={<CancelPresentationIcon />} size='small' onClick={CancelButtonHandler}>Close</ButtonCustom>
                    </Stack>                    
                </BoxCustom>
            </Modal>
        </div>
        }
        <TablePaginationCustom
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={filteredTasks.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </DealsTableContainer>
  )
}

export default DealsTable

const BoxCustom = styled(Box)`
    position: absolute;
    display: flex;
    justify-content: space-around;
    top: calc(50% - 150px);
    left: calc(50% - 170px);
    width: auto;
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(0, 0, 0);
    padding: 32px;
    -webkit-box-align: baseline;
    align-items: center;
    flex-direction: column;
    min-height: 250px;
    white-space: nowrap;
    border-radius: 8px;
    box-shadow: inset 0px 0px 31px rgb(0 0 0 / 60%);

    h5 {
        font-family: inherit !important;
        font-weight: 700 !important;
        font-size: 1.7rem !important;
        line-height: 1.3rem !important;
        transform: skewX(340deg);      
    }
`
const ButtonCustom = styled(Button)`
    text-transform: none !important;
    border-radius: 6px !important;    
    font-family: inherit !important;  
    font-size: 1rem !important;   
    color: white !important;  
    line-height: 1.4 !important;
    background-color: var(--red) !important;
    transform: skewX(345deg);

    &:hover {
        background-color: var(--red) !important;;
    }
`
const DealsTableContainer = styled.div`
    position: relative;
    display: block;
    background: rgba(255,255,255,0.9);
    padding: 20px;
    box-shadow:  0 7px 25px rgba(0, 0, 0, 0.08), 0 -7px 25px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    height: max-content;
    /*top: ${props => props.rows == 5 ? '20%' : '0'}; */
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
        width: max-content;
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
const TableCustom = styled(Table)`
    width: 100%;
    border-collapse: collapse !important;
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
        white-space: nowrap;
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
            height: 32px;
            border-radius: 10px;
            padding: 5px 20px;
            padding-left: 35px;
            font-size: 14px;
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
const TablePaginationCustom = styled(TablePagination)`
    overflow: hidden !important;
`