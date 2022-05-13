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

const NavHtml = () => {

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
            <List key={index} className={index === selected ? 'hovered' : '' } onMouseOver={() => setSelected(index)} >
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

export default NavHtml

const Navigation = styled.div`
    position: fixed;
    width: 300px;
    height: 100%;
    background: #cf1b1b;
    border-left: 10px solid #cf1b1b;
    transition: all 0.5s ease 0s;
    overflow: hidden;

    &.active {
        width: 80px;
    }

    @media (max-width: 991px){
        left: -300px;

        &.active{
            width: 300px;
            left: 0;
        }

    }    
    @media (max-width: 530px){
        width: 100%;
        left: -100%;
        z-index: 1000;
        
        &.active {
            width: 100%;
            left: 0;
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
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;

    &:hover {
        background: var(--white);
    }
    &.hovered {
        background: var(--white);
    }
    &:nth-child(1) {
        margin-bottom: 40px;
        pointer-events: none;
    }
        a {
            position: relative;
            display: block;
            width: 100%;
            display: flex;
            text-decoration: none;
            color: var(--white);

            .icon {
                position: relative;
                display: block;
                min-width: 60px;
                height: 60px;
                line-height: 70px;
                text-align: center;
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
        color: var(--red);

        &::before {
            content: '';
            position: absolute;
            right: 0;
            top: -50px;
            width: 50px;
            height: 50px;
            background-color: transparent;
            border-radius: 50%;
            box-shadow: 35px 35px 0 10px var(--white);
            pointer-events: none;
        }
        &::after {
            content: '';
            position: absolute;
            right: 0;
            bottom: -50px;
            width: 50px;
            height: 50px;
            background-color: transparent;
            border-radius: 50%;
            box-shadow: 35px -35px 0 10px var(--white);
            pointer-events: none;
        }
    }
`