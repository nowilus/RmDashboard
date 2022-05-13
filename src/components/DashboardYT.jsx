import React from 'react'
import NavHtml from './NavHtml';
import Main from './Main'

const DashboardYT = (props) => {
  return (
    <div>
        <NavHtml sectionList = {props.sectionList}></NavHtml>
        <Main {...props}></Main>
    </div>
  )
}

export default DashboardYT