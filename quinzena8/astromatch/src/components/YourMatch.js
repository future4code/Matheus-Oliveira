import React, { useEffect } from 'react'
import axios from 'axios'
import {API_BASE, API_NAME} from '../constants/API_Astromatch'

export default function MatchPage() {

  const getallusers = () => {
    axios
      .get(`${API_BASE}${API_NAME}/person`)
      .then(res => { console.log(res.data) })
      .catch(err => { console.log(err); });
  }

  return (
    <div><button onClick={getallusers}></button></div>
  )
}