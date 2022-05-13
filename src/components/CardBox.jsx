import React from 'react'
import styled from 'styled-components'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import  './App.css';

const CardBox = () => {
    const cardList = [{'numbers':'1,504', 'cardName':'Daily Views', 'iconName': <RemoveRedEyeOutlinedIcon className='iconClass'/>},
    {'numbers':'80', 'cardName':'Sales', 'iconName': <ShoppingCartOutlinedIcon className='iconClass' />},
    {'numbers':'284', 'cardName':'Comments', 'iconName': <ChatBubbleOutlineOutlinedIcon className='iconClass'/>},
    {'numbers':'$7,842', 'cardName':'Earnings', 'iconName': <LocalAtmOutlinedIcon className='iconClass'/>}];

  return (
    <CardBoxComponent>
        {cardList && cardList.map((cardItem, index) => (
        <CardComponent key={index} className="card">
            <Wrap>
                <Numbers className="numbers">{cardItem.numbers}</Numbers>
                <CardName className="cardName">{cardItem.cardName}</CardName>
            </Wrap>
            <IconBxContainer className="iconBx">
                {cardItem.iconName}
            </IconBxContainer>             
        </CardComponent>
        ))} 
    </CardBoxComponent>
  )
}

export default CardBox

const CardBoxComponent = styled.div`
    position: relative;
    width: 100%;
    padding: 20px;
    grid-template-columns: repeat(4, 1fr);
    display: grid;
    grid-gap: 30px;

    @media (max-width: 1080px){
        grid-template-columns: repeat(2, 1fr);     
    }    
    @media (max-width: 530px){
        grid-template-columns: repeat(1, 1fr);
    }    
`

const CardComponent = styled.div`
    position: relative;
    background: var(--white);
    padding: 30px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);

    &:hover {
        background: var(--red);

        .iconBx,
        .cardName,
        .numbers{
            color: var(--white);
        }
    }
`

const Wrap = styled.div`

`

const CardName = styled.div`
    color: var(--black2);
    font-size: 1.1em;
    margin-top: 5px;
`

const Numbers = styled.div`
    position: relative;
    font-weight: 500;
    font-size: 2.5em;
    color: var(--red);
`
const IconBxContainer = styled.div`
    color: var(--black2);
    .iconClass {
        font-size: 3.5em;
    }
`