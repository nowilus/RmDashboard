import React , { useState, useEffect } from 'react'
import styled from 'styled-components'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import  './App.css';

const TopbarNew = ({user}) => {
    const handleEvent = () => {
        let toggle = document.querySelector('.toggle');
        let navigation = document.querySelector('.navigation');
        let main = document.querySelector('.main');

        toggle.onclick = function(){
            navigation.classList.toggle('active');
            main.classList.toggle('active');
        }
    }
    useEffect(() => {
        handleEvent();
    });

  return (
    <TopBar className="topbar"> 
        <User className="user">
            <img id='userImg' src={user}/>
        </User>    
        <Search className="search">
            <label>
                <input type="text" placeholder="Search here"/>
                <SearchIcon></SearchIcon>
            </label>
        </Search>

        <Toggle className="toggle">
            <Menu></Menu>
        </Toggle>        
    </TopBar>
  )
}

export default TopbarNew

const TopBar = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`
const Toggle = styled.div`
    position: relative;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    cursor: pointer;
    @media (max-width: 530px){
         z-index: 10001;
    }    
`
const Search = styled.div`
    position: relative;
    width: 400px;
    margin: 0 10px;

    label {
        position: relative;
        width: 100%;

        input {
            width: 100%;
            height: 40px;
            border-radius: 40px;
            padding: 5px 20px;
            padding-left: 35px;
            font-size: 18px;
            outline: none;
            border: 1px solid var(--black2);
            background: rgba(255,255,255,0.8);
    }
`
const User = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;

    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media (max-width: 530px){
        min-width: 40px;
    }
`
const Menu = styled(MenuOutlinedIcon)`
    font-size: 1em !important;
`
const SearchIcon = styled(SearchOutlinedIcon)`
    position: absolute;
    top: 0;
    left: 10px;
    font-size: 1.2em !important;
`