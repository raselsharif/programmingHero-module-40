
import { useState } from 'react';
import './Country.css'
function Country({ country, visitedCountriesHandle, handleFlags }) {
    const { name, flags, population, area, cca2 } = country;

    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        setVisited(!visited)
    }
    return (
        <div className={visited ? 'country-visited' : 'country'} >
            <h3>Country Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Populations: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca2}</p>
            <button onClick={handleVisited}>{visited ? 'visited' : 'want to visit'}</button> <br /> <br />
            <button onClick={() => visitedCountriesHandle(country)}>Mark Country</button>
            <br />
            <br />
            <button onClick={() => handleFlags(flags.png)}>Add Flag</button>

        </div >
    );
}

export default Country;