import './Countries.css'
import Country from '../Country/Country'
import countriesData from '../../data/countries'

export default function Countries() {
    return <div className="countries">
        <div className="container">
            <div className="countries__content">
                {countriesData.map((country) => (
                    <Country key={country.name} country={country} />
                ))}
            </div>
        </div>
    </div>
}