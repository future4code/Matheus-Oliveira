import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { NAME_URL } from '../constants/name'

export default function MatchPage() {
  const [profiles, setProfiles] = useState({})

  useEffect(() => {
    axios
      .get(`${BASE_URL}${NAME_URL}/person`)
      .then(res => { setProfiles(res.data) })
      .catch(err => { })
}, []);

return (
  
  <div>
    
  </div>
)
}
