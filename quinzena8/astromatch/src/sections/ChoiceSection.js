import React, { useState, useEffect } from 'react'
import { API_BASE, API_NAME } from '../constants/API_Astromatch'
import HeartPulse from '../components/HeartPulse'
import styled from 'styled-components'
import axios from 'axios'

const ProfilePositon = styled.div`
  padding-top: 20px;
  height: 75%;
  width: 100%;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
`
const ProfilePhoto = styled.div`
  position: relative;
  width: 90.5%;
  height: 96%;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
  transition: 2s;

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

export default function ChoiceSection() {
  const [profiles, setProfiles] = useState({})
  const [choose, setChoose] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (choose === null) {
      axios
        .get(`${API_BASE}${API_NAME}/person`)
        .then(res => {
          setProfiles(res.data.profile)
          setLoading(false)
        })
        .catch(err => { console.log(err) })
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
  }, [choose]);

  const resetCard = () => {
    const card = document.getElementById("Mcard")

    if (card) {
      card.style.transition = 'none'
      card.style.transform = 'translate(0px) rotate(0deg)'
      card.style.opacity = '1'
    }
  }

  const chosenFalseByUser = () => {
    setChoose(false)
    const card = document.getElementById("Mcard")

    if (card) {
      card.style.transition = '2s'
      card.style.transform = 'translate(-200px) rotate(-20deg)'
      card.style.opacity = '0'
      setTimeout(resetCard, 2000);
    }
  }

  const chosenTrueByUser = () => {
    setChoose(true)
    const card = document.getElementById("Mcard")

    if (card) {
      card.style.transition = '2s'
      card.style.transform = 'translate(200px) rotate(20deg)'
      card.style.opacity = '0'
      setTimeout(resetCard, 2000);
    }
  }

  return (
    <ProfilePositon>
      {profiles === null || loading ? <HeartPulse></HeartPulse> : (
        <>
          <ProfilePhoto id="Mcard" class="Card" style={{
            backgroundSize: `cover`,
            backgroundPosition: `center`,
            backgroundImage: `url(${profiles.photo})`
          }}>
            <div></div>
            <h2>{profiles.name}, {profiles.age}</h2>
            <p>{profiles.bio}</p>
          </ProfilePhoto>
          <SelectButtons>
            <button onClick={chosenFalseByUser}>X</button>
            <button onClick={chosenTrueByUser}>S2</button>
          </SelectButtons>
        </>
      )}
    </ProfilePositon>
  )
}
