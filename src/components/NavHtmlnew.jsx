import React , { useState, useEffect } from 'react'
import styled from 'styled-components'
import AppleIcon from '@mui/icons-material/Apple';
import HomeIcon from '@mui/icons-material/Home';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import './App.css';

const NavHtmlNew = () => {

    const [selected, setSelected] = useState(1);

    const sections = [{'icon':<AppleIcon />, 'title':'Brand name'},
                {'icon':<HomeIcon />, 'title':'Dashboard'},
                {'icon':<PersonOutlineOutlinedIcon />, 'title':'Customers'},
                {'icon':<ChatBubbleOutlineOutlinedIcon />, 'title':'Message'},
                {'icon':<QuestionMarkOutlinedIcon />, 'title':'Help'},
                {'icon':<SettingsOutlinedIcon />, 'title':'Settings'},
                {'icon':<LockOutlinedIcon />, 'title':'Password'},
                {'icon':<LogoutOutlinedIcon />, 'title':'Sign out'}];  
    
    // const handleEvent = () => {
    //     let list = document.querySelectorAll('.navigation li');
    //     function activeLink(){
    //         list.forEach((item) => 
    //         item.classList.remove('hovered'));             
    //         this.classList.add('hovered');
    //     }
    //     list.forEach((item) =>
    //     item.addEventListener('mouseover',activeLink));    
    // }
    // useEffect(() => {
    //     handleEvent();
    // });
             
  return (
    <Navigation className='navigation'>
        <ListWrap>
            {sections && sections.map((section, index) => (
            <List key={index} className={index === selected ? 'hovered' : '' } onClick={() => setSelected(index)} >
                <a href="#">
                    <span className="icon">{section.icon}</span>
                    <span className="title">{section.title}</span>
                </a>
            </List>
            ))}
        </ListWrap>
    </Navigation>
  )
}

export default NavHtmlNew

const Navigation = styled.div`
position: fixed;
    width: 200px;
    height: 100%;
    background: linear-gradient(to top, #0099f7, #f11712);
    border-right: 20px solid transparent;
    transition: all 0.5s ease 0s;
    overflow: hidden;
    top: 0px;
    right: 0px;

    &.active {
        right: 10px;
        width: 80px;
        border-right: 0px solid transparent;
    }

    @media (max-width: 1080px){
        right: -200px;

        &.active{
            width: 200px;
            right: 0;
        }

    }    
    @media (max-width: 530px){
        width: 100%;
        right: -100%;
        z-index: 1000;
        
        &.active {
            width: 100%;
            right: 0;
        }
    }    
`

const ListWrap = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`

const List = styled.li`
    position: relative;
    width: 100%;
    list-style: none;
    border-radius: 8px;

    &:hover {
        background: rgba(255,255,255,0.3)
    }
    &.hovered {
        background: rgba(255,255,255,0.3)
    }
    &:nth-child(1) {
        margin-bottom: 40px;
        pointer-events: none;
    }
        a {
            position: relative;
            width: 100%;
            display: flex;
            text-decoration: none;
            text-align: center;
            justify-content: flex-start;
            color: var(--white);

            .icon {
                position: relative;
                display: block;
                min-width: 60px;
                height: 60px;
                line-height: 70px;
                text-align: center;
                margin-left: 10px;
            }
            .title {
                position: relative;
                display: block;
                padding: 0 10px;
                height: 60px;
                line-height: 60px;
                text-align: center;
                white-space: nowrap;
            }
        }
    &:hover a,
    &.hovered a{
        color: var(--blue);
    }
`