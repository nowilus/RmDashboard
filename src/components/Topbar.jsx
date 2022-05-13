import React  from 'react'
import styled from 'styled-components'
import { Typography } from '@mui/material'
import { BsBookmarkStar, BsStarFill } from "react-icons/bs"
import  './App.css';

const Topbar = ({user, logout, username, role}) => {
    const handleLogout = () => {
        //document.querySelector(".logoutButton>div>button").click();
        showGlobe();   
        hideGlobeAfterSpecificTime(1000);
        setTimeout(function(){logout();}, 1100); 
   }
   const addBookmark = () => {
    if (window.sidebar) { // Mozilla Firefox Bookmark
        window.sidebar.addPanel(location.href,document.title,"");
      } else if(window.external && ('AddFavorite' in window.external)) { // IE Favorite
        window.external.AddFavorite(location.href,document.title); }
      else if(window.opera && window.print) { // Opera Hotlist
        this.title=document.title;
        return true;
      } else { // For the other browsers (mainly WebKit) we use a simple alert to inform users that they can add to bookmarks with ctrl+D/cmd+D	
		alert('You can add this page to your bookmarks by pressing ' + (navigator.userAgent.toLowerCase().indexOf('mac') != - 1 ? 'Command/Cmd' : 'CTRL') + ' + D on your keyboard.');
	}
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
  return (
    <TopBar className="topbar"> 
        <User className="user">
            <img id='userImg' src={user}/>
            <RmInfo>
                <p>{username} ({role})</p>
                <a href='#' onClick={handleLogout}>Logout</a>
            </RmInfo>
        </User>

        <TypographyCustom className='rmDash' variant='h2'>CMB Credit Workflow Tool</TypographyCustom>
        <Toggle className="toggle">        
            <a href='#' onClick={addBookmark}>Bookmark this page</a>
            <BsStarFill />
        </Toggle>
    </TopBar>
  )
}

export default Topbar

const TopBar = styled.div`
    height: max-content;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: flex-start;
    padding: 0px 10px;
    box-shadow: rgb(0 0 0 / 73%) 0px -4px 22px;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
    background-color: rgb(169, 15, 15);
`
const Toggle = styled.div`
    position: relative;
    padding-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    a{
        font-size: 16px !important;
        white-space: nowrap !important;
        text-decoration: underline !important;
        color: blue !important;
        font-weight: bolder !important;
        position: relative !important;
        margin-right: 10px !important;
    }
    path {
        fill: yellow !important;
    }
    @media (max-width: 890px){
        a{
            font-size: 13px !important;
        }
    }
    @media (max-width: 62px){
        a{
            font-size: 9px !important;
            margin-right: 2px !important;
        }
        svg {
            font-size: 0.6em !important;

        }
    }
  
`

const User = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    color: white;
    padding-left: 10px;
    padding-top: 5px;
    
    img{
        position: relative;
        top: 0px;
        left: 0px;
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50%;
    }
    @media (max-width: 890px){
        padding-bottom: 5px;
        img{
            width: 40px;
            height: 40px;
        }
    }
    @media (max-width: 620px){
        padding-bottom: 5px;
        img{
            width: 20px;
            height: 20px;
        }
    }
`
const RmInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 10px;   
    a {
        color: blue !important;
        font-weight: bold !important;
        font-size: 13px !important;
    }
    p {
        font-size: 13px !important;
        font-family: inherit !important;
        font-weight: 700 !important;
    }
    @media (max-width: 890px){
        a {
            font-size: 10px !important;
        }
        p {
            font-size: 10px !important;
        }
    }
    @media (max-width: 620px){
        a {
            font-size: 6px !important;
        }
        p {
            font-size: 6px !important;
        }
    }
`

const TypographyCustom = styled(Typography)`
    font-family: inherit !important;
    padding-top: 5px !important;
    padding-bottom: 5px !important;
    position: relative !important;
    color: white !important;
    font-size: 3.3rem !important;
    font-weight: 700 !important;
    @media (max-width: 1080px){
        font-size: 2.3rem !important;
    }
    @media (max-width: 890px){
        font-size: 1.3rem !important;
    }
    @media (max-width: 620px){
        font-size: 1rem !important;
    }
    @media (max-width: 340px){
        font-size: 0.5rem !important;
    }
`