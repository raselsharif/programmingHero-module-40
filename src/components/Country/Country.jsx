
import './Country.css'
function Country({ country }) {
    const {name, flags, population, area} = country;
    return (
        <div className="country">
            <h3>Country Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Populations: {population}</p>
            <p>Area: {area}</p>
        </div>
    );
}

export default Country;