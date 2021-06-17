import React, { useState, useEffect } from 'react'
import { API_BASE, API_NAME } from '../constants/API_Astromatch'
import HeartPulse from '../components/HeartPulse'
import styled from 'styled-components'
import axios from 'axios'
import MatchButtons from '../components/MatchButtons'
import ProfileInfo from '../components/ProfileInfo'
import WebkitUserSelect from '../themes/webkit/WebkitUserSelect'

const ProfilePositon = styled.div`
  padding-top: 20px;
  height: 75%;
  width: 100%;
  ${WebkitUserSelect}
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
        <ProfileInfo profiles={profiles}/>
          <MatchButtons
            chosenFalseByUser={chosenFalseByUser}
            chosenTrueByUser={chosenTrueByUser}
          />
        </>
      )}
    </ProfilePositon>
  )
}
