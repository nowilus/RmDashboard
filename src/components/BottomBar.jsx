import React, {useState} from 'react'
import styled from 'styled-components'
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import FindInPageOutlinedIcon from '@mui/icons-material/FindInPageOutlined';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { Button, Stack, IconButton } from '@mui/material'
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography } from '@mui/material'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const BottomBar = () => {

    const [selected, setSelected] = useState(true);
    const [bottomBarVisible, setBottomBarVisible] = useState(true);
    const matches = useMediaQuery('(max-width:1620px)');
    const matches2 = useMediaQuery('(max-width:400px)');


    const sections = [{'icon':<PendingActionsOutlinedIcon />, 'title':'Pending Documents', 'style':'white', 'tooltip':'Pending Documents'},
                {'icon':<CancelPresentationOutlinedIcon />, 'title':'Close', 'style':'white', 'tooltip':'Close'},
                {'icon':<RefreshOutlinedIcon />, 'title':'Refresh', 'style':'white', 'tooltip':'Refresh'},
                {'icon':<FindInPageOutlinedIcon />, 'title':'Search Deal Documents', 'style':'white', 'tooltip':'Search Deal Documents'},
                {'icon':<ManageAccountsOutlinedIcon />, 'title':'Manage Portfolio', 'style':'white', 'tooltip':'Manage Portfolio'}];                  

  return (
    <Container>
        {selected && !matches ? 
        <Bar bottomBarVisible={bottomBarVisible} className = 'bottomBar'>
             <SnapShotName>
                <TypographyCustom variant='subtitle1'>Release 3.10 Sprint 14.2.8 RMDB appVer. release 3.11 Sprint 15.0.1 HK</TypographyCustom>
            </SnapShotName>           
            <IconButton aria-label='send' size='small'><ArrowRightOutlinedIcon onClick={() => setSelected(!selected)}/></IconButton>       
            <IconButtonCst bottomBarVisible={bottomBarVisible} aria-label='up' size='medium'><ArrowForwardIosIcon onClick={() => setBottomBarVisible(!bottomBarVisible)}/></IconButtonCst>            
            <StackCustom spacing={1} display='block' direction='row'>  
            {sections && sections.map((section, index) => (
                <ButtonCustom key={index} className={`${section.style}`} variant='contained' startIcon={section.icon} size='small' onClick={() => alert(section.title)}>{section.title}</ButtonCustom>
            ))}
            </StackCustom>
        </Bar>        
        : 
        <Bar bottomBarVisible={bottomBarVisible} className = 'bottomBar'>
            <SnapShotName>
            {!matches2 &&
                <TypographyCustom variant='subtitle1'>Release 3.10 Sprint 14.2.8 RMDB appVer. release 3.11 Sprint 15.0.1 HK</TypographyCustom>
            }
            </SnapShotName>
            {!matches &&
            <IconButton aria-label='send' size='small'><ArrowLeftOutlinedIcon onClick={() => setSelected(!selected)}/></IconButton>
            }   
            <IconButtonCst bottomBarVisible={bottomBarVisible} aria-label='up' size='medium'><ArrowForwardIosIcon onClick={() => setBottomBarVisible(!bottomBarVisible)}/></IconButtonCst>   
            <StackCustom spacing={1} display='block' direction='row'>  
            {sections && sections.map((section, index) => (
                // <ButtonCustom key={index} className={`${section.style}`} variant='contained' startIcon={section.icon} size='small' onClick={() => alert(section.title)}>{section.title}</ButtonCustom>
                <IconList key={index} className={`${section.style}`} size='small' onClick={() => alert(section.title)}>
                   <Tooltip TransitionComponent={Zoom} title={section.tooltip} placement="top" enterDelay={300} leaveDelay={100} arrow>
                        {section.icon}
                    </Tooltip>
                </IconList>
            ))}
            </StackCustom>
        </Bar>
        }
    </Container>
  )
}

export default BottomBar


const IconButtonCst = styled(IconButton)`
    position: absolute !important;
    left: 0 !important;
    right: 0 !important;
    color: ${props => props.bottomBarVisible ? 'white !important' : 'black !important'};
    top: ${props => props.bottomBarVisible ? '-16px' : '-32px'};
    transform: ${props => props.bottomBarVisible ? 'rotate(90deg) ' : 'rotate(270deg)'};
    svg{
        font-size: 2rem !important;
    }
    &:hover {
        background-color: transparent !important;
    }
    @media (max-width: 500px){
        top: ${props => props.bottomBarVisible ? '-13px' : '-22px'};
        svg{
            font-size: 1.2rem !important;
        }        
        
    }
`
const StackCustom = styled(Stack)`
    margin-right: 10px !important;
`
const Container = styled.div`
    min-height: 80px;
`
const Bar = styled.div`
    position: fixed;
    display: flex;
    transition: all 0.5s ease 0s;
    left: 0;
    right: 0;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    -webkit-box-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(155 0 0);
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    bottom: ${props => props.bottomBarVisible ? '0' : '-50px'};
    @media (max-width: 250px){
        .white > svg {
            font-size : 0.8rem;
        }
    }
    @media (max-width: 200px){
        .white > svg {
            font-size : 0.8rem;
        }
        div {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 5px;
        }
    }  
    @media (max-width: 150px){
        padding-right: 0
    }  
 
`
const ButtonCustom = styled(Button)`
    text-transform: none !important;
    font-weight: 600 !important;
    border-radius: 6px !important;

    &.red{
        background: var(--red) !important;
        &:hover {
            background : #a91414 !important;
        }
    }
    &.white{
        background: #ffffff !important;
        color: #000000ad !important;        
        &:hover {
            background : #f7f7f7 !important;
        }
    }    
`

const IconList = styled(IconButton)`
    text-transform: none !important;
    font-weight: 600 !important;
    border-radius: 6px !important;

    &.red{
        background: var(--red) !important;
        &:hover {
            background : #a91414 !important;
        }
    }
    &.white{
        background: #ffffff !important;
        color: #000000ad !important;        
        &:hover {
            background : #f7f7f7 !important;
        }
    }    
`

const SnapShotName = styled.div`
    position: absolute;
    left: 0;
    margin-left: 20px;
`
const TypographyCustom = styled(Typography)`
    font-family: inherit !important;
    letter-spacing: 0 !important;
    font-weight: 600 !important;
    color: var(--white) !important;
    white-space: nowrap;

    @media (max-width: 1130px){
        width: 300px !important;
        white-space: break-spaces !important;
  }
  @media (max-width: 600px){
    width: 125px !important;
    white-space: normal !important;
    font-size: 0.5em !important;
    }

`