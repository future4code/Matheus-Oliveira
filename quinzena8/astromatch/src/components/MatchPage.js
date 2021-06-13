import React, { useState, useEffect } from 'react'
import { API_BASE, API_NAME } from '../constants/API_Astromatch'
import styled from 'styled-components'
import axios from 'axios'

const ProfilePositon = styled.div`
  padding-top: 20px;
  height: 75%;
  width: 100%;
`
const ProfilePhoto = styled.div`
  position: relative;
  width: 90.5%;
  height: 96%;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;

  h2 {
    position: absolute;
    top: 72%;
    width: 100%;
    color: white;
    padding-left: 15px;
  }

  p {
    position: absolute;
    top: 80%;
    width: 95%;
    color: white;
    padding-left: 15px;
    color: white;
    font-size: 18px;
  }

  div {
    position: relative;
    top: 65%;
    width: 100%;
    height: 35%;
    border-radius: 5px;
    background-image: linear-gradient(to top, #111 15%, transparent 85%);
  }
`
const SelectButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100px;
  padding: 0 10px;
`

export default function MatchPage() {
  const [profiles, setProfiles] = useState({})
  const [choose, setChoose] = useState(null)

  useEffect(() => {
    if (choose === null) {
      axios
        .get(`${API_BASE}${API_NAME}/person`)
        .then(res => { 
          setProfiles(res.data.profile)
         })
        .catch(() => {  })
    }
  }, [choose]);

  useEffect(() => {
    if (choose === true || choose === false) {
      const body = {
        id: profiles.id,
        choice: choose
      }
      axios
        .post(`${API_BASE}${API_NAME}/choose-person`, body)
        .then(() => { setChoose(null) })
        .catch(() => { })
    }
  }, [choose, profiles.id]);

  const chosenByUser = (value) => {
    setChoose(value)
  }

  return (
    <ProfilePositon>
      <ProfilePhoto style={{
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        backgroundImage: `url(${profiles.photo})`
      }}>
        <div></div>
        <h2>{profiles.name}, {profiles.age}</h2>
        <p>{profiles.bio}</p>
      </ProfilePhoto>
      <SelectButtons>
        <button onClick={() => chosenByUser(false)}>X</button>
        <button onClick={() => chosenByUser(true)}>S2</button>
      </SelectButtons>
    </ProfilePositon>
  )
}
