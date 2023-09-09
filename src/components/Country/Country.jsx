
import './Country.css'
function Country({ country }) {
    return (
        <div className="country">
            <h3>Country Name: {country.name.common}</h3>
            <img src={country.flags.png} alt="" />
        </div>
    );
}

export default Country;