import React, {useState,useTransition} from 'react'
import styled from 'styled-components'
import  './App.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Table from '@mui/material/Table';
import TablePagination from '@mui/material/TablePagination';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Stack, IconButton} from '@mui/material';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import CreateIcon from '@mui/icons-material/Create';


const CustomersTable = ({customerList,taskListOnChange, customerListOnChange}) => {
    const tableColumns = ['Customer ID no.','Customer Name','Renewal Date','Launch', 'History','Edit Relationship'];
   
    const customerInModal = [{"CustomerId": "12102102", "CustomerName":"Test1212"},{"CustomerId": "12102102", "CustomerName":"Test1212"},
    {"CustomerId": "12102102", "CustomerName":"Test1212"},{"CustomerId": "12102102", "CustomerName":"Test1212"},{"CustomerId": "12102102", "CustomerName":"Test1212"},
    {"CustomerId": "12102102", "CustomerName":"Test1212"},{"CustomerId": "12102102", "CustomerName":"Test1212"},{"CustomerId": "12102102", "CustomerName":"Test1212"}];
    
    const initialStates = [{"name":"AIF","state":"pending"},{"name":"FS","state":"pending"},{"name":"APP","state":"pending"},{"name":"IDA","state":"pending"},
    {"name":"FOL","state":"pending"},{"name":"SEC","state":"pending"},{"name":"ADM","state":"pending"}];            
    
    const [query, setQuery] = useState('');
    const [searchActive, setSearchActive] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isPending, startTransition] = useTransition()
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [open, setOpen] = useState(false);
    const [openNewCustomer, setOpenNewCustomer] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState({});
    const [appType, setAppType] = useState('');
    const [modalPage, setModalPage] = useState(0);
    const [rowsPerPageModal, setRowsPerPageModal] = useState(1);
    const [reviewDate, setReviewDate] = useState(new Date());
    const [newCustomerIdData, setNewCustomerIdData] = useState('');
    const [newCustomerNameData, setNewCustomerNameData] = useState('');

    const handleReviewDateChange = (reviewDate) => {
        setReviewDate(reviewDate);
    };
    const handleSelectCustomer = (customerId, customerName) => {
        handleOpen();
        setSelectedCustomer({"customerId":customerId, "customerName":customerName});
      };
      const handleCreateCustomer = () => {
        handleOpenCustomerModal();
      };  

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOpenCustomerModal = () => setOpenNewCustomer(true);
    const handleCloseCustomerModal = () => setOpenNewCustomer(false);

    const handleChangeAppType = (event) => {
        setAppType(event.target.value);
      };
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const handleChangePageModal = (event, newPage) => {
        setModalPage(newPage);
      };
    
      const handleChangeRowsPerPageModal = (event) => {
        setRowsPerPageModal(+event.target.value);
        setModalPage(0);
      };

    const changeHandler = (event = null, showAll = false) => {
        filteredCustomers.length !== customerList.length ? setPage(0) : setPage(page);
        const output = showAll ? '' : event.target.value
        setInputValue(output)
        startTransition(()=> setQuery(output))
        
      }   
      
    const handlerNewCustomerIdData=(event) => {
        const output = event.target.value;
        setNewCustomerIdData(output)        
    } 
    const handlerNewCustomerNameData=(event) => {
        const output = event.target.value;
        setNewCustomerNameData(output)        
    }       
    const filteredCustomers = customerList.filter(item => {
        return item.id.toLowerCase().includes(query.toLowerCase()) || item.name.toLowerCase().includes(query.toLowerCase())
    })  
    const focusHandler = (size) => {
        document.getElementById('searchCustomer').style.width = size;
        setSearchActive(!searchActive);
    }  
    const CancelButtonHandler = () => {
        handleClose();
        alert('Bye');
    }
    const OpenButtonHandler = (id,name,type) => {
        const newDealData = {"type":type, "id":id, "name":name, "status":initialStates};
        taskListOnChange(newDealData);
        handleClose();
        // alert('You are about to open a deal....');

        const next = document.querySelector("[aria-label='Go to next page']");
        next.click();
        const previous = document.querySelector("[aria-label='Go to previous page']");   
        showGlobe();
        setTimeout(function(){previous.click();}, 10);     
        hideGlobeAfterSpecificTime(4000);
    }

    const showGlobe = () => {
        const globe = document.querySelector(".globe");  
        const blockingDiv = document.querySelector(".blockedDiv");  
        globe.style.display = 'initial';
        blockingDiv.style.display = 'initial';
    }

    const hideGlobeAfterSpecificTime = (time) => {
        const globe = document.querySelector(".globe");  
        const blockingDiv = document.querySelector(".blockedDiv");          
        setTimeout(function(){globe.style.display = 'none';}, time); 
        setTimeout(function(){blockingDiv.style.display = 'none';}, time); 
    }

    const CancelButtonCustomerModalHandler = () => {
        setNewCustomerIdData('');
        setNewCustomerNameData('');
        handleCloseCustomerModal();
        alert('Bye');
    }
    const LaunchButtonCustomerModalHandler = (id,name) => {
        const newCustomer = {"id": id, "name":name, "renewalDate":null};
        customerListOnChange(newCustomer);
        handleCloseCustomerModal();
        showGlobe();   
        hideGlobeAfterSpecificTime(2000);
    }
    const handleClickEdit = () => {
        console.log("logujeEdit");
        document.querySelector(".logoutButton>div>button").click();
    }
  return (
    <RecentOrdersContainer className="recentOrders" rows={rowsPerPage}>
        <Header className="cardHeader">
            <h2>My Portfolio</h2>
            <ButtonAdd variant='contained' color='success' startIcon={<PeopleOutlineIcon />} size='medium' onClick={handleCreateCustomer}></ButtonAdd> 
            <SearchWrapper>               
                <Search className="search" id ="searchCustomer">
                    <label>
                        <input type="text" placeholder={searchActive ? "Search here": ""} value = {inputValue} onChange={changeHandler} onFocus={() => focusHandler('10rem')} onBlur={() => focusHandler('5rem')}/>
                        <SearchIcon></SearchIcon>
                    </label>
                </Search> 
                <a href="#" className="btn" onClick={() => changeHandler(event, true)}>Reset All</a> 
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
                {filteredCustomers && filteredCustomers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((content, index) => (
                <tr key={index}>
                    <td>{content.id}</td>
                    <td>{content.name}</td>
                    <td>
                    {content.renewalDate &&
                        <div>
                             {content.renewalDate.slice(0, 10).replace(/-/g, '/')}
                            <ButtonRenewal variant='outlined' startIcon={<RateReviewOutlinedIcon />} size='medium' />                                                      
                        </div>
                    }     
                    </td>
                    <td>
                        <ButtonCustomer variant='contained' color='success' startIcon={<PlayArrowRoundedIcon />} size='medium' onClick={() => handleSelectCustomer(content.id,content.name)} /> 
                    </td>
                    <td>
                        <ButtonCustomer variant='contained' color='primary' startIcon={<RestoreFromTrashOutlinedIcon />} size='medium' />   
                    </td>    
                    <td>
                        <ButtonCustomer variant='contained' color='error' startIcon={<SettingsOutlinedIcon />} onClick={handleClickEdit} size='medium' />   
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
                    <ModalHeaderWrapper>
                        <PlayArrowIconCustom size="large"/>
                        <Typography id="modal-modal-title" variant="h5">
                            Launch Application
                        </Typography>
                    </ModalHeaderWrapper>
                    <LaunchModalSection>
                        <p id='title'>Customer ID no.</p>
                        {selectedCustomer &&
                            <p>{selectedCustomer.customerId}</p>
                        }
                        <p id='title'>Customer Name</p>
                        {selectedCustomer &&
                            <p>{selectedCustomer.customerName}</p> 
                        }                           
                        <p id='title'>Application Type</p>
                        <FormControl fullWidth size="small">
                            <Select
                                id="application-type"
                                value={appType}
                                autoWidth
                                displayEmpty = {true}
                                renderValue={value => value ? value : '-- Select --' }
                                onChange={handleChangeAppType}
                                >                              
                                <MenuItem value={'New'}>New</MenuItem>
                                <MenuItem value={'New/New'}>New/New</MenuItem>
                                <MenuItem value={'Reneawal'}>Reneawal</MenuItem>
                                <MenuItem value={"Amendment"}>Amendment</MenuItem>
                                <MenuItem value={"Standalone Financial Spreading"}>Standalone Financial Spreading</MenuItem>
                                <MenuItem value={"Standalone Credit Admin"}>Standalone Credit Admin</MenuItem>
                            </Select>
                        </FormControl>                            
                        <p id='title'>Deal Nickname</p>
                        <TextField id="outlined-basic" label="Nickname" variant="outlined" size="small"/>                          
                    </LaunchModalSection>
                    <CustomerInfoTable>
                        <Table stickyHeader aria-label="sticky table">
                            <thead>
                                <tr>
                                    <td>Customer ID no.</td>
                                    <td>Customer Name</td>
                                </tr>
                            </thead>
                            <tbody>
                                {customerInModal && customerInModal.slice(modalPage * rowsPerPageModal, modalPage * rowsPerPageModal + rowsPerPageModal).map((content, index) => (
                                <tr key={index}>
                                    <td>{content.CustomerId}</td>
                                    <td>{content.CustomerName}</td>                                     
                                </tr>
                                ))}
                            </tbody>
                        </Table>                        
                        <TablePaginationCustom
                            rowsPerPageOptions={[1,5]}
                            component="div"
                            count={customerInModal.length}
                            rowsPerPage={rowsPerPageModal}
                            page={modalPage}
                            onPageChange={handleChangePageModal}
                            onRowsPerPageChange={handleChangeRowsPerPageModal}
                        />
                    </CustomerInfoTable>
                    <RestLaunchSettings>
                        <p id='title'>Confidentail Deal?</p>      
                        <RadioGroup
                            row
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel className="radioBtn" value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel className="radioBtn" value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                        <p id='title'>Review Date</p> 
                        <CalendarWrapper>
                            <CalendarMonthOutlinedIcon className='calendarIcon' fontSize='medium'/>
                            <DatePicker showYearDropdown showMonthDropdown className='dateTimePicker' withPortal selected={reviewDate} onChange={handleReviewDateChange} />
                        </CalendarWrapper>
                        
                        <p id='title'>CARM Express</p>    
                        <RadioGroup
                            row
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel className="radioBtn" value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel className="radioBtn" value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                        <p id='title'>Financial Spreading is not applicable</p>    
                        <Checkbox disableRipple={true} color="error" size="medium"/>
                        <p id='title'>Credit Application is not applicable</p>   
                        <Checkbox disableRipple={true} color="error" size="medium"/>
                    </RestLaunchSettings>
                    <StackCustom spacing={1} display='block' direction='row'>  
                        <ButtonCustom variant='contained' startIcon={<CancelPresentationIcon />} size='small' onClick={CancelButtonHandler}>Cancel</ButtonCustom>
                        <ButtonCustom variant='contained' startIcon={<LaunchOutlinedIcon />} size='small' onClick={() => OpenButtonHandler(selectedCustomer.customerId,selectedCustomer.customerName, appType)}>Launch</ButtonCustom>         
                    </StackCustom>                    
                </BoxCustom>
            </Modal>
        </div>
        }
        {openNewCustomer &&
        <div>
            <Modal
                open={openNewCustomer}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <CustomerBoxCustom>
                    <CustomerModalHeaderWrapper>
                        <Typography id="modal-modal-title" variant="h5">
                            Create New Customer
                        </Typography>
                    </CustomerModalHeaderWrapper>
                    <CustomerLaunchModalSection>
                        <p id='title'>Customer ID no.</p>
                        <TextField id="outlined-basic" label="Customer ID" variant="outlined" size="small" value = {newCustomerIdData} onChange={handlerNewCustomerIdData}/> 
                        <p id='title'>Customer Name</p>
                        <TextField id="outlined-basic" label="Customer Name" variant="outlined" size="small" value = {newCustomerNameData} onChange={handlerNewCustomerNameData}/> 
                        <p id='title'>Is Customer in a Relationship?</p>
                        <RadioGroup
                            row
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel className="radioBtn" value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel className="radioBtn" value="No" control={<Radio />} label="No" />
                        </RadioGroup>                           
                        <p id='title'>Confidentail Deal?</p>
                        <RadioGroup
                            row
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel className="radioBtn" value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel className="radioBtn" value="No" control={<Radio />} label="No" />
                        </RadioGroup>                                                 
                    </CustomerLaunchModalSection> 
                    <StackCustom spacing={1} display='block' direction='row'>  
                        <ButtonCustom variant='contained' startIcon={<CancelPresentationIcon />} size='small' onClick={CancelButtonCustomerModalHandler}>Cancel</ButtonCustom>
                        <ButtonCustom variant='contained' startIcon={<CreateIcon />} size='small' onClick={() => LaunchButtonCustomerModalHandler(newCustomerIdData,newCustomerNameData)}>Create</ButtonCustom>         
                    </StackCustom>                                    
                </CustomerBoxCustom>
            </Modal>
        </div>
        }        
        <TablePaginationCustom
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={filteredCustomers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </RecentOrdersContainer>
  )
}

export default CustomersTable

const CalendarWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
const CustomerInfoTable = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
    margin: 10px 0;

    table {
        border-radius: 6px !important;
        box-shadow: rgb(54 54 54 / 25%) 1px 9px 15px, rgb(54 54 54 / 25%) 0px -9px 15px;
    }
    thead {      
       tr td {
            text-align: center;
            font-family: inherit;
            font-size: 16px;
            font-weight: 700;
            border-bottom: 2px solid var(--red);
            padding: 3px 0;
            background: var(--red);
            color: var(--white);  
            &:first-child {
                border-left: 2px solid var(--red);
                border-top-left-radius: 6px;
                        
            }
            &:last-child {
                border-right: 2px solid var(--red);
                border-top-right-radius: 6px;                
            }  
        }      
    }
    tbody tr {
        &:first-child {
            td {
                padding-top: 10px;
            }
        }
        &:last-child {
            td {
                padding-bottom: 10px;
            }
        } 
        td {
            font-family: inherit;   
            text-align: center;       
            padding: 5px 0;       
        }        
    }
`

const StackCustom = styled(Stack)`
    border-top: 1px solid var(--black2) !important;
    width: 100% !important;
    padding-top: 10px !important;
    align-items: center !important;
    display: flex !important;
    justify-content: flex-end !important;
`

const PlayArrowIconCustom = styled(PlayArrowIcon)`
    font-size: 2.5rem !important;
`

const ModalHeaderWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid var(--black2);
    padding-bottom: 5px;
    margin-bottom: 30px;
`
const CustomerModalHeaderWrapper = styled(ModalHeaderWrapper)`
    padding: 5px;
    padding-bottom: 15px;
    margin-bottom: 0;
`


const LaunchModalSection = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px;
    padding-left: 100px;
    width: 100%;

    p {
        font-family: inherit;

        &#title {
            font-size: 16px;
            font-weight: 700;
            padding-right: 20px;  
            display: flex;
            align-items: center;                     
        }
    }
`

const CustomerLaunchModalSection = styled(LaunchModalSection)`

    gap: 10px;
    padding-left: 20px;
    padding-right: 20px;

    p {
        font-family: inherit;

        &#title {
            font-size: 16px;
            font-weight: 700;
            padding-right: 20px;  
            display: flex;
            align-items: center;                     
        }
    }
`

const RestLaunchSettings = styled(LaunchModalSection)`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;
    padding-left: 50px;
    width: 100%;
    margin-bottom: 30px;

    span {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 !important;

        &:hover {
            background-color: transparent !important;
        }
    }
    .radioBtn {
        margin-left:0 !important;

        span:first-child {
            padding-right: 5px !important;
        }
        span:last-child {
            font-size: 0.9rem !important;
        }
    }
    .dateTimePicker {
        font-size: 0.9rem !important;
        padding: 5px 0 !important;
        padding-left: 30px !important;  
    }
    .calendarIcon {
        position: absolute;
        top: 3px;
        z-index: 1;
        left: 5px;
    }
`

const BoxCustom = styled(Box)`
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: calc(50% - 400px);
    left: calc(50% - 300px);
    width: auto;
    min-width: 500px;
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(0, 0, 0);
    padding: 10px 15px;
    -webkit-box-align: baseline;
    align-items: center;
    flex-direction: column;
    min-height: 500px;
    white-space: nowrap;
    border-radius: 8px;
    box-shadow: inset 0px 0px 5px rgb(0 0 0 / 60%);

    h5 {
        font-family: inherit !important;
        font-weight: 700 !important;
        font-size: 1.7rem !important;
        line-height: 1.3rem !important;
        transform: skewX(340deg);      
    }
`
const CustomerBoxCustom = styled(BoxCustom)`
    min-height: 400px;
    top: calc(50% - 250px);
    justify-content: space-around;

    h5 {
        font-family: inherit !important;
        font-weight: 700 !important;
        font-size: 1.7rem !important;
        line-height: 1.3rem !important;     
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
const ButtonAdd = styled(Button)`
    font-size: 0.775rem !important;
    font-family: inherit !important;
    padding: 5px 8px !important;
    border-radius: 6px !important;
    position: absolute !important;
    left: 22% !important;
    &::after {
        content: "Create New Customer";
    }
    span{
        margin-right: 4px !important;
        margin-left 0 !important;
    }
    @media (max-width: 890px){
        position: relative !important;;
        left: 0 !important;
    }
    @media (max-width: 670px){
        position: relative !important;
        left: 0 !important;
        &::after {
            content: "Create";
        }
    }
    @media (max-width: 500px){
        position: relative !important;
        left: 0 !important;
        &::after {
            content: "";
        }
    }    
`
const RecentOrdersContainer = styled.div`
    position: relative;
    display: block;
    min-height: 500px;
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
    position: relative;

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
        &:nth-child(3) {
            text-align: left;
        }
        &:last-child {
            white-space: break-spaces;
        }          
    }

    tr{
        color: var(--black1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);

        &:last-child{
            border-bottom: none;
        }
    }
    /*
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
    */
    tbody tr td {
        
        &:nth-child(3) > div {
            display: flex;
            justify-content: space-between;
            align-items: center;           
        }   
        &:last-child {
            text-align: left;           
        }       
    }

    tr td {
        padding: 10px;
        text-align: center;
        white-space: nowrap;

    }
`


const ButtonCustomer = styled(Button)`
    span { 
        margin: 0 !important;
        color: var(--white) !important;
    }
    &:hover {
      
    }
`

const ButtonRenewal = styled(Button)`
    margin-left: 30px !important;
    border: 1px solid var(--black1) !important;

    span {    
        margin: 0 !important;
        color: var(--black1) !important;
    }


    &:hover {
      
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