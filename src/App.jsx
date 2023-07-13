
import { useEffect, useState } from 'react'
import getRandomNumber from './utils/getRandomNumber.js'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormLocation from './components/FormLocation'
import './App.css'
import useFetch from './hooks/useFetch.js'




function App() {

  const [idLocation, setIdLocation] = useState (getRandomNumber(126))

  const url = `https://rickandmortyapi.com/api/location/${idLocation}`
  const [ location, getSingleLocation, hasError, isLoading] = useFetch(url)


  useEffect(() => {
  getSingleLocation()

  }, [idLocation])
  
  

  return (
    <div>
      <h1></h1>
      <FormLocation
        setIdLocation={setIdLocation}
      />
      {
        isLoading
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





