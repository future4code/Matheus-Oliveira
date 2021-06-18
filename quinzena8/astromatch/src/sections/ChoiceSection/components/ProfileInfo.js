import React from 'react'
import styled from 'styled-components'

const ProfilePhoto = styled.div`
  position: relative;
  width: 90.5%;
  height: 96%;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
  transition: 2s;
`
const ShadowBox = styled.div` 
  position: absolute;
  top: 65%;
  width: 100%;
  height: 35%;
  border-radius: 5px;
  background-image: linear-gradient(to top, #111 15%, transparent 85%);
`
const ProfileName = styled.h2`
  position: absolute;
  top: 72%;
  width: 100%;
  color: white;
  padding-left: 15px;
`
const ProfileBio = styled.p`
  position: absolute;
  top: 80%;
  width: 95%;
  color: white;
  padding-left: 15px;
  color: white;
  font-size: 18px;
`

export default function ProfileInfo(props) {
  return (
    <>
      <ProfilePhoto id="Mcard" class="Card" style={{
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        backgroundImage: `url(${props.profiles.photo})`
      }}>
        <ShadowBox />
        <ProfileName>{props.profiles.name}, {props.profiles.age}</ProfileName>
        <ProfileBio>{props.profiles.bio}</ProfileBio>
      </ProfilePhoto>
    </>
  )
}