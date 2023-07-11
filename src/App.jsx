
import { useEffect, useState } from 'react'
import axios from 'axios'
import getRandomNumber from './utils/getRandomNumber.js'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormLocation from './components/FormLocation'

import './App.css'




function App() {

  const [location, setLocation ] = useState ()
  const [idLocation, setIdLocation] = useState (getRandomNumber(126))
  const [hasError, setHasError] = useState(false)
  const [isloading, setIsloading] = useState(true)
 
  useEffect (() => {

    const url = `https://rickandmortyapi.com/api/location/${idLocation}`
    setIsloading(true)
    axios
    .get(url)
    .then(res => {
      setLocation(res.data)
      setHasError(false)
    } )
    .catch(err => {
       console.error(err)
       setHasError(true)
    } )
    .finally(()=> {
      setIsloading(false)
    })

  }, [idLocation]);
  
  

  return (
    <div>
      <h1>RICK AND MORTY APP</h1>
      <FormLocation
        setIdLocation={setIdLocation}
      />
      {
        isloading
          ? (<h2>Loading ...🫣</h2>)
          : (
            hasError
              ? (<h1>❌ Hey! you must provide an id from i to 126 😢</h1>)
              : (
                <> 
                  <LocationInfo
                    location={location}
                  />
                  <div className='resident-container'>
                    {
                      location?.residents.map(url => (
                        <ResidentCard
                          key={url}
                          url={url}
                        />
                      ))
                    }
                  </div>
                </>
              )
          )
      }
    </div>
  )
  
  
}

export default App



