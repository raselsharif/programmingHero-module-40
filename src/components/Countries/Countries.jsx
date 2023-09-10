import { useEffect } from "react"
import { useState } from "react"
import Country from "../Country/Country"
import './Countries.css'


export default function Countries() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  const [visitedCountries, setVisitedCountries] = useState([])

  const visitedCountriesHandle = (country) => {
    // console.log(country);
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
  }
  return (
    <>

      <div>Countries: {countries.length}</div>
      <div>
        <h3>Visited Country: {visitedCountries.length}</h3>
        <ul>
          {
            visitedCountries.map(country => <li>{country.name.common}</li>)
          }
        </ul>
      </div>
      <div className="countries">

        {
          countries.map(country => <Country key={country.cca2}
            country={country}
            visitedCountriesHandle={visitedCountriesHandle}
          ></Country>)
        }
      </div>
    </>
  )
}
