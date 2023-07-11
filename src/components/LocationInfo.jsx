

const LocationInfo = ({ location }) => {

  console.log(location)
  return (
    <article>
        <h2>{location?.name}</h2>
        <ul>
            <li><span>Type</span><span>{location?.Type}</span></li>
            <li><span>Dimension</span><span>{location?.dimension}</span></li>
            <li><span>Population</span><span>{location?.residents.length}</span></li>
        </ul> 
    </article>
  )
}

export default LocationInfo
