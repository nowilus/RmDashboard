import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home({sectionInfoList}) {
  return (
    <Container>
        {sectionInfoList && sectionInfoList.map((sectionInfo)=> (
        <Section 
            title={sectionInfo.title}
            description= {sectionInfo.description}
            backgroundImg = {sectionInfo.backgroundImg}
            leftBtnText={sectionInfo.leftBtnText}
            rightBtnText={sectionInfo.rightBtnText}
            arrowDownImgSrc = {sectionInfo.arrowDownImgSrc}
        />
        ))} 
    </Container>    
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`