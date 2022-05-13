import React, {useState,useTransition, useEffect} from 'react'
import styled from 'styled-components'
import  './App.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Stack, IconButton} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import LoginIcon from '@mui/icons-material/Login';

const Login = ({logo,loginUser}) => {

  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');

  const [isUserNameError, setUserNameError] = useState(false);
  const [isRoleError, setRoleError] = useState(false);

  const handleChangeRole = (event) => {
    setRole(event.target.value);
  };
  const handlerUsername=(event) => {
    console.log(event.target.value);
    const output = event.target.value;
    setUsername(output)        
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
// const LoginButtonHandler = (roleIn,usernameIn) => { 
//     usernameIn == '' || roleIn == undefined ? setUserNameError(true) : setUserNameError(false); 
//     roleIn == ''  || usernameIn == undefined ? setRoleError(true) : setRoleError(false); 

//     // reloadPage(roleIn,usernameIn);
//     // showGlobe();   
//     // hideGlobeAfterSpecificTime(1000);
//     // setTimeout(function(){loginUser(roleIn,usernameIn);}, 1100); 
// }

const setValidationVariables = (roleIn,usernameIn) => { 
    usernameIn == '' || roleIn == undefined ? setUserNameError(true) : setUserNameError(false); 
    roleIn == ''  || usernameIn == undefined ? setRoleError(true) : setRoleError(false); 
}
function LoginButtonHandler(role, username) {
    setValidationVariables(role, username);
    if(!isUserNameError && !isRoleError){
        showGlobe();   
        hideGlobeAfterSpecificTime(1000);
        setTimeout(function(){loginUser(role,username);}, 1100); 
    }
}

// const reloadPage = (roleIn2,usernameIn2) => {
//     console.log(isUserNameError)
//     console.log(isRoleError)
//     if(!isUserNameError && !isRoleError){
//         showGlobe();   
//         hideGlobeAfterSpecificTime(1000);
//         setTimeout(function(){loginUser(roleIn2,usernameIn2);}, 1100); 
//     }
// }

  return (
    <Wrapper>
        <ContentWrapper>
            <HeaderWrap>
                <LogoWrapper logo={logo} />
                <TextOutput>RM Dashboard</TextOutput>
            </HeaderWrap>
            <BoxCustom>
                <p id='title'>Username/Login</p>
                <TextFieldCustom id="outlined-basic" variant="outlined" size="small" value = {username} onChange={handlerUsername} onPaste={handlerUsername} />
                {isUserNameError &&
                    <p id='errorMsg'>
                        First Name is required
                    </p>
                }
                <p id='title'>User role</p>              
                <FormControlCustom fullWidth size="small">
                    <Select
                        id="role"
                        value={role}
                        autoWidth
                        displayEmpty = {true}
                        renderValue={value => value ? value : '-- Select --' }
                        onChange={handleChangeRole}
                        >                              
                        <MenuItem value={'RM'}>RM</MenuItem>
                        <MenuItem value={'RM Support'}>RM Support</MenuItem>
                        <MenuItem value={'RM TeamLead'}>RM TeamLead</MenuItem>
                        <MenuItem value={"Credit Service"}>Credit Service</MenuItem>
                    </Select>
                </FormControlCustom> 
                {isRoleError &&
                    <p id='errorMsg2'>
                        Role is required
                    </p>
                }                    
                <ButtonLogin variant='contained' endIcon={<LoginIcon />} size='small' onClick={() => LoginButtonHandler(role,username)} >Login</ButtonLogin>      
            </BoxCustom>
        </ContentWrapper>
    </Wrapper>
  )
}

export default Login

const ButtonLogin = styled(Button)`
    border-radius: 4px !important;
    font-family: 'Kalam' !important;
    font-size: 12px !important;
    background-color: #1b69a9 !important;
    border: 1px solid #21486c !important;
    border-top-color: #4178aa !important;
    border-left-color: #4178aa !important;
    border-bottom-color: #21486c !important;
    border-right-color: #21486c !important;
    background-image: -webkit-gradient( linear, left bottom, left top, color-stop(0, #124B80), color-stop(1, #1B76BC) ) !important;

    span { 
        color: var(--white) !important;
    }
    &:hover {
        background-image: linear-gradient(to top, #124B80 0%, #429CE2 100%);
    }
`

const HeaderWrap = styled.div`
    position: relative;
    bottom: -60px;
`
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    -webkit-box-pack: center;
    justify-content: center;
    background: rgb(59, 62, 64);
    position: absolute;
`
const ContentWrapper = styled.div`
/*
    position: relative;
    width: 100%;
    height: 100%;
*/ 
    width: 510px;
    height: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -295px 0px 0px -255px;

`
const TextOutput = styled.div`
    position: relative;
    padding-top: 20px;
    color: #FFFFFF;
    margin-left: 20px;
    float: left;
    font-family: Kalam, cursive !important;
    font-size: 33px !important;
`
const LogoWrapper = styled.div`
/*
    position: relative;
    background-image: url(${props => props.logo});
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
*/

    background-image: url(${props => props.logo});
    height: 57px;
    width: 130px;
    float: left;
    position: relative;
    background-repeat: no-repeat;
    background-size: contain;
`
const BoxCustom = styled(Box)`
/*
    width: 510px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -70px 0 0 -255px;
*/    
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -70px 0px 10px -255px;
    float: left;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(50, 53, 55);
    border-radius: 8px;

    #title {
        padding-bottom: 5px !important;
        font-size: 20px !important;
        font-family: Kalam, cursive !important;
        float: left !important;
    }
    #errorMsg, #errorMsg2 {
        font-size: 14px;
        color: red;
        position: absolute;
        top: 120px;
        right: 40px;
        font-family: 'Kalam';
    }
    #errorMsg2 {
        top: 220px !important;

    }
`

const TextFieldCustom = styled(TextField)`
    width: 100% !important;
    padding-bottom: 25px !important;
`

const FormControlCustom = styled(FormControl)`
    padding-bottom: 25px !important;
`
