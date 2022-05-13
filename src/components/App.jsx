import React from 'react'
import { MuiButton } from './MuiButton';
import { useState, useTransition } from 'react';
import  './App.css';
import SimpleBottomNavigation from './Navigation';
import ComboBox from './ComboBox';
import PaperContainer from './PaperContainer'
import FencyMenu from './FencyMenu'
import Home from './Home';
import Header from './Header';
import HoverRating from './Rating';
import BadgeVisibility from './Badge';
import CustomizedSnackbars from './Snackbar';
import PaginationOutlined from './Pagination';
import IconAvatars from './Avatar';
import GroupAvatars from './AvatarGroup';
import AlertDialogSlide from './DialogBox';
import ControlledAccordions from './Accord';
import ImgMediaCard from './Lizard';
import NavHtml from './NavHtml';
import Main from './Main'
import DashboardYT from './DashboardYT';
import NavHtmlNew from './NavHtmlnew'
import MainNew from './MainNew'

function App(props) {
    return (
      <div className="App">
        {/* <SimpleBottomNavigation></SimpleBottomNavigation>
        <input className='inputStyle' type='text' placeholder='test' />
        <PaperContainer />
        <ComboBox />
        <FencyMenu /> */}
        {/* <Header {...props}/>
        <Home {...props}/> */}
        {/* <BadgeVisibility></BadgeVisibility>
        <HoverRating />
        <CustomizedSnackbars />
        <PaginationOutlined />
        <IconAvatars />
        <GroupAvatars />
        <AlertDialogSlide />
        <ControlledAccordions />
        <ImgMediaCard /> */}
        {/* <DashboardYT {...props} /> */}
        <Main {...props}></Main>
        {/* <NavHtml sectionList = {props.sectionList}></NavHtml> */}
      </div>
    );
  }
  
  export default App;
