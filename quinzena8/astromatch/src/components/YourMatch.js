import React, { useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { NAME_URL } from '../constants/name'

export default function MatchPage() {

  const getallusers = () => {
    axios
      .get(`${BASE_URL}${NAME_URL}/person`)
      .then(res => { console.log(res.data) })
      .catch(err => { console.log(err); });
  }

  return (
    <div><button onClick={getallusers}></button></div>
  )
}