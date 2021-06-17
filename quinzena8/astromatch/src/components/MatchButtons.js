import React from 'react'
import styled from 'styled-components'
import LikeHeart from '../assets/images/svg/purpleheart.svg'
import Xchoice from '../assets/images/svg/dislikeX.svg'

const SelectButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100px;
  padding: 0 10px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const IconsButtons = styled.img`
  height: 60px;
  transition: 150ms;
  cursor: pointer;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;

  &:hover {
    height: 70px;
  }
`

export default function MatchButtons(props) {
  return (
    <>
      <SelectButtons>
        <a onClick={props.chosenFalseByUser}>
          <IconsButtons
            src={Xchoice}>
          </IconsButtons>
        </a>
        <a onClick={props.chosenTrueByUser}>
          <IconsButtons
            src={LikeHeart}>
          </IconsButtons>
        </a>
      </SelectButtons>
    </>
  )
}