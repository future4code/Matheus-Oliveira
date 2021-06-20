import React from 'react'
import styled from 'styled-components'
import LikeHeart from '../../../assets/images/svg/purpleheart.svg'
import Xchoice from '../../../assets/images/svg/dislikeX.svg'
import DisplayFlexCenter from '../../../themes/display/DisplayFlexCenter'
import WebkitUserSelect from '../../../themes/webkit/WebkitUserSelect'

const SelectButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100px;
  padding: 0 10px;

  div {
    ${DisplayFlexCenter}
  }
`
const IconsButtons = styled.img`
  height: 60px;
  transition: 150ms;
  cursor: pointer;
  ${WebkitUserSelect}

  &:hover {
    height: 70px;
  }
`

export default function MatchButtons(props) {
  return (
    <>
      <SelectButtons>
        <div>
          <a  href="/#" onClick={props.chosenFalseByUser}>
            <IconsButtons
              src={Xchoice}>
            </IconsButtons>
          </a>
        </div>
        <div>
          <a  href="/#" onClick={props.chosenTrueByUser}>
            <IconsButtons
              src={LikeHeart}>
            </IconsButtons>
          </a>
        </div>
      </SelectButtons>
    </>
  )
}